import { connectToDB } from "$lib/db";
import type { Handle } from '@sveltejs/kit'
import { v4 as uuid } from 'uuid';



export const handle: Handle = async ({ event, resolve }) => {
  // Connect to database
  const dbconn = await connectToDB().catch((error) => {
    console.error(error);
    throw Error('Could not connect to database');
  });
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

/** @type {import('@sveltejs/kit').HandleServerError} */
export async function handleError({ error, event, status, message }) {
	const errorId = crypto.randomUUID();

	// example integration with https://sentry.io/
	console.log(error, {
		extra: { event, errorId, status, message },
	});

	return {
		message: 'Whoops!',

	};
}