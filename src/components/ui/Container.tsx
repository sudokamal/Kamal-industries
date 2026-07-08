import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  clean?: boolean;
}

export default function Container({
  children,
  className = "",
  clean = false,
  ...props
}: ContainerProps) {
  return (
    <div
      className={`${
        clean ? "" : "max-w-7xl mx-auto px-6 md:px-12"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
