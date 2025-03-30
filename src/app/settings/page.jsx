"use client";

import React, { useState } from "react";
import NavBar from "../component/NavBar";
import SettingsList from "@/components/ui/settings-sidebar";
import EditProfile from "../component/EditProfile";
import componentMap from "@/lib/settingsComponentMap";

function Settings() {
  const [selectedLabel, setSelectedLabel] = useState("Edit Profile"); // Default to 'Edit Profile'

  const settingsData = [
    {
      category: "General",
      labels: [
        "Edit Profile",
        "Change Password",
        "Appearance",
        "Notification Preference",
        "Manage Linked Accounts",
      ],
    },
    {
      category: "Security & Privacy",
      labels: ["Two-Factor Authentication", "Account Activity Log"],
    },
    {
      category: "Repository & Upload Settings",
      labels: ["Default Metadata Preference", "Document Comments"],
    },
  ];

  return (
    <div className="h-screen flex flex-col">
      <nav>
        <NavBar />
      </nav>
      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="w-auto h-full pl-17 pt-10 ml-5">
          <h1 className="text-4xl font-bold text-white-75">System Settings</h1>

          {settingsData.map((setting, index) => (
            <SettingsList
              key={index}
              category={setting.category}
              labels={setting.labels}
              setSelectedLabel={setSelectedLabel} // Pass the function
              categoryClassName="text-base text-white-75 font-bold mb-3 mt-10"
              ulClassName=""
              labelClassName="pl-4 text-sm text-normal mb-3 cursor-pointer hover:text-teal"
            />
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 pt-29.5">
          {componentMap[selectedLabel] || <EditProfile />}
        </main>
      </div>
    </div>
  );
}

export default Settings;
