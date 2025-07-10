import { PermissionModel } from "../models/PermissionModel.js";
import {
  getMissingFields,
  filterObectswithoutExtraKeys,
  ReturnSuccess,
  ReturnError,
  ReturnServerError,
  getSchemaKeys
} from "../shared/SharedFunctions.js";

export const InsertUpdatePermissionRequest = async (req, res) => {
  try {
    const { UID } = req.body;
    // ✅ Get all schema-defined fields (keys) (excluding _id and __v) as a array
    const neededFields = getSchemaKeys(PermissionModel);

    // ✅ Validate required fields
    const missing = getMissingFields(neededFields, req.body);
    if (missing.length > 0) {
      ReturnError(res, false, `Missing fields: ${missing.join(", ")}`);
    }
    // THIS FILTERS THE REQUESTED BODY FROM THE FIELDS WE NEEDED TO INSERT OR UPDATE
    const filteredBody = filterObectswithoutExtraKeys(neededFields, req.body);
    // ✅ UPDATE flow
    if (UID) {
      const updateResult = await PermissionModel.updateOne(
        { _id: UID },
        { $set: filteredBody } // 🔥 This enforces schema rules during update
      );
      if (updateResult.modifiedCount > 0) {
        ReturnSuccess(res, true, "Updated Successfully");
      } else { // tgis returns if there is noting to update
        let message = "No change detected. Document already up to date";
        ReturnSuccess(res, true, message);
      }
    }
    // ✅ INSERT flow
    const create = new PermissionModel(filteredBody);
    await create.save();
    ReturnSuccess(res, true, "Inserted Successfully");
  } catch (e) {
    //if id deosent match thenm it wil come to catch  and id caytches erros too
    console.error("❌ Insert/Update Error:", e);
    ReturnServerError(res, false, "Failed to insert/update");
  }
};
