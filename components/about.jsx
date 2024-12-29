import { Select, Option } from "@material-tailwind/react";

export default function About() {
    return (
        <div className="">
            <h1 className="font-semibold mb-6 text-[24px]">Tell us about yourself</h1>
            <p className="mb-4 w-5/6 text-xs">What is your role within your company?</p>
            <div className="mb-10 text-xs">
                <Select label="Select">
                    <Option>Employee</Option>
                    <Option>Manager</Option>
                    <Option>Senior Leader (Director/VP/C-Suite)</Option>
                    <Option>HR Professional</Option>
                    <Option>Marketing Professional</Option>
                    <Option>Communications Professional</Option>
                    <Option>Freelancer/Consultant</Option>
                    <Option className="font-semibold">Other (Please Specify)</Option>
                </Select>
            </div>

            <p className="mb-6">Which department do you belong to? </p>
            <div className="text-xs">
                <Select label="Select">
                    <Option>HR</Option>
                    <Option>Marketing</Option>
                    <Option>Communications</Option>
                    <Option>Sales</Option>
                    <Option>IT/Technology</Option>
                    <Option>Operations</Option>
                    <Option>Finance</Option>
                    <Option>Legal</Option>
                    <Option className="font-semibold">Other (Please Specify)</Option>
                </Select>
            </div>
        </div>
    );
}