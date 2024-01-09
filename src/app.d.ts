import { PoolClient } from 'pg';
import { v4 as uuid } from 'uuid';
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			db: PoolClient;
			user?: { id: string; username: string; email: string; };
			sessionId?: uuid;
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export { };
