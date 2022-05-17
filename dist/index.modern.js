import React from 'react';

var SmartBanner = function SmartBanner(_ref) {
  var src = _ref.src,
      author = _ref.author,
      description = _ref.description,
      buttonText = _ref.buttonText,
      buttonLink = _ref.buttonLink;
  return React.createElement("div", null, React.createElement("img", {
    src: src
  }), React.createElement("div", null, React.createElement("p", null, author), React.createElement("p", null, description)), React.createElement("a", {
    href: buttonLink,
    role: 'button'
  }, buttonText));
};

export { SmartBanner };
//# sourceMappingURL=index.modern.js.map
