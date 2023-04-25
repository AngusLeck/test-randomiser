import React from "react";
import { FunctionalComponent } from "./FunctionalComponent";

export const Col: FunctionalComponent<{
  forwardRef?: React.RefObject<HTMLDivElement>;
}> = ({ children, style, forwardRef, ...props }) => (
  <div
    {...props}
    ref={forwardRef}
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      justifyItems: "flex-start",
      justifySelf: "inherit",
      alignSelf: "inherit",
      flex: 1,
      ...style,
    }}
  >
    {children}
  </div>
);
