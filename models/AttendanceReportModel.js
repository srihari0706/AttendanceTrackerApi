import mongoose from 'mongoose'

const ReportSchema = new mongoose.Schema({
  "UserId": {type : String},
  "UserName": {type : String},
  "DepartmentId": {type : Number},
  "DepartmentName": {type : String},
  "CheckInTime": {type : String},
  "CheckOutTime": {type : String},
  "CheckInDate": {type : String},
  "Status": {type : String},
  "WorkHours": {type : Number},
  "CreatedById":{type : String},
  "CreatedByName":{type : String},
  "CreatedTime": {type : String},
  "UpdatedById": {type : String},
  "UpdatedByName": {type : String},
  "UpdatedTime": {type : String},
  "Location": {type : String},
  "IpAddress": {type : String},
  "Remarks": {type : String},
})

export const ReportModel = mongoose.model("ReportModel",ReportSchema,"UserAttendanceReports")