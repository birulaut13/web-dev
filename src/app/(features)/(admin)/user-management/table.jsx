// src/app/(features)/(admin)/user-management/components/table/TableUser.jsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Td from "./components/table/Td";  // Komponen Td
import Thead from "./components/table/Thead";  // Komponen Thead

const TableUser = () => {
  // Data pengguna yang sesuai dengan kolom yang ada di Thead
  const users = [
    { id: 1, username: "JohnDoe", email: "john@example.com", role: "Admin", phone: "08123456789", status: "Active" },
    { id: 2, username: "JaneSmith", email: "jane@example.com", role: "Editor", phone: "08234567890", status: "Inactive" },
    { id: 3, username: "AliceJohnson", email: "alice@example.com", role: "Viewer", phone: "08345678901", status: "Active" },
  ];

  const router = useRouter();

  // Fungsi untuk menangani edit pengguna
  const handleEdit = (userId) => {
    alert(`Edit User ${userId}`);
    // Navigasi ke halaman edit pengguna
    router.push(`/user-management/edit/${userId}`);
  };

  // Fungsi untuk menangani penghapusan pengguna
  const handleDelete = (userId) => {
    alert(`Delete User ${userId}`);
    // Implementasi penghapusan pengguna
  };

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="min-w-full table-auto">
        <Thead />
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.role}</Td>
              <Td>{user.username}</Td>
              <Td>{user.phone}</Td>
              <Td>{user.status}</Td>
              <Td>
                <button
                  onClick={() => handleEdit(user.id)}
                  className="text-blue-500 hover:text-blue-700 mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Hapus
                </button>
              </Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUser;
