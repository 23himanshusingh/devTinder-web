import React from "react";

const Usercard = (props) => {
  if (!props.user) {
    return <div className="text-center text-white my-4">No Users in Feed</div>;
  }

  const { firstName, lastName, photoUrl, about, gender, age } = props.user;
  return (
    <div>
      <div className="card bg-base-300 w-96 h-96 shadow-xl">
        <figure>
          <img
            src={photoUrl}
            alt="Profile-Photo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {gender && age && (<p>{gender + " " + age}</p>)}
          <p>{about}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-secondary">Interested</button>
            <button className="btn btn-primary">Ignore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
