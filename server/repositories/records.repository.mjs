import dataSource from "../db.mjs";
import Record from "../models/Record.mjs";

export default dataSource.getRepository(Record);