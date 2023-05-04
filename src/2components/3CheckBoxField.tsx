import React, { useState } from "react";

interface Animal {
  name: string;
  image: string;
  checked: boolean;
}

const animalOptions: Animal[] = [
  {
    name: "몽자",
    image:
      "https://dispatch.cdnser.be/cms-content/uploads/2020/12/08/2adfbf30-faf7-46c0-86bd-c6aa079e8f24.jpg",
    checked: false,
  },
  {
    name: "복순이",
    image:
      "https://i.playboard.app/p/cf6a88ca3dfbcf0e93e44aff9d2e5f86/default.jpg",
    checked: false,
  },
  {
    name: "호두마루",
    image:
      "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/90790363_107585440890200_1345258854610370560_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=DaoJr2xg0LwAX_IAltN&_nc_ht=scontent-ssn1-1.xx&oh=00_AfAHEzn15PRJ-NOxLRhu3expdh4d8g9RWuKcJb6j7zjfPw&oe=647B41C7",
    checked: false,
  },
];

const CheckBoxField: React.FC = () => {
  const [animalList, setAnimalList] = useState<Animal[]>(animalOptions);

  const handleCheckboxChange = (index: number) => {
    const updatedAnimalList = [...animalList];
    updatedAnimalList[index].checked = !updatedAnimalList[index].checked;
    setAnimalList(updatedAnimalList);
  };

  return (
    <div style={{ display: "flex", gridGap: "8px", marginTop: "12px" }}>
      <div style={{ width: "100px" }}>최애강아지</div>
      <div>
        {animalList.map((animal, index) => (
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
