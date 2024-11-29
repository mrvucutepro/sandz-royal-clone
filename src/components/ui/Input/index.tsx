"use client";
import React from "react";

export default function Input({
    value,
    title,
    underline = false,
    onChange,
    placeholder = "",
    disabled = false,
    className = "",
    classNameInput = "",
    endContext,
    type = "text",
    errorMessage,
    startContext,
}: {
    value?: string;
    underline?: boolean;
    type?: 'text' | 'password' | 'number';
    title?: string;
    startContext?: React.ReactNode;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    classNameInput?: string;
    endContext?: React.ReactNode;
    errorMessage?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {

    return (
        <div className={`flex flex-col space-y-1 w-full ${className}`}>
            {title && (
                <label htmlFor="input" className="text-sm text-white mb-[10px]">
                    {title}
                </label>
            )}
            <div className="relative">
                {startContext && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        {startContext}
                    </div>
                )}
                <input
                    value={value}
                    autoComplete="off"
                    disabled={disabled}
                    onChange={onChange}
                    id="input"
                    type={type}
                    placeholder={placeholder}
                    className={`${!underline ? 'border border-solid border-[#64DAFE]' : 'border-b border-gray-500  transition duration-200 focus:border-gray-300'} rounded px-3 py-2 text-base w-full bg-transparent  focus:transparent focus:outline-none  ${classNameInput} ${startContext ? "pl-10" : ""}`}
                />
                {endContext && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        {endContext}
                    </div>
                )}

                {errorMessage && (
                    <p className="text-red-500 text-xs mt-2">{errorMessage}</p>
                )}
            </div>

        </div>
    );
}
