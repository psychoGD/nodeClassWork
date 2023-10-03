import path from 'path'

import {rename} from "node:fs/promises"
import { fileURLToPath } from 'url'

const __filename  = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let fullPath = path.join(__dirname,"files","json.txt")

rename(fullPath,fullPath.replace("json.txt","user.txt"))