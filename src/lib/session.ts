import type { Cookies } from '@sveltejs/kit';

export function createSession(cookies: Cookies) {

  const sessionID = crypto.randomUUID();

  cookies.set('session', JSON.stringify({ sessionID }), {
    path: '/',
    expires: new Date(Date.now() + 60 * 60 * 1000),
    sameSite: 'lax',
    httpOnly: true
  });

}