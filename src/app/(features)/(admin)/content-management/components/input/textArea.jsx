import Label from "../label/label";

export default function TextArea({
  onChange = () => {},
  id,
  label,
  value,
  placeholder,
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label text={label} id={id} />
      <textarea
        name={id}
        id={id}
        onChange={onChange}
        rows="10"
        placeholder={placeholder}
        className="w-full px-5 py-4 rounded-[4px] text-[16px] border border-black"
        value={value}
      ></textarea>
    </div>
  );
}