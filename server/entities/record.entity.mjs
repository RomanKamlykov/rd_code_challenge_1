import { EntitySchema } from "typeorm";
import Record from "../models/Record.mjs";

const schema = new EntitySchema({
    name: 'Record',
    target: Record,
    tableName: 'records',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        date: {
            type: 'date'
        },
        ad_unit_name: {
            type: 'varchar'
        },
        ad_unit_id: {
            type: 'int'
        },
        typetag: {
            type: 'int'
        },
        revenue_source: {
            type: 'enum',
            enum: ['traffic']
        },
        market: {
            type: 'varchar'
        },
        queries: {
            type: 'int'
        },
        clicks: {
            type: 'int'
        },
        impressions: {
            type: 'int'
        },
        page_rpm: {
            type: 'decimal',
            precision: 5,
            scale: 2
        },
        impression_rpm: {
            type: 'decimal',
            precision: 5,
            scale: 2
        },
        true_revenue: {
            type: 'decimal',
            precision: 5,
            scale: 2
        },
        coverage: {
            type: 'decimal',
            precision: 5,
            scale: 2
        },
        ctr: {
            type: 'double'
        }
    }
});

export default schema;