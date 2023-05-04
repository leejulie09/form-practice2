import React, { FunctionComponent } from "react";
import { InputProps } from "../3types/InputProps";
import useInput from "../4hooks/useInput";

const TextField: FunctionComponent<InputProps> = ({
  validates,
  source,
  label,
  placeholder,
  type,
}) => {
  const { value, onChange, error } = useInput({ source, validates });
  // error = {
  //   name: '더 써주세요',
  //   password: '더 써주세요'
  // }

  //key가 뭐 올지 모를때는(source가 변수(변함)) .말고 []로 객체에 접근
  return (
    <div>
      <div style={{ display: "flex", gridGap: "8px" }}>
        <label htmlFor={source}>{label}</label>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          name={source}
          type={type}
          placeholder={placeholder}
          // onKeyUp={emailCheck}
        />
      </div>
      <div style={{ marginTop: "12px" }}>
        {error?.[source] && (
          <p style={{ color: "red", marginTop: "4px" }}>{error[source]}</p>
        )}
      </div>
    </div>
  );
};

export default TextField;
