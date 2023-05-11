import { InputProps } from "../3types/InputProps";
import React, { useCallback, useContext } from "react";
import { FormContext } from "../2components/0SimpleForm";

interface UseInputProps extends Pick<InputProps, "source" | "validates"> {}

function useInput(props: UseInputProps) {
  const { setValues, values, setError, error } = useContext(FormContext);

  const onChange = useCallback(
    (value: string | number, index: number, checked: boolean) => {
      //checkBoxField내부에서 정의해준 useState의 set함수를 (기존 작동방식이랑 다른것 같아) 다시 정의 해주려고 하니까 24번째줄의 setValues랑 겹침
      //이런 경우에는 useContext안에 새로운 변수를 정의해주어야하는지? 기존 values, setValues를 재사용할 방법은 없는지?

      // const updatedValues = [...values];
      // updatedValues[index].checked = checked;
      // setValues(updatedValues);

      const err: string[] = props.validates.map((validate) => validate(value));

      setError({
        ...error,
        [props.source]: err.find((e) => e !== "") ?? "",
      });

      setValues({
        ...values,
        [props.source]: value,
      });
    },
    [values, props.source, props.validates, setError, setValues]
  );

  return {
    value: values[props.source],
    onChange,
    error,
  };
}

export default useInput;
