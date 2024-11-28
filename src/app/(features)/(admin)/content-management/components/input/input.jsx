import Label from "../label/label";

export default function InputText({
  onChange = () => {},
  id,
  label,
  value,
  placeholder,
}) {
  return (
    <div className="flex items-center gap-4 w-full">
      <Label text={label} id={id} />
      <input
        type="text"
        id={id}
        name={id}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="w-full px-5 py-4 border border-black rounded-[4px] text-[16px] font-bold focus:outline-none focus:ring-2"
      />
    </div>
  );
}
