import { parseFile } from "@fast-csv/parse";

/**
 * 
 * @param {string} path Path to a .csv file
 * @returns {Promise<object[]>}
 */
export default function csvParcer(path) {
    return new Promise((resolve, reject) => {
        let data = [];
        parseFile(path, { delimiter: ';', headers: true })
        .on('error', (error) => { reject(error) })
        .on('data', (row) => { data.push(row) })
        .on('end', () => { resolve(data) });
    });
}