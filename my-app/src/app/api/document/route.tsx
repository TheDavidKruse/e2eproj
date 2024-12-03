import type { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import { REQUEST_METHODS } from '../helpers';
import client from '../../../lib/mongo';

type ResponseData = {
  message: string;
};

export async function GET(res: NextApiResponse<ResponseData>) {
  // Replace the uri string with your MongoDB deployment's connection string.
  try {
    // Get the database and collection on which to run the operation
    const database = client.db('local');
    const movies = database.collection('Photos');
    // Query for a movie that has the title 'The Room'
    const query = { albumId: 1 };
    // Execute query
    const movie = await movies.findOne(query);
    // Print the document returned by findOne()
    console.log(movie);
    return Response.json({ data: movie }, { status: 200 });
  } catch (e) {
    console.error(e);
    return Response.json({ msg: 'calll failed' }, { status: 501 });
  } finally {
    await client.close();
  }
}
