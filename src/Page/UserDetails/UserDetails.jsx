import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const userId = useParams().userId;

  const [userDetails, SetUserDetails] = useState({});
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        const user = data.users.find((user) => user.id === parseInt(userId));
        SetUserDetails(user);
        setLoading(false)
      });
  }, [userId]);

  return (
    <div className="min-h-screen w-full max-w-screen-2xl mx-auto flex items-center justify-center">
      {Loading ? (
        <div className="flex items-center justify-center h-screen text-4xl font-medium" >Loading...</div>
      ) : (
        <div className="flex flex-col md:flex-row gap-2 w-full items-center">
          <div className="flex-1">
            <img
              src={userDetails?.image}
              alt={`${userDetails?.firstName}'s picture`}
              className="w-full"
            />
          </div>
          <div className="flex-1 flex gap-1 flex-col">
            <p className="text-sm text-gray-400">#{userDetails?.id}</p>
            <p className="text-4xl">
              Name: {userDetails?.firstName + " " + userDetails?.lastName}
            </p>
            <p className="text-xl">First Name: {userDetails?.firstName}</p>
            <p className="text-xl">Last Name: {userDetails?.lastName}</p>
            <p className="text-xl">Maiden Name: {userDetails?.maidenName}</p>
            <p className="text-xl">Email: {userDetails?.email}</p>
            <p className="text-xl">Phone: {userDetails?.phone}</p>
            <p className="text-xl">Job Title: {userDetails?.company?.title}</p>
            <p className="text-xl">Company Name {userDetails?.company?.name}</p>
            <p className="text-xl">
              Address: {`${userDetails?.address?.address}, ${userDetails?.address?.city}, ${userDetails?.address?.state}`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
