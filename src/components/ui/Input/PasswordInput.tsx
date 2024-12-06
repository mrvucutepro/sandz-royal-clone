"use client";
import { Input } from "@nextui-org/react";
import React from "react";

export default function PasswordInput({
    value,
    onChange,
    placeholder = "",
    disabled = false,
    endContext,
    errorMessage,
    type = "text",

}: {
    type?: 'text' | 'password' | 'number';
    value?: string;
    underline?: boolean;
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
        <div>
            <Input
                type={type}
                value={value}
                autoComplete="off"
                disabled={disabled}
                onChange={onChange}
                id="input"
                placeholder={placeholder}
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
    );
}
