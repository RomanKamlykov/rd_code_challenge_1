import { unlink } from "fs/promises";
import csvParcer from "./csv-parser.mjs";
import { mapRecords } from "./map-functions.mjs";
import recordsRepository from "../repositories/records.repository.mjs";

/**
 * @typedef {import("../models/Record.mjs").default} Record
 * @typedef {import("../services/map-functions.mjs").CsvRow} CsvRow
 * @param {Omit<Record, "id">[]} data
 */

async function getRecords() {
    const values = await recordsRepository.find({});
    return values;
}

/**
 * @param {string} path Path to a .csv file
 */
async function addRecords(path) {
    /**
     * @type {CsvRow[]}
     */
    const csvData = await csvParcer(path);
    await unlink(path);
    const mappedData = csvData.map(mapRecords);
    const values = await recordsRepository.insert(mappedData);
    return values;
}

async function removeRecords() {
    await recordsRepository.delete({});
    return;
}

export default {
    getRecords,
    addRecords,
    removeRecords
}