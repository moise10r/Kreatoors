import { Select, Option } from "@material-tailwind/react";

export default function About() {
  const roles = [
    "Employee",
    "Manager",
    "Senior Leader (Director/VP/C-Suite)",
    "HR Professional",
    "Marketing Professional",
    "Communications Professional",
    "Freelancer/Consultant",
    "Other (Please Specify)",
  ];

  const departments = [
    "HR",
    "Marketing",
    "Communications",
    "Sales",
    "IT/Technology",
    "Operations",
    "Finance",
    "Legal",
    "Other (Please Specify)",
  ];

  return (
    <div className="">
      <h1 className="font-semibold mb-6 text-[24px]">Tell us about yourself</h1>
      <p className="mb-4 w-5/6 text-xs">
        What is your role within your company?
      </p>
      <div className="mb-10 text-xs">
        <Select
          label="Select"
          placeholder="Select a role"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {roles.map((role:string, index: number) => (
            <Option
              key={index}
              className={role.includes("Other") ? "font-semibold" : ""}
            >
              {role}
            </Option>
          ))}
        </Select>
      </div>

      <p className="mb-6">Which department do you belong to? </p>
      <div className="text-xs">
        <Select
          label="Select"
          placeholder="Select a department"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {departments.map((department, index) => (
            <Option
              key={index}
              className={department.includes("Other") ? "font-semibold" : ""}
            >
              {department}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
}
