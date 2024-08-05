import { FunctionComponent } from 'react';
import styles from './Satisfaction.module.scss';
import cn from 'classnames';

interface IProps {
  className?: string;
  satisfied?: boolean;
}

const Satisfaction: FunctionComponent<IProps> = ({
  className,
  satisfied = true,
}) => {
  return (
    <section
      className={cn(
        styles.satisfaction,
        {
          [styles.satisfied]: satisfied,
          [styles.unsatisfied]: satisfied === false,
        },
        className
      )}
    >
      <h1 className={styles.satisfaction__head}>
        {satisfied ? 'Душнила доволен вами' : 'Душнила недоволен вами 🫵'}
      </h1>
      <p className={styles.satisfaction__indicators}>
        {satisfied ? 'Все показатели в норме' : 'CO2 превышает норму'}
      </p>
    </section>
  );
};

export default Satisfaction;
