import Image from "next/image";
import { Checkbox, Textarea } from "@material-tailwind/react";

export default function Collaboration() {
  const contentPreferences = [
    "Increase Brand Visibility",
    "Attract New Clients",
    "Engage Employees",
    "Build Thoughtful Leadership",
    "Promote Company Culture",
    "Educate and Train",
    "General Content Creation",
    "Improve Internal Communication",
  ];

  return (
    <div className="overscroll-contain">
      <h1 className="font-semibold mb-6 text-[24px]">
        Define Your Content Preferences
      </h1>
      <p className="mb-6 w-5/6 text-[16px]">
        What type of content do you want to focus on?
      </p>
      <div className="mb-4">
        {contentPreferences.map((preference, index) => (
          <Checkbox
            key={index}
            id={`preference-${index}`}
            label={preference}
            ripple={true}
          />
        ))}
      </div>
    </div>
  );
}
