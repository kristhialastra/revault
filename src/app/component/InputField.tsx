const InputField = ({ label, type, name, placeholder, className = "" }) => (
  <div className="flex flex-col w-full">
    <label className="text-sm text-gray-300 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`px-3 py-2 bg-black/30 border outline-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal ${className}`}
    />
  </div>
);

export default InputField;
