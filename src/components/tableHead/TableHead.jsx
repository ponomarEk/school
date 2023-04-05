import { TableCell, TableHead, TableRow } from '@mui/material';

const tableCellStyles = {
  color: 'white',
  background: 'blue',
};

const TableHeadComponent = ({ lessons }) => {
  return (
    <TableHead sx={{ position: 'sticky', top: 0 }}>
      <TableRow>
        <TableCell sx={tableCellStyles}>№</TableCell>
        <TableCell sx={tableCellStyles}>Student</TableCell>
        {lessons?.map((lesson) => (
          <TableCell sx={tableCellStyles} key={lesson.Id}>
            {lesson.Title}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeadComponent;
