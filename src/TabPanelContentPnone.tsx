import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import {
  useForm,
  useFormState,
  Controller,
  SubmitHandler,
} from "react-hook-form";

import {CSInput} from "./CustomInput";
import {CSLabel} from "./CustomLabel";
import {CSButton} from "./CustomButton";
import {useTranslation} from "react-i18next";

const REQUIRED_FIELD = "don't forget about this field";

export const phoneValidation = {
  required: REQUIRED_FIELD,

  validate: (value: string) => {
    if (!value.match(/^([0-9\(\)\/\+ \-]*)$/)) {
      return "ohh";
    }
    return true;
  },
};

interface ILogInForm {
  phone: string;
  password: string;
}






export const TabPanelContentPhone = () => {
  const {t} = useTranslation();

  const ref = useRef<HTMLInputElement | null>(null);
  const [isCapsLockActive, setIsCapsLockActive] = useState<boolean>(false);

  const {handleSubmit, control, reset, formState, setError, clearErrors} =
    useForm<ILogInForm>({
      mode: "onChange",
    });
  const {errors} = useFormState({control});


  const onSubmit: SubmitHandler<ILogInForm> = (data) => {
    console.log(data);
    reset();
  };

  useEffect(() => {
    const capslockdetect = (e: KeyboardEvent) => {
      if (e.getModifierState("CapsLock")) {
        setIsCapsLockActive(true);
      } else setIsCapsLockActive(false);
    };
    ref.current?.addEventListener("keyup", capslockdetect);
    return ()=>ref.current?.removeEventListener("keyup", capslockdetect);
  }, []);

  useLayoutEffect(() => {
    if (isCapsLockActive) {
      setError("phone", {type: "manual", message: "Caps Lock  is on"});
    }
    if (errors.phone?.type === "manual" && !isCapsLockActive) {
      clearErrors("phone");
    }
  }, [isCapsLockActive, setIsCapsLockActive]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl sx={{width: "100%"}} hiddenLabel variant="standard">
        <CSLabel shrink htmlFor="bootstrap-input" aria-label="phone">
          {t("form.tab-phone-label")}
        </CSLabel>
        <Controller
          control={control}
          name="phone"
          rules={phoneValidation}
          render={({field: {onChange, value}}) => (
            <>
              <CSInput
                ref={ref}
                fullWidth
                aria-label="phone"
                placeholder={t("form.tab-phone-label")}
                id="csinput-phone"
                onChange={onChange}
                value={value}
                error={!!errors.phone?.message}
              />
              <FormHelperText error>{errors.phone?.message}</FormHelperText>
            </>
          )}
        />
      </FormControl>
      <FormControl sx={{width: "100%"}} variant="standard">
        <CSLabel shrink htmlFor="bootstrap-input" aria-label="password">
          {t("form.input-password")}
        </CSLabel>
        <Controller
          control={control}
          name="password"
          rules={{required: true}}
          render={({field}) => (
            <CSInput
              fullWidth
              aria-label="password"
              placeholder={t("form.input-password")}
              id="csinput-password"
              value={field.value}
              error={!!errors.password?.message}
            />
          )}
        />
      </FormControl>
      <CSButton
        disableRipple
        type="submit"
        disabled={formState.isValid}
        variant="contained"
      >
        {t("form.button-login")}
      </CSButton>
    </form>
  );
};

// https://github.com/brian7346/react-hook-form
