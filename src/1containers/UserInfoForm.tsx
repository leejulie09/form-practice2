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
        <SelectBoxField
          label="지역"
          source="city"
          options={[
            { name: "서울", value: "seoul" },
            { name: "부산", value: "busan" },
            { name: "대구", value: "daegu" },
            { name: "인천", value: "incheon" },
          ]}
        />
        <SelectBoxField
          label="성별"
          source="gender"
          options={[
            { name: "남자", value: "male" },
            { name: "여자", value: "female" },
          ]}
        />
        <CheckBoxField
          label="최애 강아지"
          source="dogs"
          options={[
            {
              name: "몽자",
              value: "mongja",
              image:
                "https://dispatch.cdnser.be/cms-content/uploads/2020/12/08/2adfbf30-faf7-46c0-86bd-c6aa079e8f24.jpg",
            },
            {
              name: "복순이",
              value: "boksun",
              image:
                "https://i.playboard.app/p/cf6a88ca3dfbcf0e93e44aff9d2e5f86/default.jpg",
            },
            {
              name: "호두마루",
              value: "hodumaru",
              image:
                "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/90790363_107585440890200_1345258854610370560_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=DaoJr2xg0LwAX_IAltN&_nc_ht=scontent-ssn1-1.xx&oh=00_AfAHEzn15PRJ-NOxLRhu3expdh4d8g9RWuKcJb6j7zjfPw&oe=647B41C7",
            },
          ]}
        />
      </SimpleForm>
    </>
  );
}

export default UserInfoForm;
