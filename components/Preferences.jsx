import React, { useState } from "react";
import { Checkbox, Textarea } from "@material-tailwind/react";

export default function Preferences() {
  const [checkedStates, setCheckedStates] = useState({
    awareness: false,
    engagement: false,
    talent: false,
    leadership: false,
    achievements: false,
    csr: false,
    trust: false,
    other: false,
  });

  const handleChange = (key) => {
    setCheckedStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const labels = [
    { key: "awareness", label: "Build Employer Brand Awareness" },
    { key: "engagement", label: "Increase Team Engagement" },
    { key: "talent", label: "Attract New Talent" },
    { key: "leadership", label: "Build Thought Leadership" },
    { key: "achievements", label: "Share Company Achievements" },
    { key: "csr", label: "Promote CSR Initiatives" },
    { key: "trust", label: "Increase Customer Trust" },
    { key: "other", label: "Other (Please Specify)" },
  ];

  return (
    <div className="max-h-[60vh] overflow-y-auto overflow-x-clip hide-scrollbar">
      <h1 className="font-semibold mb-6 text-[24px]">Define Your Content Goals</h1>
      <p className="mb-6 w-5/6 text-xs">
        What are your primary goals for creating and sharing content? 
      </p>
      <div className="mb-4 space-y-4 text-xs">
        {labels.map(({ key, label }) => (
          <div
            key={key}
            className={`inline-block pr-6 pl-2 mr-2 rounded-full cursor-pointer transition-colors duration-300 ${
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
        <Textarea label="Message" />
      </div>
    </div>
  );
}
