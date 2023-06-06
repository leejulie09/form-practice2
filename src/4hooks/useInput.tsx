import { InputProps } from "../3types/InputProps";
import React, { useCallback, useContext } from "react";
import { FormContext } from "../2components/0SimpleForm";

interface UseInputProps extends Pick<InputProps, "source" | "validates"> {}

function useInput(props: UseInputProps) {
  const { setValues, values, setError, error } = useContext(FormContext);

  const onChange = useCallback(
    (value: string | number | string[]) => {
      const err: string[] | undefined =
        props.validates && props.validates.map((validate) => validate(value));

      if (err) {
        setError({
          ...error,
          [props.source]: err.find((e) => e !== "") ?? "",
        });
      }

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
