import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addRequests } from "../utils/requestSlice";
import { removeFeed } from "../utils/feedslice";

const Usercard = (props) => {
  if (!props.user) {
    return <div className="text-center text-white my-4">No Users in Feed</div>;
  }
  const dispatch = useDispatch();

  const { _id, firstName, lastName, photoUrl, about, gender, age } = props.user;

  const sendRequest = async (_id, status) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/request/send/${status}/${_id}`,
        {},
        { withCredentials: true }
      );
      dispatch(addRequests(res?.data?.data));
      dispatch(removeFeed(_id));
    } catch (err) {
      console.log(err?.response?.data);
    }
  };

  return (
    <div>
      <div className="card bg-base-300 w-96 h-96 shadow-xl">
        <figure>
          <img src={photoUrl} alt="Profile-Photo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {firstName}
            {lastName ? " " + lastName : ""}
          </h2>
          {gender && age && <p>{gender + " " + age}</p>}
          <p>{about}</p>
          <div className="card-actions justify-center">
            <button
              className="btn btn-secondary"
              onClick={() => sendRequest(_id, "interested")}
            >
              Interested
            </button>
            <button
              className="btn btn-primary"
              onClick={() => sendRequest(_id, "ignored")}
            >
              Ignore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
