import React from "react";

const UserCard = ({ user }) => {
  return (
    <>
      <div>
        <img src={user?.image} alt={`${user?.firstName}'s picture`} />
      </div>
      <div className="px-4 py-2">
        <p className="text-sm text-gray-400">#{user?.id}</p>
        <p className="text-3xl"> {user?.firstName + " " + user?.lastName}</p>
        <p className="text-base">{user?.email}</p>
        <p className="text-base">{user?.phone}</p>
        <p className="text-base font-medium"> {user?.company.title}</p>
        <p className="text-base font-medium">-- {user?.company.name}</p>
        <p className="text-base">
          {`${user?.address.address}, ${user?.address.city}, ${user?.address.state}`}
        </p>
      </div>
    </>
  );
};

export default UserCard;
