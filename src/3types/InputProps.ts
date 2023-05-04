import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  source: string;
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  validates: any[];
  error?: string;
  emailCheck?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
