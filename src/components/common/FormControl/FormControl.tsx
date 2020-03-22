import React from 'react';
import style from './FormControl.module.css';
import { WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";

type FormControlPropsType = {
  meta: WrappedFieldMetaProps,
  children: React.ReactNode
};

const FieldControl: React.FC<FormControlPropsType> = ({
  meta: { touched, error },
  children,
}) => {
  const isError = touched && error;

  return (
    <div className={style.input}>
      <div>{children}</div>
      {isError && (
        <div className={style.error}>
          <i className='fas fa-info-circle' /> {error}
        </div>
      )}
    </div>
  );
};

export const Email: React.FC<WrappedFieldProps> = props => {
  const { input, meta, ...restProps } = props;

  return (
    <FieldControl {...props}>
      <input {...input} {...restProps} />
    </FieldControl>
  );
};

export const Password: React.FC<WrappedFieldProps> = props => {
  const { input, meta, ...restProps } = props;

  return (
    <FieldControl {...props}>
      <input {...input} {...restProps} />
    </FieldControl>
  );
};

export const PostInput: React.FC<WrappedFieldProps> = props => {
  const { input, meta, ...restProps } = props;

  return (
    <FieldControl {...props}>
      <input {...input} {...restProps} />
    </FieldControl>
  );
};
