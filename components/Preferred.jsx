import React, { useState } from "react";
import { Radio, Select, Option } from "@material-tailwind/react";

export default function Preferred() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (key) => {
    setSelectedOption(key);
  };

  const frequencyLabels = [
    { key: "daily", label: "Daily" },
    { key: "weekly", label: "Weekly" },
    { key: "monthly", label: "Monthly" },
    { key: "occasionally", label: "Occasionally" },
  ];

  const collaborationOptions = [
    "My Manager",
    "Marketing Team",
    "HR Team",
    "Leadership Team",
    "Colleagues/Peers",
    "I don’t collaborate",
    "Other (Please Specify)",
  ];

  return (
    <div className="overscroll-contain">
      <h1 className="font-semibold mb-6 text-[24px]">
        Preferred Platforms and Frequency
      </h1>
      <p className="mb-6 w-5/6 text-[16px]">
        How often would you like to share content?
      </p>
      <div className="mb-4 space-y-4 text-xs">
        {frequencyLabels.map(({ key, label }) => (
          <div
            key={key}
            className={`inline-block pr-6 pl-2 mr-2 rounded-full cursor-pointer transition-colors duration-300 ${
              selectedOption === key
                ? "border-2 border-[#6a67af] bg-[#F6F6FF]"
                : "border-2 border-gray-300"
            }`}
          >
            <Radio
              id={`radio-${key}`}
              label={label}
              ripple={true}
              icon={<div className="bg-[#fff] w-2 h-2 rounded-full"></div>}
              checked={selectedOption === key} // Ensure only the selected one is checked
              onChange={() => handleChange(key)} // Set the selected option
              className={`bg-[#fff] checked:bg-[#6a67af] checked:border-[#ffffff]`} // Set the radio button to white and checked color to #6a67af
            />
          </div>
        ))}
      </div>
      <p className="mb-6 w-5/6 text-[16px]">
        Who do you collaborate with for content?
      </p>
      <Select label="Select">
        {collaborationOptions.map((option, index) => (
          <Option key={index}>{option}</Option>
        ))}
      </Select>
    </div>
  );
}
