import React, { useState } from "react";
import { Checkbox, Textarea } from "@material-tailwind/react";
import Image from "next/image";

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
        { key: "Team", label: "Team Spotlights" },
        { key: "Employee", label: "Employee Success Stories" },
        { key: "Recruitment", label: "Recruitment Posts" },
        { key: "Industry", label: "Industry News" },
        { key: "Events", label: "Events and Announcements" },
        { key: "Social", label: "Social Media Content" },
        { key: "Videos", label: "Videos and Visual Content" },
        { key: "other", label: "Other (Please Specify)" },
    ];

    const medias = [
        { key: "Linkedin", label: "Linkedin", image: "/logo1.png" },
        { key: "x", label: "X", image: "/logo3.jpg" },
        { key: "Instagram", label: "Instagram", image: "/logo2.png" },
        { key: "Facebook", label: "Facebook", image: "/logo5.png" },
        { key: "Tiktok", label: "Tiktok", image: "/logo4.png" },
        { key: "other", label: "Other (Please Specify)", image: false },
    ];

    return (
        <div className="max-h-[60vh] overflow-y-auto overflow-x-clip hide-scrollbar">
            <h1 className="font-semibold mb-6 text-[24px]">Define Your Content Preferences</h1>
            <p className="mb-6 w-5/6 text-xs">
                What type of content do you want to focus on?
            </p>
            <div className="mb-4 space-y-4 text-xs">
                {labels.map(({ key, label }) => (
                    <div
                        key={key}
                        className={`inline-block pr-6 pl-2 mr-2 rounded-full cursor-pointer transition-colors duration-300 ${checkedStates[key]
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

            <p className="mb-6 w-5/6 text-xs">
                Which platforms will you use for sharing content?
            </p>

            <div>
                <div className="text-xs flex flex-wrap items-center justify-between">
                    {medias.map(({ key, label, image }) => (
                        <div
                            key={key}
                            className={`pr-6 pl-2 w-[32%] mb-4 h-24 flex items-start rounded-xl cursor-pointer transition-colors duration-300 ${checkedStates[key]
                                ? "border-2 border-[#6a67af] bg-[#F6F6FF]"
                                : "border-2 border-gray-300"
                                }`}
                        >
                            <Checkbox
                                id={`checkbox-${key}`}
                                ripple={true}
                                checked={checkedStates[key]}
                                onChange={() => handleChange(key)}
                                className="checked:bg-[#6a67af] checked:border-[#6a67af]"
                            />
                            <div className="flex flex-col py-2 items-center justify-around h-full">
                                <Image src={image} alt="" width={400} height={400} quality={100} className={ image == false? "hidden" : "block w-6"}/>
                                <p className="text-center">{label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
