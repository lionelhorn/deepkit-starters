import {AutoIncrement, entity, MaxLength, MinLength, PrimaryKey, typeOf, validate} from "@deepkit/type";

export class User {
	username: string & MaxLength<100> = "";
	first: string;
	last: string;
	age: number;

	constructor() {
	}
}

export function testUser() {
	console.log(typeOf<User>());
	console.log(validate<User>({first: "John", last: "Do", username: 'Joe'}));
}
