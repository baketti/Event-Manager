import useFormField from "@/hooks/useFormField";
import moment, { Moment } from "moment";
import { useMemo } from "react";

export const useFormDatePicker = (name: string) => {
  const { value, setValue, error } = useFormField<Moment>({ name });

  const fieldValue = useMemo(() => {
    if (!value) return null;
    const m = moment(value);
    return m.isValid() ? m : null;
  }, [value]);

  return {
    fieldValue,
    error,
    setValue,
  };
};
