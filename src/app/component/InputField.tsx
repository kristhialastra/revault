const InputField = ({
  label,
  type,
  name,
  placeholder,
  inputClassName = "",
  labelClassName = "",
  containerClassName = "",
}) => (
  <div className={`flex flex-col w-full ${containerClassName}`}>
    <label className={`text-sm text-gray-300 mb-1 ${labelClassName}`}>
      {label}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`px-3 py-2 bg-midnight border outline-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-teal ${inputClassName}`}
    />
  </div>
);

export default InputField;
