import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

const cors = Cors({
	methods: ["POST", "GET", "HEAD"],
});

function runMiddleware(
	req: NextApiRequest,
	res: NextApiResponse,
	fn: Function,
) {
	// console.log("teste");
	// console.log(req);
	// console.log(res);
	// console.log(fn);
	return new Promise((resolve, reject) => {
		fn(req, res, (result: any) => {
			if (result instanceof Error) {
				return reject(result);
			}

			return resolve(result);
		});
	});
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	await runMiddleware(req, res, cors);

	res.json({ message: "CORS Enabled" });
}
