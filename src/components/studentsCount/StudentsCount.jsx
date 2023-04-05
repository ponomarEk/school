import { useSelector } from 'react-redux';

import styles from './StudentsCount.module.css';

const StudentsCount = () => {
  const { studentsCount } = useSelector((state) => state);
  const { biggestLesson } = useSelector((state) => state);

  return (
    <div className={styles.students_count}>
      <p> Count of students from BE: {studentsCount}</p>
      <p> Biggest lesson: </p>
      <ul>
        <li>ID: {biggestLesson.Id || 'Not found'}</li>
        <li>Title: {biggestLesson.Title || 'Not found'}</li>
      </ul>
    </div>
  );
};

export default StudentsCount;
