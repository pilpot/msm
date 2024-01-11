import { connectToDB } from '$lib/db';
import type { Handle } from '@sveltejs/kit';
import { v4 as uuid } from 'uuid';

export const handle: Handle = async ({ event, resolve }) => {
	// Connect to database
	const dbconn = await connectToDB().catch((error) => {
		console.error(error);
		throw Error('Could not connect to database');
	});
	// Check if sessionId is stored in a cookie
	let sessionCookie: string = event.cookies.get('session') || '';

	// If sessionId doesn't exist or doesn't match uuid format, generate a new one
	if (
		!sessionCookie ||
    sessionCookie == '' ||
		!sessionCookie.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i)
	) {
		sessionCookie = uuid();
		event.cookies.set('session', sessionCookie, {
			path: '/',
			expires: new Date(Date.now() + 60 * 60 * 1000),
			sameSite: 'lax',
			httpOnly: true
		});
	}
	// Attach sessionId to event.locals
	event.locals = { db: dbconn, sessionId: sessionCookie };

	const response = await resolve(event);
	dbconn.release();

	return response;
};

/** @type {import('@sveltejs/kit').HandleServerError} */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function handleError({ error, event, status, message }) {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const errorId = crypto.randomUUID();

	// big output
	// console.log(error, {
	// 	extra: { event, errorId, status, message }
	// });

  // small output
	if(status != 404) {
		console.error(error);
	}
	//console.log(status);
  //console.error(error);

	return {
		message: 'Whoops!'
	};
}
