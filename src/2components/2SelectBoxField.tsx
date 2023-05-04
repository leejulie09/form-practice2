import React, { useState } from "react";

interface City {
  name: string;
  value: string;
}

const cityOptions: City[] = [
  { name: "서울", value: "seoul" },
  { name: "부산", value: "busan" },
  { name: "대구", value: "daegu" },
  { name: "인천", value: "incheon" },
];

const SelectBoxField: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div style={{ display: "flex", gridGap: "8px" }}>
      <div>거주지</div>
      <select value={selectedCity} onChange={handleCityChange}>
        <option value="">거주 중인 시 선택</option>
        {cityOptions.map((city) => (
          <option key={city.value} value={city.value}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBoxField;
