import React, { useState } from "react";
import { Checkbox } from "@material-tailwind/react";

export default function Goals() {
  const [checkedStates, setCheckedStates] = useState({
    leadership: false,
    visibility: false,
    networking: false,
    expertise: false,
    opportunities: false,
    other: false,
  });

  const handleChange = (key) => {
    setCheckedStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const labels = [
    { key: "leadership", label: "Build Industry Thought Leadership" },
    { key: "visibility", label: "Increase Visibility on LinkedIn" },
    { key: "networking", label: "Network with Industry Peers" },
    { key: "expertise", label: "Share Expertise in My Field" },
    { key: "opportunities", label: "Attract Career Opportunities" },
    { key: "other", label: "Other (Please Specify)" },
  ];

  return (
    <div>
      <h1 className="font-semibold mb-4 text-[24px]">Refine Your Personal Branding Goals</h1>
      <p className="mb-4 text-xs">
        What would you like to achieve through personal branding? 
      </p>
      <div className="text-xs space-y-4 flex flex-wrap items-center">
        {labels.map(({ key, label }) => (
          <div
            key={key}
            className={`inline-block pr-6 pl-2 rounded-full cursor-pointer transition-colors duration-300 ${
              checkedStates[key]
                ? "border-2 border-[#6a67af] bg-[#F6F6FF]"
                : "border-2 border-gray-300"
            }`}
          >
            <Checkbox
              id={`checkbox-${key}`}
              label={label}
              ripple={true}
              checked={checkedStates[key]}
              onChange={() => handleChange(key)}
              className="checked:bg-[#6a67af] checked:border-[#6a67af]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
