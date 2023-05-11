import { HTMLInputTypeAttribute } from "react";

export interface OptionsProps {
  label: string;
  options: { name: string; value: string }[];
  image: string;
}
