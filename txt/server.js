import { createReadStream } from 'fs';
import { createInterface } from 'readline';

async function* readLines(filePath) {
  const stream = createReadStream(filePath, { encoding: 'utf8' });
  
yield* createInterface({
    input: stream,
    crlfDelay: Infinity
 });
}

(async () => {
 for await (const line of readLines('./myfile.txt')) {
    const newline = line.replace(/^([A-D])\s*(?!\.)([^\.\s]*)/, '$1.$2');
   console.log(newline);
 }
})();
