const load = async ({ locals }) => {
  const db = locals.db;
  const querySettings = await db.query("SELECT * FROM daily_settings");
  if (querySettings.rowCount && querySettings.rowCount > 0) {
    for (let i = 0; i < querySettings.rowCount; i++) {
      querySettings.rows[i].dayDisplay = querySettings.rows[i].day.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });
      querySettings.rows[i].allow_duplicatesDisplay = querySettings.rows[i].allow_duplicates ? "Yes" : "No";
    }
    return {
      settings: querySettings.rows
    };
  }
  return {
    settings: []
  };
};
export {
  load
};
