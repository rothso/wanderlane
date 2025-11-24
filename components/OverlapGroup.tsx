import { PropsWithChildren } from "react";
import React from "react";

export const OverlapGroup = ({ children }: PropsWithChildren) => (
  <div className="flex flex-row-reverse -ml-1">
    {React.Children.toArray(children)
      .reverse()
      .map((child, index) => (
        <div key={index} className="-mr-1 z-0">
          {child}
        </div>
      ))}
  </div>
);
