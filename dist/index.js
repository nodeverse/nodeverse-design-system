"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(e);const a=r(t).default.div`
  height: 1rem;
  width: 1rem;

  background-color:transparent;

  ${e=>void 0!==e.x&&`width: ${e.x}rem;`}
  ${e=>void 0!==e.y&&`height: ${e.y}rem;`}
`;exports.Spacer=e=>o.default.createElement(a,e);
