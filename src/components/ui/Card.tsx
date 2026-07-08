import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  glass?: boolean;
  borderAccent?: boolean;
}

export function Card({
  children,
  className = "",
  hoverEffect = true,
  glass = false,
  borderAccent = false,
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-sm overflow-hidden transition-all duration-500 border ${
        glass
          ? "bg-white/80 backdrop-blur-md border-gray-100"
          : "bg-white border-gray-100"
      } ${
        borderAccent ? "border-t-[3px] border-t-stone-gold" : ""
      } ${
        hoverEffect ? "hover:-translate-y-1 hover:shadow-lg hover:border-gray-200" : "shadow-sm"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`p-6 border-b border-gray-50 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardFooter({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`p-6 border-t border-gray-50 bg-neutral-light/50 ${className}`}>
      {children}
    </div>
  );
}
