import { FunctionComponent } from 'react';
import cn from 'classnames';
import styles from './Temperature.module.scss';

interface IProps {
  className?: string;
  satisfied?: boolean;
  temperature: {
    co2: string;
    temp: string;
  };
}

const Temperature: FunctionComponent<IProps> = ({
  className,
  satisfied = true,
  temperature,
}) => {
  return (
    <section
      className={cn(
        styles.temperature,
        {
          [styles.satisfied]: satisfied,
          [styles.unsatisfied]: satisfied === false,
        },
        className
      )}
    >
      {temperature.temp && (
        <div className={styles.temperature__indicator}>
          <h2>{Number(temperature.temp).toFixed(1)} ℃</h2>
          <h4>Температура</h4>
        </div>
      )}
      {temperature.co2 && (
        <div className={styles.temperature__indicator}>
          <h2>{Math.floor(Number(temperature.co2))} ppm</h2>
          <h4>CO2</h4>
        </div>
      )}
    </section>
  );
};

export default Temperature;
