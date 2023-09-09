import React from 'react'
import styles from './ButtonShared.module.scss';
import clsx from 'clsx';

type ButtonSharedProps = {
    onClick?: () => void;
    content?:  string |  React.ReactNode;
    size?: ButtonType;
    type?: 'base' | 'outline',
    rounded?: boolean;
    className?: string;
    htmlType?: "button" | "submit" | "reset";
}

export const enum ButtonType {
    LARGE = 'large',
    MEDIUM = 'medium',
    SMALL = 'small',
}

const ButtonShared = ({onClick, content, size, type, rounded, className, htmlType}: ButtonSharedProps) => {
  return (
    <button
    type={htmlType ?? 'button'}
    className={clsx(className , type === 'outline' ? styles.buttonOutline : styles.buttonShared, size === ButtonType.SMALL ? styles.buttonSmall : size === ButtonType.LARGE ? styles.buttonLarge : '', {
        '!rounded-3xl': rounded
    })}
    onClick={onClick}
    >
        {content}
    </button>
  )
}

export default ButtonShared