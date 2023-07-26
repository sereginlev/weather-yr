import { CurrentItem } from './current';

export type User = {
	email: string;
	token: string;
	id: string;
	isAuth: boolean;
	favoriteItems: CurrentItem[];
	locations: string[];
	accessToken?: string;
}
