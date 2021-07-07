import { config } from 'dotenv';

const result = config();

if (result.error) {
	throw result.error;
}

console.log(result.parsed);

console.log(process.env.DB_HOST);
console.log(process.env.WEB_HOST);
