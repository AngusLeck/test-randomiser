import React from "react";
import { FunctionalComponent } from "./FunctionalComponent";

export const Row: FunctionalComponent = ({ children, style, ...props }) => (
  <div {...props} style={{ display: "flex", flexDirection: "row", ...style }}>
    {children}
  </div>
);
