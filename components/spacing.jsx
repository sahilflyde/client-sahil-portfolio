"use client";
import clsx from "clsx";
import { componentRegistry } from "./componentRegistry";


export const Container = ({ children = [], variant = "primary", className }) => {
  const variants = {
    primary: "primary-spacing",
    header: "header-spacing",
    heroSpacing: "hero-spacing",
    secondary: "secondary-spacing",
    section: "section-spacing",
    auth: "auth-spacing",
  };

  return (
    <div className={clsx(variants[variant], className)}>
      {children.map((child, i) => {
        const Comp = componentRegistry[child.type];
        return <Comp key={i} {...child.props} />;
      })}
    </div>
  );
};
