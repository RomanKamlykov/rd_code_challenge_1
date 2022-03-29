export default class Record {
    constructor(
        id,
        date,
        ad_unit_name,
        ad_unit_id,
        typetag,
        revenue_source,
        market,
        queries,
        clicks,
        impressions,
        page_rpm,
        impression_rpm,
        true_revenue,
        coverage,
        ctr
    ) {
        this.id = id;
        this.date = date;
        this.ad_unit_name = ad_unit_name;
        this.ad_unit_id = ad_unit_id;
        this.typetag = typetag;
        this.revenue_source = revenue_source;
        this.market = market;
        this.queries = queries;
        this.clicks = clicks;
        this.impressions = impressions;
        this.page_rpm = page_rpm;
        this.impression_rpm = impression_rpm;
        this.true_revenue = true_revenue;
        this.coverage = coverage;
        this.ctr = ctr;
    }
}