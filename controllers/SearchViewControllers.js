import { UserList } from '../models/LoginModels.js'
import {PermissionModel} from '../models/PermissionModel.js'
import {LoginModel} from '../models/LeaveModel.js'
import { ReportModel } from "../models/AttendanceReportModel.js";

export const getSearchView = async (req, res) => {
    try {
        const raw = req.query.data;
        console.log(raw);
        const { search_type } = JSON.parse(raw); // parse first!
        console.log(search_type);
         // sri 10

        if (search_type === 'user_list') {
            const userlist = await UserList.find({isActive : true}); // ✅ await!
            return res.status(200).json({ success : true , data: userlist });
        }
        else if(search_type === 'permission_pending'){
            const pending = await PermissionModel.find();
            return res.status(200).json({success : true , data : pending})
        }
        else if(search_type === 'leave_pending'){
            const pending = await LoginModel.find();
            return res.status(200).json({success : true , data : pending})
        }
         else if(search_type === 'attendance_reports_all'){
            const pending = await ReportModel.find();
            return res.status(200).json({success : true , data : pending})
        }
        else{
            return res.json({ success : false ,  error: 'Pass correct Parameter' });
        }
    } catch (err) {
        res.status(400).json({ success : false ,  error: 'Invalid JSON format in query param' });
    }
};
