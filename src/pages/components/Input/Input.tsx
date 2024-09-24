interface InputProps {
    id?: string;
    value: string;
    label: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

export const Input: React.FC<InputProps> = ({id, label, value, type, onChange}) => {
  return (
    <>
      <label className="text-base mt-2">{label}:</label>
      <input
        className="border p-2 rounded h-10"
        id={id}
        value={value}
        type={type}
        onChange={(e) => onChange(e)}
        placeholder={`Enter your ${label}`}
        required
      />
    </>
  );
};
