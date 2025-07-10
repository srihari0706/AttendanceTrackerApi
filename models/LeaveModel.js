import mongoose from 'mongoose'

const LoginSchema = new mongoose.Schema({
  "CreatedByDesc": { type: String },
  "CreatedById": { type: String },
  "CreatedTime": { type: String },
  "FromDate": { type: String },
  "Reason": { type: String },
  "Status": { type: Number },
  "StatusDesc": { type: String },
  "ToDate": { type: String },
  "UpdatedByDesc":{ type: String },
  "UpdatedById": { type: String },
  "UpdatedByTime": { type: String },
  "UserId": { type: String },
  "LeaveType" : {type : Number},
  "LeaveTypeDesc" : { type: String },
})

export const LoginModel = mongoose.model("LoginModel" , LoginSchema , "LeaveRequests" )