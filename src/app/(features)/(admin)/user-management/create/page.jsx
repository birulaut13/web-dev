"use client";

import React, { useState } from "react";
import InputText from "../components/input/input";
import InputEmail from "../components/input/inputEmail";
import InputPassword from "../components/input/inputPassword";
import InputSubmit from "../components/input/inputSubmit";
import InputSelect from "../components/input/InputSelect";
import Heading1 from "../components/heading1";

export default function CreateUserPage() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Educator",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.password !== userData.confirmPassword) {
      setError("Password dan konfirmasi password tidak cocok!");
      return;
    }

    setError("");

    console.log("User created: ", userData);
  };

  const roleOptions = [
    { value: "Educator", label: "Educator" },
    { value: "Waste Collector", label: "Waste Collector" },
  ];

  return (
    <form onSubmit={handleSubmit} className="px-4 py-2 w-full">
      <Heading1 text="Tambah Pengguna Baru" className="mb-6" />

      <div className="mb-6">
        <InputText
          label="Nama Pengguna"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
      </div>

      {/* Input Email */}
      <div className="mb-6">
        <InputEmail
          label="Email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
      </div>

      {/* Dropdown Role */}
      <div className="mb-6">
        <InputSelect
          label="Peran"
          id="role"
          options={roleOptions} // Mengirim opsi dropdown
        />
      </div>

      <div className="mb-6">
        <InputPassword
          label="Password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
      </div>

      <div className="mb-6">
        <InputPassword
          label="Konfirmasi Password"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleChange}
        />
      </div>

      {/* Menampilkan pesan error jika password tidak cocok */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Tombol Submit */}
      <div className="flex justify-end mt-6">
        <InputSubmit text="Simpan" />
      </div>
    </form>
  );
}