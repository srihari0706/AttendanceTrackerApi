// This is where your actual logic lives
import { UserList } from "../models/LoginModels.js";
import { getMissingFields } from "../shared/SharedFunctions.js";

export const createUser = async (req, res) => {
  try {
     //set validations start
    const requiredFields = ["name", "pass"];
    const missing = getMissingFields(requiredFields, req.body);

    if (missing.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing fields: ${missing.join(", ")}`,
      });
    }
    //set validations end
    const createUser = new UserList(req.body);
    await createUser.save();
    const respJson = {
      success: true,
      message: "User Created",
    };
    res.status(200).json(respJson);
  } catch (e) {
    const respJson = {
      success: false,
      message: "Failed to insert users",
    };
    res.status(500).json(respJson);
  }
};

export const checkUser = async (req, res) => {
  try {
    const { name, pass } = req.body; // destructring

    //set validations start
    const requiredFields = ["name", "pass"];
    const missing = getMissingFields(requiredFields, req.body);

    if (missing.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing fields: ${missing.join(", ")}`,
      });
    }
    //set validations end

    const users = await UserList.find({ name: name, pass: pass }); // fetches all documents
    if (users.length != 0 && users[0].pass == pass) {
      res.json({ success: true, message: "Logged in successfully" });
      return;
    } else {
      res.json({ success: false, message: "Logged in failed" });
      return;
    }
  } catch (error) {
    console.log(error);
    const respJson = {
      success: false,
      message: "Log in Failed because of error",
    };
    res.status(500).json(respJson);
  }
};
