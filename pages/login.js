import React from "react";
import { Head } from "@components/SEO";
import { LoginContent, AuthLayout } from "@components/Auth";

const Login = (props) => {
  return (
    <>
      <Head canonical="/login" />
      <AuthLayout title="auth.loginTitle">
        <LoginContent />
      </AuthLayout>
    </>
  );
};

Login.hideHeader = true;
Login.hideFooter = true;

export default Login;
