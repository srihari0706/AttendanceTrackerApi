import {
  UserTypeModel,
  LeaveTypeModel,
  DepartmentTypeModel,
  LoactionTypeModel,
} from "../models/DropDownsModels.js";
import {
  getMissingFields,
  filterObectswithoutExtraKeys,
  ReturnSuccess,
  ReturnError,
  ReturnServerError,
  getSchemaKeys,
} from "../shared/SharedFunctions.js";
import { UserList } from "../models/LoginModels.js";

export const fetch_dropdowns = async (req, res) => {
  try {
    const rawData = req.query.data;
    const { type } = JSON.parse(rawData);

    if (type == "user_type") {
      const returned = await UserTypeModel.find();
      ReturnSuccess(res, true, "Fectched Successfully", returned);
    } else if (type == "leave_type") {
      const returned = await LeaveTypeModel.find();
      ReturnSuccess(res, true, "Fectched Successfully", returned);
    } else if (type == "department_type") {
      const returned = await DepartmentTypeModel.find();
      ReturnSuccess(res, true, "Fectched Successfully", returned);
    } else if (type == "location_type") {
      const returned = await LoactionTypeModel.find();
      ReturnSuccess(res, true, "Fectched Successfully", returned);
    } else if (type == "get_all_users") {
      const returned = await UserList.find({},{name : 1 , DepartmentID : 1 , DespartmentDesc : 1});
      ReturnSuccess(res, true, "Fectched Successfully", returned);
    } else {
      ReturnError(res, false, "Type Doesnot match");
    }
  } catch (e) {
    console.log("error in DD ", e);
    ReturnServerError(res, false, "Server Error");
  }
};
