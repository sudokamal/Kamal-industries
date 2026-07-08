import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    return (
      <div className="w-full font-sans">
        {label && (
          <label
            htmlFor={id}
            className="block text-[10px] font-semibold tracking-widest text-primary uppercase mb-2"
          >
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={`w-full bg-white border border-gray-200 text-neutral-dark text-sm px-4 py-3.5 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-400 ${
            error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""
          } ${className}`}
          {...props}
        />
        {error && <span className="block mt-1.5 text-xs text-red-500 font-light">{error}</span>}
      </div>
    );
  }
);
Input.displayName = "Input";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    return (
      <div className="w-full font-sans">
        {label && (
          <label
            htmlFor={id}
            className="block text-[10px] font-semibold tracking-widest text-primary uppercase mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          id={id}
          ref={ref}
          rows={5}
          className={`w-full bg-white border border-gray-200 text-neutral-dark text-sm px-4 py-3.5 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-400 resize-none ${
            error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""
          } ${className}`}
          {...props}
        />
        {error && <span className="block mt-1.5 text-xs text-red-500 font-light">{error}</span>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { label: string; value: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = "", id, ...props }, ref) => {
    return (
      <div className="w-full font-sans">
        {label && (
          <label
            htmlFor={id}
            className="block text-[10px] font-semibold tracking-widest text-primary uppercase mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            id={id}
            ref={ref}
            className={`w-full bg-white border border-gray-200 text-neutral-dark text-sm px-4 py-3.5 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none transition-all ${
              error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""
            } ${className}`}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        {error && <span className="block mt-1.5 text-xs text-red-500 font-light">{error}</span>}
      </div>
    );
  }
);
Select.displayName = "Select";
