import { createContext } from "react";

const GEDContext = createContext({
  dispatch: (event: any) => {},
});
export default GEDContext;
