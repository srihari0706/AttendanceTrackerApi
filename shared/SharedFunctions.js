export function getMissingFields(requiredFields = [], data = {}) {
  const missing = [];

  for (const field of requiredFields) {
    if (!data.hasOwnProperty(field) || data[field] === undefined || data[field] === null || data[field] === '') {
      missing.push(field);
    }
  }

  return missing;
}