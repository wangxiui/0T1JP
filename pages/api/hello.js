/**
* @name: hello
* @description：hello
* @author: wkk
* @date: 2022-11-05
*/
// API Routes documentation.https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
