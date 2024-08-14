import { RotatingLines } from 'react-loader-spinner';
import styles from './styles.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <RotatingLines />
    </div>
  );
};

export default Loader;
