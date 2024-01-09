import { connectToDB } from "$lib/db";
import type { Handle, HandleServerError, error } from '@sveltejs/kit'
import { v4 as uuid } from 'uuid';

export const handle: Handle = async ({ event, resolve }) => {

  const dbconn = await connectToDB();
  // Check if sessionId is stored in a cookie
  let sessionCookie = event.cookies.get('session');

  // If sessionId doesn't exist or doesn't match uuid format, generate a new one
  if (!sessionCookie || !sessionCookie.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)) {
    sessionCookie = uuid();
    event.cookies.set('session', sessionCookie, { path: '/', expires: new Date(Date.now() + 60 * 60 * 1000), sameSite: 'lax', httpOnly: true });
  }
  // Attach sessionId to event.locals
  event.locals = { db: dbconn, sessionId: sessionCookie };

  const response = await resolve(event);
  dbconn.release();

  return response
}

export const handleError: HandleServerError = ({ event, error }) => {
  // send error to an error tracking service
  console.log("error;", event.url, error);
  return {
    message: error.message
  }
}