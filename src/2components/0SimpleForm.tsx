import {
  createContext,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";

//context API 생성
export const FormContext = createContext({
  setValues: (v: any) => {},
  values: {} as Record<string, any>,
  setError: (message: Record<string, string>) => {},
  error: {} as Record<string, any>,
});

const SimpleForm = ({ children }: PropsWithChildren<{}>) => {
  const [values, setValues] = useState({});
  // {name: "",
  // password: "abcd",
  // city: "seoul",
  // gender: "female",
  // dogs: ["mongja", "boksun"]}

  const [error, setError] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);

  const value = useMemo(
    () => ({ setValues, values, setError, error }),
    [setValues, values, setError, error]
  );

  const onClick = (e: any) => {
    e.preventDefault();

    if (Object.values(error).some((e) => !!e)) {
      return;
    } else {
      alert(JSON.stringify(values));
    }
  };

  useEffect(() => {
    const hasError = Object.values(error).some((e) => !!e);
    const hasEmptyInput = Object.values(values).some((v) => v === "");

    setIsDisabled(hasError || hasEmptyInput);
  }, [values, error]);

  return (
    <FormContext.Provider value={value}>
      <form onSubmit={onClick}>
        {children}
        <button
          type={"submit"}
          // disabled={isDisabled}
          //
        >
          제출
        </button>
      </form>
    </FormContext.Provider>
  );
};

export default SimpleForm;
