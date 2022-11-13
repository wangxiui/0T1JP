import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'data');

export async function getWordsData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.json`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // console.log('getWordsData', fileContents);

  // Combine the data with the id
  return {
    id,
    data: fileContents,
  };
}
