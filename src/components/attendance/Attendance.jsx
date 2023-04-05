import { TableCell } from '@mui/material';

const Attendance = ({ lessons, absenceData, studentId }) => {
  const getDataConfig = (data) => {
    const config = data.reduce((config, element) => {
      config[element.ColumnId] = element.Title;
      return config;
    }, {});

    const ids = Object.keys(config);

    return { config, ids };
  };

  const { config, ids } = getDataConfig(absenceData);

  return (
    <>
      {lessons?.Items.map((lesson) => (
        <TableCell
          sx={{ cursor: 'pointer' }}
          key={lesson.Id}
          lesson={lesson.Id}
          student={studentId}
        >
          {ids.includes(`${lesson.Id}`) ? config[lesson.Id] : ''}
        </TableCell>
      ))}
    </>
  );
};

export default Attendance;
