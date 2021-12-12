import e from"react";import r from"styled-components";const t=r.div`
  height: 1rem;
  width: 1rem;

  background-color:transparent;

  ${e=>void 0!==e.x&&`width: ${e.x}rem;`}
  ${e=>void 0!==e.y&&`height: ${e.y}rem;`}
`,o=r=>e.createElement(t,r);export{o as Spacer};
