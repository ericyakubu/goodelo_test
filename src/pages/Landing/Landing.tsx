import { FunctionComponent } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Days, Logo, Satisfaction, Temperature } from '@/components';
import styles from './Landing.module.scss';

const Landing: FunctionComponent = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['temperature'],
    queryFn: async () => {
      const { data } = await axios.get('http://dushnila.gooddelo.com/data');
      return data;
    },
    refetchInterval: 6000,
  });

  if (isLoading) return <div>Loading...</div>;

  const satisfied = data.temp <= 27 && data.co2 <= 800;
  return (
    <>
      <main className={styles.landing}>
        <h1 className={styles.landing__title}>Д У Ш Н И Л А</h1>
        <div className={styles.landing__container}>
          <Satisfaction className={styles.landing__1} satisfied={satisfied} />
          <Days className={styles.landing__2} />
          <Logo className={styles.landing__3} />
          <Temperature
            className={styles.landing__4}
            satisfied={satisfied}
            temperature={data}
          />
        </div>
      </main>
    </>
  );
};

export default Landing;
