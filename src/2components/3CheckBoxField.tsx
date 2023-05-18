import React, { useEffect, useState } from "react";
import { InputProps } from "../3types/InputProps";
import useInput from "../4hooks/useInput";

interface CheckboxProps {
  options: {
    name: string;
    value: string;
    image: string;
    checked: boolean;
  }[];
}

const CheckBoxField: React.FC<InputProps & CheckboxProps> = ({
  label,
  options,
  source,
}) => {
  const { value, onChange } = useInput({ source, validates: [] });

  useEffect(() => {
    console.log("CBvalue:", value);
  }, [value]);
  //value의 형태 ["mongja", "boksun"]

  const handleCheckbox = (e) => {
    const updatedOptions = options.map((option) => {
      if (option.value === e.target.id) {
        e.target.checked === !option.checked;
        return option.value;
      }
      return null;
    });

    onChange(updatedOptions);
  };

  return (
    <div style={{ display: "flex", gridGap: "8px", marginTop: "12px" }}>
      <div style={{ width: "100px" }}>{label}</div>
      <div>
        {options.map((option) => (
          <div style={{ marginBottom: "24px" }}>
            <input
              style={{ display: "flex" }}
              type="checkbox"
              checked={option.checked}
              id={option.value}
              onChange={(e) => handleCheckbox(e)}
            />
            <label htmlFor={option.value} style={{ whiteSpace: "nowrap" }}>
              {option.name}
            </label>
            <img
              src={option.image}
              alt={option.name}
              style={{ display: "block", width: "20%", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckBoxField;
