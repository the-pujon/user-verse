import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserCard from "../../Components/UserCard";
import SearchAndSort from "../../Components/SearchAndSort";
import AddUserModal from "../../Components/AddUserModal";

const UserList = () => {
  const [users, SetUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        SetUsers(data.users);
        setFilteredUsers(data.users);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen w-full max-w-screen-2xl mx-auto mt-10 relative">
      {/* search and sort components */}
      <SearchAndSort
        users={users}
        setFilteredUsers={setFilteredUsers}
        setModalOpen={setModalOpen}
      />

      {modalOpen === true && (
        <div
          className={`${
            modalOpen ? "block" : "hidden"
          }w-fit max-w-screen-2xl mx-auto z-40 fixed bg-white/30 backdrop-blur-lg shadow-2xl rounded-3xl top-56 left-0 lg:left-44 xl:left-96 border border-black/30 border-dotted h-fit `}
        >
          <AddUserModal setModalOpen={setModalOpen} />
        </div>
      )}

      {Loading ? (
        <div className="flex items-center justify-center h-screen text-4xl font-medium">
          Loading...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
          {filteredUsers?.map((user) => (
            <Link
              to={`/users/${user.id}`}
              key={user.id}
              className="shadow-lg rounded-tl-3xl rounded-br-3xl border border-black/30 border-dotted bg-transparent hover:scale-105 transition-all duration-200 "
            >
              <UserCard user={user} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
