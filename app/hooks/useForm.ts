"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Errors, Inputs, UseFormHook } from "../types/form-types";

const useForm = (fields: string[], data?: Inputs): UseFormHook => {
  const initialInputs = fields.reduce(
    (
      acc: Record<string, string | number | boolean | undefined>,
      name: string
    ) => {
      if (name.startsWith("is")) {
        acc[name] = undefined; // Explicitly set to undefined for boolean values
      } else {
        acc[name] = name === "propertyStatus" ? "For Rent" : "";
      }
      return acc;
    },
    {}
  );

  const [inputs, setInputs] = useState<Inputs>(initialInputs);
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    if (data) {
      const mappedInputs = fields.reduce(
        (acc: Record<string, string | number | boolean | undefined>, name: string) => {
          acc[name] = data[name] !== undefined ? data[name] : '';
          return acc;
        },
        {}
      );
      
      // Only update state if mappedInputs is different from current inputs
      if (JSON.stringify(mappedInputs) !== JSON.stringify(inputs)) {
        setInputs(mappedInputs);
      }
    }
  }, [data, fields]);

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setInputs((prev: Inputs) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setInputs((prev: Inputs) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return {
    inputs,
    errors,
    handleInput,
    handleSelect,
    handleToggle,
    setInputs,
    setErrors,
  };
};

export default useForm;
