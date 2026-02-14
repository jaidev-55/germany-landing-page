interface inputProps {
  name: string;
  type?: string;
  placeholder: string;
  value: string;
  error?: string;
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<inputProps> = ({
  name,
  type = "text",
  placeholder,
  value,
  error,
  focused,
  onFocus,
  onBlur,
  onChange,
}) => (
  <div className="relative">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      className="w-full px-4 py-3 rounded-xl border-2 text-sm font-nunito outline-none transition-all"
      style={{
        borderColor: error ? "#EF4444" : focused ? "#FBBF24" : "#E5E7EB",
        backgroundColor: "#fff",
        boxShadow: focused ? "0 0 0 3px rgba(251,191,36,0.1)" : "none",
      }}
    />
    {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
  </div>
);

export default CustomInput;
