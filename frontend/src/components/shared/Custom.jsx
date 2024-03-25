import { TextField } from "@mui/material";

const CustomInput = (name, type, placeholder, label) => {
  return (
    <TextField
      type={type}
      name={name}
      placeholder={placeholder}
      label={label} // Added label prop for better accessibility
      className="bg-white border border-solid border-2 text-black-500 text-1xl p-1 w-2/3 "
    />
  );
};

export default CustomInput;
