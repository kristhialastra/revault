const SettingsList = ({
  category,
  labels,
  setSelectedLabel,
  categoryClassName = "",
  ulClassName = "",
  labelClassName = "text-white-75",
}) => {
  return (
    <div>
      <h1 className={categoryClassName}>{category}</h1>

      <ul className={ulClassName}>
        {/* divider */}
        <div className="bg-dusk h-0.5 w-4/5 mb-2"></div>

        {labels.map((label, index) => (
          <li key={index} className={labelClassName} onClick={setSelectedLabel}>
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingsList;
