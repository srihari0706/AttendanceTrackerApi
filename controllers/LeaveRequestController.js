import { LoginModel } from "../models/LeaveModel.js";
import {
  getMissingFields,
  filterObectswithoutExtraKeys,
  ReturnSuccess,
  ReturnError,
  ReturnServerError,
  getSchemaKeys,
} from "../shared/SharedFunctions.js";

export const InsertUpdateLeaveRequest = async (req, res) => {
  try {
    console.log("222222222222")
    const { UID } = req.body;
    const neededFields = getSchemaKeys(LoginModel);
    // ✅ Validate required fields
    const missing = getMissingFields(neededFields, req.body);
    if (missing.length > 0) {
      ReturnError(res, false, `Missing fields: ${missing.join(", ")}`);
    }
    // THIS FILTERS THE REQUESTED BODY FROM THE FIELDS WE NEEDED TO INSERT OR UPDATE
    const filteredBody = filterObectswithoutExtraKeys(neededFields, req.body);

    if (UID) {
      const updateResult = await LoginModel.updateOne(
        { _id: UID },
        { $set: filteredBody } // 🔥 This enforces schema rules during update
      );
      if (updateResult.modifiedCount > 0) {
        ReturnSuccess(res, true, "Updated Successfully");
      } else {
        // tgis returns if there is noting to update
        let message = "No change detected. Document already up to date";
        ReturnSuccess(res, true, message);
      }
    }
    const create = new LoginModel(filteredBody);
    await create.save();
    ReturnSuccess(res, true, "Inserted Successfully");
  } catch (e) {
    //if id deosent match thenm it wil come to catch  and id caytches erros too
    console.error("❌ Insert/Update Error:", e);
    ReturnServerError(res, false, "Failed to insert/update");
  }
};
