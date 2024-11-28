import React, { useState } from "react";
import Label from "../label/label";

export default function InputPassword({ label, name, value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 mb-6 w-full">
      <Label text={label} id={name} className="w-1/3" />
      <div className="w-2/3 relative">
        <input
          type={showPassword ? "text" : "password"}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full h-12 px-5 py-4 border border-black rounded-[4px] text-[16px] font-bold focus:outline-none focus:ring-2 focus:ring-black-500"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-500 focus:outline-none"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}

