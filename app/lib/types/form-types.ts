import { ChangeEvent, Dispatch, SetStateAction } from "react";

type Inputs = {
  [key: string]: string | number | boolean | undefined; // Allow undefined for boolean values
};

type Errors = {
  [key: string]: string;
};

type UseFormHook = {
  inputs: Inputs;
  errors: Errors;
  handleInput: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleToggle: (event: ChangeEvent<HTMLInputElement>) => void;
  setInputs: Dispatch<SetStateAction<Inputs>>;
  setErrors: Dispatch<SetStateAction<Errors>>;
};

export type { Inputs, Errors, UseFormHook };
