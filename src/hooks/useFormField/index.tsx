import { useCallback, useMemo } from "react";
import { useFormContext, useWatch } from "react-hook-form";

type useFormFieldProps = {
  name: string;
};

const useFormField = <T,>({ name }: useFormFieldProps) => {
  const {
    control,
    formState: { errors, isSubmitted },
    setValue: _setValue,
    trigger,
  } = useFormContext();

  const value: T = useWatch({
    control,
    name,
  });

  const setValue = useCallback(
    (newValue: T) => {
      _setValue(name, newValue);
      if (isSubmitted) {
        trigger(name);
      }
    },
    [name, _setValue, isSubmitted, trigger],
  );

  const errorObj = accessObjectByDotSeparatedKeys(errors, name);

  const error: string | null = useMemo(() => errorObj?.message, [errorObj]);

  return {
    value,
    setValue,
    error,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function accessObjectByDotSeparatedKeys(obj: Record<string, any>, str: string) {
  return str
    .split(".")
    .reduce((o, i) => (o ?? {})?.[i] ?? (o ?? {})?.[parseInt(i, 10)], obj);
}

export default useFormField;
