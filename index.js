import path from 'path'

import {rename,appendFile,readdir} from "node:fs/promises"
import { fileURLToPath } from 'url'

const __filename  = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// let fullPath = path.join(__dirname,"files","json.txt")
// appendFile()
// rename(fullPath,fullPath.replace("json.txt","user.txt"))

let id = 1;
let dirPath = path.join(__dirname,"anonymous")
readdir(dirPath).then((result)=>{
    result.forEach(element => {
        let fullPath = path.join(__dirname,"anonymous",`${element}`)
        rename(fullPath,fullPath.replace(`${element}`,`file${id}.json`))
        id++;
    });
});


