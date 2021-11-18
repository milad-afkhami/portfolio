import React from "react";
import { Head } from "@components/SEO";
import { LoginContent, AuthLayout, SetPasswordContent } from "@components/Auth";

const SetPassword = (props) => {
  return (
    <>
      <Head canonical="/set-password" noindex nofollow />
      <AuthLayout>
        <SetPasswordContent />
      </AuthLayout>
    </>
  );
};

SetPassword.hideHeader = true;
SetPassword.hideFooter = true;

export default SetPassword;
