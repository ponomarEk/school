import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import App from '../App';
import { AttendanceTable, StudentsCount } from '../components';
import { ROUTES } from '../constants';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />} path={ROUTES.ATTENDANCE_TABLE}>
      <Route element={<AttendanceTable />} index />
      <Route path={ROUTES.STUDENTS_COUNT} element={<StudentsCount />} />
    </Route>
  )
);

export default router;
