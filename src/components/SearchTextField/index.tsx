import { memo } from "react";
import { useSearchTextField } from "./index.hooks";
import { TextFieldProps, TextField } from "@mui/material";

export type SearchTextFieldProps = {
    name: string;
} & TextFieldProps;

export const SearchTextField = memo(
    ({name, helperText, ...props}:SearchTextFieldProps) => {
        
    const { value, handleChange, error } = useSearchTextField(name);

    return (
        <TextField
            name={name}
            variant="outlined"
            onChange={handleChange}
            value={value}
            error={!!error}
            helperText={error ?? helperText}
            {...props}
        />
    );
});

SearchTextField.displayName = "SearchTextField";