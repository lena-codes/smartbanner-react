import React from 'react';

const SmartBanner = ({
  src,
  author,
  description,
  buttonText,
  buttonLink
}) => {
  return React.createElement("div", null, React.createElement("img", {
    src: src
  }), React.createElement("div", null, React.createElement("p", null, author), React.createElement("p", null, description)), React.createElement("a", {
    href: buttonLink,
    role: 'button'
  }, buttonText));
};

export { SmartBanner };
//# sourceMappingURL=index.modern.js.map
