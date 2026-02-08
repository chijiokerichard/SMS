import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import type { SelectChangeEvent } from "@mui/material/Select";
import { IoIosArrowDown } from "react-icons/io";
type FilterProps = {
  text?: string[];
  height?: number;
  width?: number | string;
  border?: string;
  bg?: string;
  iconColor?: string;
  // className?:string;
  borderRadius?: number;
  color?: string;
};

export default function BasicSelect({
  text,
  height,
  bg,
  border,
  color,
  iconColor,
  width,
  borderRadius,
}: FilterProps) {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const CustomIcon = (props: any) => {
    return <IoIosArrowDown {...props} />;
  };

  return (
    <Box>
      <FormControl>
        <Select
        MenuProps={{
    PaperProps: {
      style: {
        maxHeight: 150, // 👈 controls dropdown height
      },
    },
  }}
          style={{
            overflow: "hidden",
            color: color ?? "#0F87FF",
            borderRadius: borderRadius ? borderRadius : 8,
            outline: "none",
            background: bg ?? "#EDF5FF",
          }}
          
          displayEmpty
          // id="demo-simple-select"
          value={age}
          onChange={handleChange}
          renderValue={(selected) =>
            selected === "" ? (
              <span className={`text-[${color ?? "#0F87FF"}]`}>
                {text?.[0]}
              </span>
            ) : (
              selected
            )
          }
          sx={{
            "&:hover": {
              overflow: "hidden",
              borderColor: border ?? "#0F87FF",
            },

            backgroundColor: bg ?? "#0F87FF",
            height: height ?? 36, // or '36px'
            minHeight: height ?? 36,
            width: width ? width : 113,
            fontSize: 14,
            " &:hover": {
              borderColor: "red",
            },

            // remove blue border on focus
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: border ? `1px solid ${border}` : "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: border ? `1px solid ${border}` : "none",
            },
            textAlign: "center",
            "& .MuiOutlinedInput-notchedOutline": {
              outline: "none",
              border: border ? `1px solid ${border}` : "none",
              // border: 0.9,
              borderColor: border ?? "#0F87FF",
              overflow: "none",
            },

            color: "#0F87FF", //default text color (for selected value)
            ".MuiSelect-select": {
              padding: "2px 12px", // top, right, bottom, left
            },
            ".MuiSelect-icon": {
              color: iconColor ?? "#000",
              width: 16,
              height: 16,
              right: 8,
              // optional: change dropdown icon color too
            },
          }}
          IconComponent={CustomIcon} // custom icon here
        >
          {text?.map((text: string) => (
            <MenuItem value={text} style={{ fontSize: "14px", width: "100%" }}>
              {text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}