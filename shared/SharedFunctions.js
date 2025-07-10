// gets all misssing keys from the request
export function getMissingFields(requiredFields = [], data = {}) {
  return requiredFields.filter((field) => !data.hasOwnProperty(field));
}

// THIS FILTERS THE REQUESTED BODY FROM THE FIELDS WE NEEDED TO INSERT OR UPDATE
export function filterObectswithoutExtraKeys(allowedFields = [], data = {}) {
  const filtered = {};
  for (const key of allowedFields) {
    if (data.hasOwnProperty(key)) {
      filtered[key] = data[key];
    }
  }
  return filtered;
}

//This return all Schema Keys mostly used for update
export const getSchemaKeys = (modalName) => {
  const SchemaKeys = Object.keys(modalName.schema.paths).filter(
    (field) => field !== "_id" && field !== "__v"
  );
  return SchemaKeys;
};

//return mesgage
export const ReturnSuccess = (res, isSuccess, message) => {
  return res.status(200).json({
    success: isSuccess,
    message: message,
  });
};

//return mesgage
export const ReturnError = (res, isSuccess, message) => {
  return res.status(400).json({
    success: isSuccess,
    message: message,
  });
};

//return mesgage
export const ReturnServerError = (res, isSuccess, message) => {
  return res.status(400).json({
    success: isSuccess,
    message: message,
  });
};
