import { FunctionComponent, ReactNode, MouseEvent } from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';
import { HiMiniArrowLongRight } from 'react-icons/hi2';

interface IProps {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e?: MouseEvent) => void;

  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

const Button: FunctionComponent<IProps> = ({
  children,
  variant = 'primary',
  className,
  type,
  onClick,
}) => {
  return (
    <button
      className={cn(styles.button, styles[variant], className)}
      type={type}
      onClick={onClick}
    >
      {children}
      <HiMiniArrowLongRight />
    </button>
  );
};

export default Button;
