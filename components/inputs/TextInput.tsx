import { InputLabel, TextField } from '@mui/material';
import React, { ForwardedRef } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors } from 'react-hook-form';

type TextInputProps = {
  labelText?: string;
  id?: string;
  name: string;
  errors?: FieldErrors;
  type: string;
  placeholder?: string;
  rows?: number;
  multiline?: boolean;
};

const TextInput = (
  { labelText, id, name, errors, type, placeholder, ...props }: TextInputProps,
  ref: ForwardedRef<HTMLTextAreaElement | HTMLInputElement>,
) => {
  return (
    <>
      {labelText && <InputLabel htmlFor={id}>{labelText}</InputLabel>}
      <TextField
        {...props}
        type={type}
        placeholder={placeholder}
        ref={ref as ForwardedRef<HTMLInputElement>}
        className="w-full border-none shadow bg-white py-3 text-xl font-thin text-gray-700 shadow-sm"
        error={!!(name && errors && errors[name])}
      />
      {name && errors && (
        <ErrorMessage
          render={({ message }) => (
            <div>
              <p className="text-red-600">* {message}</p>
            </div>
          )}
          errors={errors}
          name={name}
        />
      )}
    </>
  );
};
export default React.forwardRef(TextInput);
