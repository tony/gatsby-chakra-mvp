const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
  return setHeadComponents([
    <link
      rel="dns-prefetch"
      key="dns-prefetch-google-tag-manager"
      href="https://www.googletagmanager.com"
    />,
  ]);
};
