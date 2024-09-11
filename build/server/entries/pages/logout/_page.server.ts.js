import { r as redirect } from "../../../chunks/index.js";
const actions = {
  logout: ({ cookies }) => {
    const session = cookies.get("session");
    if (session) {
      cookies.delete("session", { path: "/" });
    }
    throw redirect(303, "/");
  }
};
export {
  actions
};
