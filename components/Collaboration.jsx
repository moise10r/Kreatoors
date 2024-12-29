import Image from "next/image";
import { Checkbox, Textarea } from "@material-tailwind/react";

export default function Collaboration() {
    return (
        <div className="overscroll-contain">
            <h1 className="font-semibold mb-6 text-[24px]">Define Your Content Preferences</h1>
            <p className="mb-6 w-5/6 text-[16px]">What type of content do you want to focus on?</p>
            <div className="mb-4">
                <Checkbox id="ripple-on" label="Increase Brand Visibility" ripple={true} />
                <Checkbox id="ripple-on" label="Attract New Clients" ripple={true} />
                <Checkbox id="ripple-on" label="Engage Employees" ripple={true} />
                <Checkbox id="ripple-on" label="Build Thoughtful Leadership" ripple={true} />
                <Checkbox id="ripple-on" label="Promote Company Culture" ripple={true} />
                <Checkbox id="ripple-on" label="Educate and Train" ripple={true} />
                <Checkbox id="ripple-on" label="General Content Creation" ripple={true} />
                <Checkbox id="ripple-on" label="Improve Internal Communication" ripple={true} />
            </div>
        </div>
    );
}