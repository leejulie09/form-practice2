import SimpleForm from "../2components/0SimpleForm";
import TextField from "../2components/1TextField";
import SelectBoxField from "../2components/2SelectBoxField";
import CheckBoxField from "../2components/3CheckBoxField";
import { max, min } from "../5validations";

function UserInfoForm(): JSX.Element {
  return (
    <>
      <SimpleForm>
        <TextField
          source={"name"}
          label={"이름"}
          validates={[min(3), max(5)]}
          placeholder={"이름"}
          //
        />
        <TextField
          type="password"
          source={"password"}
          label={"비밀번호"}
          validates={[min(4), max(8)]}
          placeholder={"비밀번호"}
          //
        />
        <SelectBoxField />
        <CheckBoxField />
      </SimpleForm>
    </>
  );
}

export default UserInfoForm;
