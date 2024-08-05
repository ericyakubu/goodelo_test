import { FunctionComponent } from 'react';
import styles from './Logo.module.scss';
import cn from 'classnames';

interface IProps {
  className?: string;
}

const Logo: FunctionComponent<IProps> = ({ className }) => {
  return (
    <div className={cn(styles.logo, className)}>
      <img src="./logo.svg" alt="" className={styles.logo__image} />
    </div>
  );
};

export default Logo;
