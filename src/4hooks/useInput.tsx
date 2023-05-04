import { InputProps } from "../3types/InputProps";
import React, { useCallback, useContext } from "react";
import { FormContext } from "../2components/0SimpleForm";

interface UseInputProps extends Pick<InputProps, "source" | "validates"> {}

function useInput(props: UseInputProps) {
  const { setValues, values, setError, error } = useContext(FormContext);

  const onChange = useCallback(
    (value: string | number) => {
      //[min(5), max(10)]
      //func는 min or max

      // props.validates.forEach((validate) => {
      //   const err: string = validate(value);
      //   if (err) {
      //     setError({
      //       ...error,
      //       [props.source]: err,
      //     });
      //   }
      // });

      const err: string[] = props.validates.map((validate) => validate(value));

      // ["", ""] => ""
      // ["hello", ""] =? hello
      // ["", "hello"] => hello
      // ["hello", "hello2"] => hello

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
