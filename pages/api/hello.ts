/**
* @name: hello
* @description：hello
* @author: wkk
* @date: 2022-11-05
*/
import { NextApiRequest, NextApiResponse } from 'next';

// API Routes documentation.https://nextjs.org/docs/api-routes/introduction
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: 'Hello' });
}
