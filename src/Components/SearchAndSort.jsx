import React, { useEffect, useState } from "react";

const SearchAndSort = ({ users, setFilteredUsers, setModalOpen }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //for search
  useEffect(() => {
    let value = search.toLowerCase();
    let userSearch = users.filter((data) => {
      const firstName = data.firstName.toLowerCase();
      const lastName = data.lastName.toLowerCase();
      const maidenName = data.maidenName.toLowerCase();
      return (
        firstName.startsWith(value) ||
        lastName.startsWith(value) ||
        maidenName.startsWith(value)
      );
    });
    setFilteredUsers(userSearch);
  }, [search]);

  const handleSort = (e) => {
    if (e.target.value === "name") {
      const sortedUsers = [...users].sort((a, b) => {
        return a.firstName.localeCompare(b.firstName);
      });
      setFilteredUsers(sortedUsers);
    } else if (e.target.value === "email") {
      const sortedUsers = [...users].sort((a, b) =>
        a.email.localeCompare(b.email)
      );
      setFilteredUsers(sortedUsers);
    } else {
      const sortedUsers = [...users].sort((a, b) =>
        a.company.name.localeCompare(b.company.name)
      );
      setFilteredUsers(sortedUsers);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 w-full my-3">
      <div className="py-2 px-4 border border-black/30 border-dotted w-full">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className="bg-transparent outline-none p-1"
          onChange={handleSearch}
        />
      </div>
      <button
        onClick={() => setModalOpen(true)}
        className="w-full md:w-72 text-center py-2 px-4 border border-black/30 border-dotted transition-all duration-100 hover:-translate-y-1 active:scale-95"
      >
        Add User
      </button>
      <div className="w-full md:w-72 flex items-center justify-center border border-black/30 border-dotted py-2 px-4">
        {/*<div>*/}
        <select
          name="sort"
          id="sort"
          className="bg-transparent w-full outline-none px-4 cursor-pointer"
          onChange={handleSort}
        >
          <option value="" disabled>
            Sort
          </option>
          <option value="name">Name</option>
          <option value="email">Email</option>
          <option value="company">Company</option>
        </select>
        {/*</div>*/}
      </div>
    </div>
  );
};

export default SearchAndSort;
