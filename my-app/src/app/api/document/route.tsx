import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import { REQUEST_METHODS } from '../helpers';

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === REQUEST_METHODS.POST) {
  }
  res.status(200).json({ message: 'ok' });
}
