import mongoose from "mongoose";

const PermissionSchema = new mongoose.Schema({
  "CreatedByDesc": { type: String },
  "CreatedById": { type: String },
  "CreatedTime": { type: String },
  "Date": { type: String },
  "FromTime": { type: String },
  "Reason": { type: String },
  "Status": { type: Number },
  "StatusDesc": { type: String },
  "ToTime": { type: String },
  "UpdatedByDesc": { type: String },
  "UpdatedById": { type: String },
  "UpdatedByTime": { type: String },
  "UserId": { type: String },
  "EmployeeDesc": { type: String },
  "employeeTypeId": { type: String },
})

export const PermissionModel = mongoose.model("PermissionModel" , PermissionSchema , "PermissionRequests" )