// import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
// import { createServer, IncomingMessage, ServerResponse } from "http";
// import nextApp from "next";

// const appNext = nextApp({ dev: true });

// const nextHandler: NextApiHandler = (
// 	req: NextApiRequest,
// 	res: NextApiResponse,
// ) => {
// 	return appNext.getRequestHandler()(req, res);
// };

// function createRequestListener(handler: NextApiHandler) {
// 	return createServer((req: IncomingMessage, res: ServerResponse) => {
// 		handler(req as NextApiRequest, res as NextApiResponse);
// 	});
// }

// const server = createRequestListener(nextHandler);

// export default server