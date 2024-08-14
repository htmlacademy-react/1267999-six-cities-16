import styles from './styles.module.scss';
import { Helmet } from 'react-helmet-async';
import { ServicePageType } from 'const/const.ts';

type ServicePageProps = {
  type: ServicePageType;
};

const ServicePage = ({ type }: ServicePageProps) => {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>
          Service page six cities service for travelers - official website
        </title>
      </Helmet>
      <h2 className={styles.title}>{type}</h2>
    </div>
  );
};

export default ServicePage;
