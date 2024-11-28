import React from "react";
import Label from "../label/label";

export default function InputEmail({ label, name, value, onChange, placeholder}) {
  return (
    <div className="flex items-center gap-4 mb-6 w-full">
      <Label text={label} id={name} className="w-1/3" />
      <input
        type="email"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-2/3 h-12 outline-none border border-black rounded-lg py-3 px-4 text-xl font-bold"
      />
    </div>
  );
}
