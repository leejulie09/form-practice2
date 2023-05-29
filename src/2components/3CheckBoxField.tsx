import React, { useEffect, useState } from "react";
import { InputProps } from "../3types/InputProps";
import useInput from "../4hooks/useInput";

interface CheckboxProps {
  options: {
    name: string;
    value: string;
    image: string;
  }[];
}

const CheckBoxField: React.FC<InputProps & CheckboxProps> = ({
  label,
  options,
  source,
}) => {
  const { value, onChange } = useInput({ source, validates: [] });

  //value의 형태 ["mongja", "boksun"]
  const handleCheckbox = (optionValue: string) => {
    let updatedValue: string[];

    if (value?.includes(optionValue)) {
      updatedValue = value.filter((item: string) => item !== optionValue);
    } else {
      updatedValue = value ? value.concat(optionValue) : [optionValue];
    }

    onChange(updatedValue);
  };

  return (
    <div style={{ display: "flex", gridGap: "8px", marginTop: "12px" }}>
      <div style={{ width: "100px" }}>{label}</div>
      <div>
        {options.map((option, index) => (
          <div style={{ marginBottom: "24px" }}>
            <input
              style={{ display: "flex" }}
              type="checkbox"
              checked={value?.includes(option.value) ?? false}
              id={option.name}
              onChange={(e) => handleCheckbox(option.value)}
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
