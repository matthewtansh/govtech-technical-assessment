"use client";

import { useState } from "react";

interface User {
  id: number;
  name: string;
}

const initialUsers = [
  { id: 1, name: "Amy" },
  { id: 2, name: "Bravo" },
  { id: 3, name: "Charlie" },
];

export default function UserForm() {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const [newName, setNewName] = useState("");

  const handleAddUser = () => {
    if (newName.trim()) {
      setUsers([...users, { id: Date.now(), name: newName }]);
      setNewName("");
    }
  };

  const handleUpdateUser = (id: number, name: string) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, name: name } : user)),
    );
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="mx-auto mt-10 max-w-md border-2 border-black p-[15px]">
      {/* Name */}
      <div>Name</div>

      {/* Input and Add Button */}
      <div className="mt-[5px] mb-[20px]">
        <input
          className="w-[30%] rounded-sm border border-neutral-400 bg-white px-2 py-1"
          type="text"
          value={newName}
          placeholder="Enter new name"
          onChange={(e) => setNewName(e.target.value)}
        />
        <button
          className="ml-[10px] rounded-sm bg-[#7CB9E8] px-2 py-1"
          onClick={handleAddUser}
        >
          Add
        </button>
      </div>

      {/* List of Users */}
      <div className="mb-[10px]">List of Users</div>
      <div>
        {users.map((user) => (
          <div className="mb-[10px]" key={user.id}>
            {/* User */}
            <input
              className="w-[30%] rounded-sm border border-neutral-600 bg-white px-2 py-1 text-center"
              type="text"
              value={user.name}
              onChange={(e) => handleUpdateUser(user.id, e.target.value)}
            />

            {/* Delete Button */}
            <button
              className="ml-[10px] rounded-sm bg-red-400 px-2 py-1"
              onClick={() => handleDeleteUser(user.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
