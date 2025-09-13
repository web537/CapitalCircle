'use client';
import React, { useState } from 'react';

interface EditTextProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'number' | 'tel' | 'url';
  disabled?: boolean;
  required?: boolean;
  className?: string;
  name?: string;
  id?: string;
  maxLength?: number;
  minLength?: number;
  autoComplete?: string;
  autoFocus?: boolean;
  readOnly?: boolean;
}

const EditText: React.FC<EditTextProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
  placeholder = '',
  value,
  onChange,
  type = 'text',
  disabled = false,
  required = false,
  className = '',
  name,
  id,
  maxLength,
  minLength,
  autoComplete,
  autoFocus = false,
  readOnly = false,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(value || '');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <input
      type={type}
      value={value !== undefined ? value : internalValue}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      name={name}
      id={id}
      maxLength={maxLength}
      minLength={minLength}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      readOnly={readOnly}
      className={`
        w-full
        px-[10px] sm:px-[15px] md:px-[20px]
        py-[6px] sm:py-[9px] md:py-[12px]
        text-[9px] sm:text-[10px] md:text-[11px]
        font-light
        font-poppins
        leading-[13px] sm:leading-[15px] md:leading-[17px]
        text-edittext-1
        bg-transparent
        border-0
        border-solid
        border-[#ffffff77]
        rounded-[3px] sm:rounded-[4px] md:rounded-[6px]
        transition-all
        duration-200
        ease-in-out
        placeholder:text-edittext-1
        placeholder:opacity-75
        focus:outline-none
        focus:ring-2
        focus:ring-button-2
        focus:ring-opacity-50
        focus:border-button-2
        hover:border-[#ffffff99]
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:bg-gray-100
        min-h-[44px] sm:min-h-[48px]
        touch-manipulation
        ${isFocused ? 'border-button-2 ring-2 ring-button-2 ring-opacity-50' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    />
  );
};

export default EditText;