/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DatePicker,
  DatePickerProps,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { memo } from "react";
import { useFormDatePicker } from "./index.hooks";

interface OmittedProps {
  renderInput: any;
  onChange: any;
  value: any;
}

type FormDatePickerProps = {
  name: string;
  label?: string;
  fullWidth?: boolean;
} & Omit<DatePickerProps<any>, keyof OmittedProps>;

export const FormDatePicker = memo(
  ({ name, label, fullWidth = false, ...others }: FormDatePickerProps) => {
    const { fieldValue, setValue, error } = useFormDatePicker(name);

    return (
      <LocalizationProvider  dateAdapter={AdapterMoment}>
        <DatePicker
          {...others}
          label={label}
          value={fieldValue ?? null}
          onChange={setValue as any}
          slotProps={{
            textField: {
              error: !!error,
              helperText: error,
              fullWidth,
            },
          }}
        />
      </LocalizationProvider>
    );
  },
);
FormDatePicker.displayName = "FormDatePicker";
