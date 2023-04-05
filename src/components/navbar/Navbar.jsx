import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <Link to={ROUTES.ATTENDANCE_TABLE} className={styles.list_link}>
          <li className={styles.list_item}>Attendance table</li>
        </Link>
        <Link to={ROUTES.STUDENTS_COUNT} className={styles.list_link}>
          <li className={styles.list_item}>Students count</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
