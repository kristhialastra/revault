import WarningMessage from "./WarningMessage";

const EditProfile = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl ml-1">Edit Profile</h1> {/* divider */}
      <div className="bg-dusk h-0.5 w-4xl mb-2 mt-2"></div>
      <WarningMessage
        containerClassName="w-xl"
        textClassName=" "
        message="Contact your admin if you want to request to change your Student Information"
      />
    </div>
  );
};

export default EditProfile;
