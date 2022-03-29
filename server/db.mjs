import { DataSource } from "typeorm";
import recordSchema from "./entities/record.entity.mjs";

const dataSource = new DataSource({
    type: "mysql",
    port: process.env.MYSQL_PORT,
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    entities: [ recordSchema ],
});

await dataSource.initialize();
await dataSource.synchronize();

export default dataSource;