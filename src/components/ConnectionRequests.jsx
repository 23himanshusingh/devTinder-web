import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";
import { useEffect } from "react";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const reviewRequest = async (status, _id) => {
    try {
      await axios.post(
        `${BASE_URL}/request/review/${status}/${_id}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (err) {
      console.log(err?.response?.data);
    }
  };

  const fetchRequests = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/requests/received`, {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.log(err?.response?.data);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, [dispatch]);

  if (!requests || requests.length === 0)
    return (
      <h1 className="text-center my-10 text-xl font-bold text-white">
        No Requests Found
      </h1>
    );

  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-white text-3xl mb-8">Connection Requests</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {requests.map((request) => {
          const { _id, firstName, lastName, photoUrl, age, gender, about } =
            request.fromUserId;
          return (
            <div
              key={_id}
              className="card card-compact w-72 bg-base-300 shadow-lg transition-transform duration-300 transform hover:scale-105 mx-auto"
            >
              <figure className="w-full h-32 overflow-hidden">
                <img
                  alt="photo"
                  className="w-full h-full object-cover"
                  src={photoUrl || "https://via.placeholder.com/150"}
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-lg text-left">
                  {firstName + " " + lastName}
                </h2>
                {(age || gender) && (
                  <p className="text-sm text-left">
                    {age && <span>Age: {age}</span>}
                    {age && gender && " | "}
                    {gender && <span>Gender: {gender}</span>}
                  </p>
                )}
                <p className="text-sm break-words text-left">
                  {about || ""}
                </p>
                <div className="card-actions justify-center mt-4 space-x-2">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => reviewRequest("rejected", request._id)}
                  >
                    Reject
                  </button>
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => reviewRequest("accepted", request._id)}
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;
