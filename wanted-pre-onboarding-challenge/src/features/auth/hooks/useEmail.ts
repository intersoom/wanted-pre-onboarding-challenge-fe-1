import React, { useState } from "react";
import { validateEmail } from "../utils/validation";

export default function useEmail(
  initialValue: string,
): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
] {
  const [value, setValue] = useState(initialValue);

  function onChangeValue(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return [value, setValue, onChangeValue];
}
