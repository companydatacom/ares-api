/** Run: COMPANYDATA_API_KEY=... npx tsx examples/quickstart.ts */
import { AresClient } from "../src/index";

const client = new AresClient({ auth: { type: "apiKey", apiKey: process.env.COMPANYDATA_API_KEY! } });

const company = await client.getByIco("45244782");
console.log("By ICO:", company);

const page = await client.search({ cityName: "Prague", hasEmail: true, pageSize: 25 });
console.log("Search:", page.data);
