import {parse} from 'csv-parse/sync'
import * as fs from 'fs';
import * as path from 'path';



export function readcsv(filepath:string): any[]{
  const absolutepath  = path.resolve(filepath);
    const fileContent = fs.readFileSync(absolutepath, 'utf8'); 
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });
    return records;
}   




