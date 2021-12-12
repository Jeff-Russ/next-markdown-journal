import fs from 'fs'
import path from 'path'

//////// General-Purpose  File Helpers ////////////////////////////////////////

/** 
 * @param {any} value A variable or constant to be checked
 * @returns {boolean} true if value is iterable and not a string, else false.
 */
 export const isIterableNonString = (value) => {
  return (Symbol.iterator in Object(value)
    && !(typeof value === 'string' || value instanceof String));
}

/** 
 * @param {string} directory paths to a directory.
 * @param {string} extensions as string or array of strings (including the '.') to be included in return.
 * @returns {array} filenames in a that have a particular extension or extensions.
 */
export const lsDirFilesWithExt = (directory, extensions) => {
  if (!isIterableNonString(extensions))extensions = [extensions]

  return fs.readdirSync(directory, { withFileTypes: true })
    .filter((dirent) => {
      return extensions.includes(getExtension(dirent.name)) && dirent.isFile();
    }).map(dirent => dirent.name)
}


/** 
 * @param {string} filename string of filename with extension. 
 * @returns {string} filename without extension 
 */
export const trimExtension = (filename) => path.parse(filename).name


/** 
 * @param {string} filename with extension. 
 * @returns {string} lower-cased extension (with leading '.') from filename
 */
export const getExtension = (filename) => path.extname(filename).toLowerCase()

/**
 * @param {string} filepath path to a local file or directory
 * @returns true if path exists, else false.
 */
export const fileExists = (filepath) => {
  try {
    if (fs.existsSync(filepath)) return true
  } catch(err) {
    return false
  }
}


//////// Project Helpers //////////////////////////////////////////////////////

/**
 * @param {...string} paths A sequence of path segments relative to the directory where app is executed (the project root) 
 * @returns {string} absolute path of sequence of path segments relative to the project root 
 */
 export const projPath = (...paths) =>  path.join(process.cwd(), ...paths)


/** 
 * @param {...string} paths sequence of path segments relative to the directory where app is executed (the project root) 
 * @returns {string} contents of file at path of sequence of path segments relative to the project root 
 */
export const readProjFile = (...paths) => fs.readFileSync(projPath(...paths),'utf-8')

export let inDevEnvironment = false;
if (process && process.env.NODE_ENV === 'development') {
  inDevEnvironment = true;
  
}


//////// Project-Specific Helpers /////////////////////////////////////////////


export const mdExt = ['.md']

if (inDevEnvironment) mdExt.push('.mdown')

export const sortByFrontmatterDate = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}




