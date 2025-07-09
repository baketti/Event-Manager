import { memo } from "react";
import { FormProvider } from "react-hook-form";
import { useLoginForm } from "./index.hooks";
import { Stack, Typography } from "@mui/material";
import { FormTextField } from "../_form/FormTextField";
import { AppButton } from "../AppButton";
import { FormPassword } from "../_form/FormPassword";
import { Link } from "react-router-dom";

//type LoginFormProps = {};

export const LoginForm = memo(() => {
  const {
    formData,
    triggerSubmit,
    submitDisabled,
    isLoginAjaxLoading,
  } = useLoginForm();

  return (
    <FormProvider {...formData}>
      <form onSubmit={triggerSubmit}>
        <Stack spacing={3} color="primary">
          <FormTextField name="email" label="Email" type="email" />
          <FormPassword name="password" label="Password" />
          <Stack alignItems="center">
            <Link
              style={{ width: "max-content" }}
              to={isLoginAjaxLoading ? ""
                  : `/authentication/registration`
              }
            >
              <Typography sx={{ "&:hover": { textDecoration: "underline" } }}>
                Non hai un account? Registrati
              </Typography>
            </Link>
          </Stack>
          <AppButton
            variant="contained"
            type="submit"
            disabled={submitDisabled}
            loading={isLoginAjaxLoading}
          >
            Accedi
          </AppButton>
        </Stack>
      </form>
    </FormProvider>
  );
});
LoginForm.displayName = "LoginForm";
