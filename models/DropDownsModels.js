import mongoose from 'mongoose'

const UserTypeSchema = new mongoose.Schema({
  "UID": {type : Number},
  "Description": {type : String}
})

const LeaveTypeSchema = new mongoose.Schema({
  "UID": {type : Number},
  "Description": {type : String}
})

const DepartmentSchema = new mongoose.Schema({
  "UID": {type : Number},
  "Description": {type : String}
})

const LoactionTypeSchema = new mongoose.Schema({
  "UID": {type : Number},
  "Description": {type : String}
})



export const UserTypeModel = mongoose.model("UserTypeModel" , UserTypeSchema , "Master_UserTypes" )
export const LeaveTypeModel = mongoose.model("LeaveTypeModel" , LeaveTypeSchema , "Master_LeaveTypes" )
export const DepartmentTypeModel = mongoose.model("DepartmentTypeModel" , DepartmentSchema , "Master_UserDepartments" )
export const LoactionTypeModel = mongoose.model("LoactionTypeModel" , LoactionTypeSchema , "Master_Locations" )