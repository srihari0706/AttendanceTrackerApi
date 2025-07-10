import express from 'express';
import { createUser , checkUser } from '../controllers/LoginControllers.js';
import { getSearchView } from '../controllers/SearchViewControllers.js';
import { InsertUpdatePermissionRequest } from '../controllers/PermissionRequestController.js';
import { InsertUpdateLeaveRequest } from '../controllers/LeaveRequestController.js';
import { InsertUpdateAttendanceReports } from '../controllers/AttendanceReportController.js';

const authRoutes = express.Router(); //this will create a small interal router that routs to a aprticular function
// login routes
authRoutes.post('/create-user', createUser);
authRoutes.post('/login', checkUser);

//Search view routes
authRoutes.get('/get-search-view' , getSearchView) //get must use encodeURIComponent and json.stringify

//permission 
authRoutes.post('/insert_update_permission' , InsertUpdatePermissionRequest)

//leave
authRoutes.post('/insert_update_leave', InsertUpdateLeaveRequest )

//attendance reports 
authRoutes.post('/insert_update_attendance_reports', InsertUpdateAttendanceReports )

export default authRoutes;
