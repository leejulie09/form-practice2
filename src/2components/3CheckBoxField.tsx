import React, { useState } from "react";
import { OptionsProps } from "../3types/OptionsProps";
import useInput from "../4hooks/useInput";

interface Animal {
  name: string;
  image: string;
  value: string;
  checked: boolean;
}

const CheckBoxField: React.FC<OptionsProps> = ({ label, options }) => {
  const { value, onChange } = useInput({ label, options });

  const handleCheckboxChange = (index: number) => {
    onChange(index, !options[index].checked);
  };

  return (
    <div style={{ display: "flex", gridGap: "8px", marginTop: "12px" }}>
      <div style={{ width: "100px" }}>{label}</div>
      <div>
        {options.map((animal, index) => (
          <label key={index}>
            <input
              style={{ display: "flex", whiteSpace: "nowrap" }}
              type="checkbox"
              checked={animal.checked}
              onChange={() => handleCheckboxChange(index)}
            />
            {animal.name}
            <img
              src={animal.image}
              alt={animal.name}
              style={{ display: "block", width: "20%", height: "auto" }}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckBoxField;
