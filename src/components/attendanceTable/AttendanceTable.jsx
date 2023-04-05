import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ABSENCE } from '../../constants';
import {
  useAddAbsenceMutation,
  useGetAbsenceQuery,
  useRemoveAbsenceMutation,
} from '../../store/api/absenceApi';
import { useGetLessonsQuery } from '../../store/api/lessonsApi';
import { useGetStudentsQuery } from '../../store/api/studentsApi';
import { actions as lessonsActions } from '../../store/lessons/lessonsSlice.js';
import { actions as studentsActions } from '../../store/students/studentsSlice';
import {
  checkIsSthLoading,
  getFilteredAbsenceById,
  getFullName,
} from '../../utils';

import Attendance from '../attendance/Attendance';
import TableHead from '../tableHead/TableHead';

import styles from './AttendanceTable.module.css';

const AttendanceTable = () => {
  const absenceData = useGetAbsenceQuery();
  const students = useGetStudentsQuery();
  const lessons = useGetLessonsQuery();

  const [addAbsence, addConfig] = useAddAbsenceMutation();
  const [removeAbsence, removeConfig] = useRemoveAbsenceMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (students.isSuccess && lessons.isSuccess) {
      dispatch(studentsActions.setStudentsCount(students.data.Quantity));
      dispatch(lessonsActions.setBiggestLesson(lessons.data.Items));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [students.isSuccess, lessons.isSuccess]);

  const handleTableClick = async (e) => {
    const { lesson, student } = e.target.attributes;
    if (!lesson || !student) {
      return;
    }

    const ColumnId = +lesson.value;
    const SchoolboyId = +student.value;

    if (e.target.innerText === ABSENCE) {
      await removeAbsence({ ColumnId, SchoolboyId });

      return;
    }

    await addAbsence({ ColumnId, SchoolboyId, title: ABSENCE });
  };

  if (
    checkIsSthLoading(
      [absenceData, lessons, students],
      [addConfig, removeConfig]
    )
  ) {
    return (
      <div className={styles.loader}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <TableContainer
      component={Paper}
      sx={{ height: '90vh', width: '90%', m: '0 auto' }}
    >
      <Table>
        <TableHead lessons={lessons.data.Items} />
        <TableBody onClick={handleTableClick}>
          {students.data?.Items.map((student) => (
            <TableRow key={student.Id}>
              <TableCell>{student.Id}</TableCell>
              <TableCell>{getFullName(student)}</TableCell>
              <Attendance
                lessons={lessons.data}
                absenceData={getFilteredAbsenceById(
                  student.Id,
                  absenceData.data
                )}
                studentId={student.Id}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AttendanceTable;
