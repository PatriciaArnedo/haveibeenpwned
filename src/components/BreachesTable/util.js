export function prepareRow(row) {
  // Shallow copy to avoid modifying the objects in state
  row = { ...row };
  // Convert everything to string to simplify sorting
  row["UsernamePwnd"] = `${row["DataClasses"].includes("Usernames")}`;
  row["PasswordPwnd"] = `${row["DataClasses"].includes("Passwords")}`;
  row["IsVerified"] = `${row["IsVerified"]}`;
  return row;
}

export const rowMatchesFilter = (filter, row) => {
  if (!filter || filter.trim().length === 0) {
    return true;
  }

  const lcFilter = filter.toLowerCase();
  const headers = ["Name", "Domain", "BreachDate", "IsVerified", "PwnCount"];
  const filterMatches = headers
    .map((h) => `${row[h]}`)
    .filter((r) => r.indexOf(lcFilter) >= 0);

  return filterMatches.length > 0;
};
