import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Homepage from "../views/homepage";
import React from "react";

function Index() {
  return <Homepage />;
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Index;
