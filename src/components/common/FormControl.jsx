import React from 'react';
import style from './FormControl.module.css'

const FieldControl = ({input, meta, ...props}) => {
    const error = meta.touched && meta.error;

    return (
        <div className={style.input}>
            <div>{props.children}</div>
            {error && <div className={style.error}>
                <i className='fas fa-info-circle' />{' '}{meta.error}
            </div>}
        </div>
    )
};

export const Email = (props) => {
    const {input, meta, ...restProps} = props;

    return <FieldControl {...props}><input {...input} {...restProps} /></FieldControl>
};

export const Password = (props) => {
    const {input, meta, ...restProps} = props;

    return <FieldControl {...props}><input {...input} {...restProps} /></FieldControl>
};
