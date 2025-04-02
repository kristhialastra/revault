import InputField from "./InputField";
import WarningMessage from "./WarningMessage";

const EditProfile = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl ml-1">Edit Profile</h1>
      {/* divider */}

      <div className="bg-dusk h-0.5 w-4xl mb-2 mt-2"></div>

      {/* Warning message from WarningMessage.tsx */}
      <WarningMessage
        containerClassName="w-xl"
        textClassName=" "
        message="Contact your admin if you want to request to change your Student Information"
      />

      <InputField
        containerClassName="pt-4"
        label="Name"
        type="text"
        name="fullName"
        placeholder="John Allen Troy Valena"
        inputClassName="w-sm ml-5 h-14 "
        labelClassName="ml-5"
      />

      <InputField
        containerClassName="pt-4"
        label="Student Number"
        type="number"
        name="studentNumber"
        placeholder="202236115"
        inputClassName="w-sm ml-5 h-14 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        labelClassName="ml-5"
      />

      <InputField
        containerClassName="pt-4"
        label="Program"
        type="text"
        name="program"
        placeholder="Information Technology"
        inputClassName="w-sm ml-5 h-14"
        labelClassName="ml-5"
      />

      <InputField
        containerClassName="pt-4"
        label="Email"
        type="email"
        name="email"
        placeholder="jatevalena2022@plm.edu.ph"
        inputClassName="w-sm ml-5 h-14"
        labelClassName="ml-5"
      />

      <InputField
        containerClassName="pt-4"
        label="Bio"
        type="text"
        name="bio"
        placeholder=""
        inputClassName="w-xl h-20 ml-5"
        labelClassName="ml-5 text-start"
      />

      <h1 className="text-2xl ml-1 mt-10">Edit Profile</h1>

      {/* divider */}
      <div className="bg-dusk h-0.5 w-4xl mb-2 mt-2"></div>
      <div className="w-2xl outline-2 bg-midnight h-16 ml-5 rounded-md"></div>
    </div>
  );
};

export default EditProfile;
