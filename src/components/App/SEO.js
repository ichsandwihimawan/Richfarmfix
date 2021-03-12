import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  return (
    <div>
      <Helmet>
        <title>Richfams </title>
        <meta name="description" content="Richfams - RichFams IT Startup" />
        <meta name="og:title" property="og:title" content="Richfams"></meta>
        <meta name="twitter:card" content="Richfams"></meta>
        <link rel="canonical" href="http://www.richfarm.io/"></link>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg"
        />
      </Helmet>
    </div>
  );
};

export default SEO;
