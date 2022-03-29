import moment from "moment";

/**
 * @typedef {import("../models/Record.mjs").default} Record
 * @typedef {{ Date: string, 'Ad Unit Name': string, 'Ad Unit ID': string, Typetag: string,
 * 'Revenue Source': string, Market: string, Queries: string, Clicks: string, Impressions: string,
 * 'Page Rpm': string, 'Impression Rpm': string, 'True Revenue': string, Coverage: string, Ctr: string }} CsvRow
 */

/**
 * @param {CsvRow} el
 * @returns {Omit<Record, "id">}
 */
export function mapRecords(el) {
    return {
        date: moment(el.Date).format('YYYY-MM-DD'),
        ad_unit_name: el["Ad Unit Name"], 
        ad_unit_id: el["Ad Unit ID"],
        typetag: el.Typetag,
        revenue_source: el["Revenue Source"],
        market: el.Market,
        queries: el.Queries.replace(',', ''),
        clicks: el.Clicks,
        impressions: el.Impressions,
        page_rpm: el["Page Rpm"],
        impression_rpm: el["Impression Rpm"],
        true_revenue: el["True Revenue"].replace('$', ''),
        coverage: el.Coverage.replace('%', ''),
        ctr: el.Ctr
    }
}