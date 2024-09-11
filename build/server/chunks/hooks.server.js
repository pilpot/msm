import { Pool } from "pg";
import { v4 } from "uuid";
var define_import_meta_env_default = { VITE_PGDATABASE: "msmgame", VITE_PGUSER: "msmgame", VITE_PGPASSWORD: "Jesuispit11", VITE_PGHOST: "localhost", BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: true };
const pool = new Pool({
  database: "msmgame",
  user: "msmgame",
  password: "Jesuispit11",
  host: "localhost",
  port: define_import_meta_env_default.VITE_PGPORT ?? 5432
});
const connectToDB = async () => await pool.connect();
const handle = async ({ event, resolve }) => {
  const dbconn = await connectToDB().catch((error) => {
    console.error(error);
    throw Error("Could not connect to database");
  });
  let sessionCookie = event.cookies.get("session") || "";
  if (!sessionCookie || sessionCookie == "" || !sessionCookie.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
    sessionCookie = v4();
    event.cookies.set("session", sessionCookie, {
      path: "/",
      expires: new Date(Date.now() + 60 * 60 * 1e3),
      sameSite: "lax",
      httpOnly: true
    });
  }
  event.locals = { db: dbconn, sessionId: sessionCookie };
  const response = await resolve(event);
  dbconn.release();
  return response;
};
async function handleError({ error, event, status, message }) {
  crypto.randomUUID();
  if (status != 404) {
    console.error(error);
  }
  return {
    message: "Whoops!"
  };
}
export {
  handle,
  handleError
};
