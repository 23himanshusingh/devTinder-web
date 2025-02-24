import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connection);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections || connections.length === 0)
    return (
      <h1 className="text-center my-10 text-xl font-bold text-white">
        No Connections Found
      </h1>
    );

  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-white text-3xl mb-10">Connections</h1>
      {connections.map((connection) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } = connection;
        return (
          <div
            key={_id}
            className="card card-compact bg-base-300 shadow-xl m-4 p-4 w-full md:w-1/2 lg:w-1/3 mx-auto"
          >
            <div className="flex items-center">
              <img
                alt="photo"
                className="w-20 h-20 rounded-full object-cover"
                src={photoUrl || "https://via.placeholder.com/150"}
              />
              <div className="text-left ml-4">
                <h2 className="font-bold text-xl">
                  {firstName || ""} {lastName || ""}
                </h2>
                <p>
                  {age && <span>Age: {age}</span>}
                  {age && gender && " | "}
                  {gender && <span>Gender: {gender}</span>}
                </p>
                <p>{about || "No details provided."}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Connections;
