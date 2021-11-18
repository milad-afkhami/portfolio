import * as Yup from "yup";

const fullNameMin = 5;
const passwordMin = 8;
const passwordMax = 16;
const otpLen = 5;
const mobileRegex = /^0\d{10}$/;

export const loginWithPassSchema = Yup.object().shape({
  mobile: Yup.string()
    .required("form.message.required")
    .matches(mobileRegex, "form.message.checkYourInput"),
  password: Yup.string()
    .required("form.message.required")
    .min(passwordMin, `form.message.min${passwordMin}`)
    .max(passwordMax, `form.message.max${passwordMax}`),
});

export const registerSchema = Yup.object().shape({
  fullName: Yup.string()
    // .trim()
    .required("form.message.required")
    .min(fullNameMin, `form.message.min${fullNameMin}`),
  mobile: Yup.string()
    .required("form.message.required")
    .matches(mobileRegex, "form.message.checkYourInput"),
  password: Yup.string()
    .required("form.message.required")
    .min(passwordMin, `form.message.min${passwordMin}`)
    .max(passwordMax, `form.message.max${passwordMax}`),
});

export const otpSchema = Yup.object().shape({
  otp: Yup.string()
    .required("form.message.required")
    .length(otpLen, `form.message.len${otpLen}`),
});
