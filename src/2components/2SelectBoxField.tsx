import React, { FunctionComponent, useState } from "react";
import { OptionsProps } from "../3types/OptionsProps";
import useInput from "../4hooks/useInput";
import { InputProps } from "../3types/InputProps";

const SelectBoxField: FunctionComponent<InputProps & OptionsProps> = ({
  label,
  options,
  source,
}) => {
  const { value, onChange } = useInput({ source, validates: [] });
  return (
    <div style={{ display: "flex", gridGap: "8px" }}>
      <div>{label}</div>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">선택</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBoxField;
