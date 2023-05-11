import React, { FunctionComponent, useState } from "react";
import { OptionsProps } from "../3types/OptionsProps";
import useInput from "../4hooks/useInput";

const SelectBoxField: FunctionComponent<OptionsProps> = ({
  label,
  options,
}) => {
  const { value, onChange } = useInput({ label, options });
  return (
    <div style={{ display: "flex", gridGap: "8px" }}>
      <div>{label}</div>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">선택</option>
        {options.map((el) => (
          <option key={el.value} value={el.value}>
            {el.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBoxField;
