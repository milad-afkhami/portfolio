import React from "react";
import { Head } from "@components/SEO";
import { AuthLayout, RegisterContent } from "@components/Auth";

const Register = (props) => {
  return (
    <>
      <Head canonical="/register" />
      <AuthLayout title="auth.registerTitle">
        <RegisterContent />
      </AuthLayout>
    </>
  );
};

Register.hideHeader = true;
Register.hideFooter = true;

export default Register;
