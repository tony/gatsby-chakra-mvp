import React from "react";

import { SEO } from "@website/shared-ui";

const browser = typeof window !== "undefined" && window;
const NotFoundPage: React.FC = () =>
  browser ? (
    <>
      <SEO title="Page not found! Memory recall failed!" />

      <h1>NOT FOUND</h1>
      <p>
        You just hit a route that doesn&#39;t exist according to our attempt to
        match you up with the expected content! Sorry!
      </p>
      <p>
        If you think this page should exist, please email the admin, your help
        is appreciated!
      </p>
    </>
  ) : null;

export default NotFoundPage;
