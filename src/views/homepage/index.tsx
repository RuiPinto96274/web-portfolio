import React, { FC } from "react";

import { useTranslation } from "next-i18next";
import Metatags from "../../components/metatags";
import { metatags } from "../../components/metatags/metatags";
import Hero from "../../components/hero";
import About from "../../components/about";
import Projects from "../../components/projects";

export const Homepage: FC = () => {
  const { t, i18n } = useTranslation("common");
  const activeLanguage = i18n.language;

  return (
    <>
      <Metatags
        title={metatags.index[activeLanguage].title}
        description={metatags.index[activeLanguage].description}
        keywords={metatags.index[activeLanguage].keywords}
      />
      <Hero />
      <About />
      <Projects />
    </>
  );
};

export default Homepage;
