import Head from "next/head";
import React from "react";

interface MetatagsProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const Metatags = ({ title, description, keywords }: MetatagsProps) => {
  return (
    <Head>
      {!!title && (
        <React.Fragment>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta property="twitter:title" content={title} />
        </React.Fragment>
      )}
      {!!description && (
        <React.Fragment>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta property="twitter:description" content={description} />
        </React.Fragment>
      )}
      {!!keywords && <meta name="keywords" content={keywords} />}
      {/* <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_URL}/assets/images-lp/link.png`}
      />
      <meta
        property="twitter:image"
        content={`${process.env.NEXT_PUBLIC_URL}/assets/images-lp/link.png`}
      />*/}
    </Head>
  );
};

export default Metatags;
