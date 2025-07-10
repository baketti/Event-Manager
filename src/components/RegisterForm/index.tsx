import { memo } from "react";
import { FormProvider } from "react-hook-form";
import { useRegisterForm } from "./index.hooks";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FormPassword } from "../_form/FormPassword";
import { FormTextField } from "../_form/FormTextField";
import { AppButton } from "../AppButton";


export const RegisterForm = memo(() => {
  const {
    formData,
    triggerSubmit,
    isPostUserAjaxLoading,
    submitDisabled,
  } = useRegisterForm();

  return (
    <FormProvider {...formData}>
      <form onSubmit={triggerSubmit}>
        <Stack spacing={2}>
          <FormTextField name="name" label="Name" />
          <FormTextField name="email" label="Email" type="email" />
          <FormPassword name="password" label="Password" />
          <FormPassword name="confirmPassword" label="Confirm Password" />
          <Stack alignItems="center">
            <Link
              style={{ width: "max-content" }}
              to={
                isPostUserAjaxLoading
                  ? ""
                  : `/authentication/login`
              }
            >
              <Typography sx={{ "&:hover": { textDecoration: "underline" } }}>
                {"Already have an account? Sign In"} 
              </Typography>
            </Link>
          </Stack>
          <AppButton
            variant="contained"
            type="submit"
            disabled={submitDisabled}
            loading={isPostUserAjaxLoading}
          >
            {"Sign Up"}
          </AppButton>
        </Stack>
      </form>
    </FormProvider>
  );
});
RegisterForm.displayName = "RegisterForm";
