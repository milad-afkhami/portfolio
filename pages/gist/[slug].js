import React from "react";
import { Div } from "@kits";
import { Head } from "@components/SEO";
import { useRouter } from "@hooks";

export default function BlogPage(props) {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <>
      <Head title={"title"} description={"desc"} canonical={`/gist/${slug}`} />
      <Div width="100%" py="3"></Div>
    </>
  );
}
