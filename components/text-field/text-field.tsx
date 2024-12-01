import React, { forwardRef } from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  leftButton?: React.ReactNode;
}
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ placeholder, leftButton, ...rest }, ref) => {
    return (
      <div className="w-full max-w-sm">
        <div className="relative">
          <input
            ref={ref}
            {...rest}
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder={placeholder}
          />
          {leftButton ? (
            <button
              className="absolute right-1 top-1 rounded bg-slate-600 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              {leftButton}
            </button>
          ) : null}
        </div>
      </div>
    );
  }
);

TextField.displayName = "TextField";
