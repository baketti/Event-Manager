import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/app/redux-store";
import { useNavigate } from "react-router-dom";

type LoginFormData = {
  email: string;
  password: string;
};

export const useLoginForm = () => {
    const navigate = useNavigate();
    
    const schema = useMemo(() => {
        return yup.object({
          email: yup.string().email().required("L'email è obbligatoria"),
          password: yup.string().required("La password è obbligatoria"),
        })
      }, []
    );

    const formData = useForm<LoginFormData>({
      resolver: yupResolver(schema),
      defaultValues: {
        email: "",
        password: "",
      },
    });

    const {
      handleSubmit,
      formState: { isValid, isSubmitted },
    } = formData;
    const submitDisabled = isSubmitted && !isValid;

    const dispatch = useDispatch();

    const triggerSubmit = useMemo(
      () =>
        handleSubmit((data) => {
          dispatch(
            actions.postSessions.request({
              email: data.email,
              password: data.password,
            }),
          );
        }),
      [handleSubmit, dispatch],
    );

    const isLoginAjaxLoading = useSelector(
      selectors.getAjaxIsLoadingByApi(actions.postSessions.api),
    );

    const goToRegisterScene = useCallback(() => {
      navigate(`/app/registration`);
    }, [navigate]);

    return {
      goToRegisterScene,
      formData,
      triggerSubmit,
      submitDisabled,
      isLoginAjaxLoading,
    };
};
