import React from "react";
import { Head } from "@components/SEO";
import { AuthLayout, VerifyContent } from "@components/Auth";
import dynamic from "next/dynamic";

const Verify = (props) => {
  return (
    <>
      <Head canonical="/verify" noindex nofollow />
      <AuthLayout title="auth.verifyTitle">
        <VerifyContent />
      </AuthLayout>
    </>
  );
};

Verify.hideHeader = true;
Verify.hideFooter = true;

export default Verify;
