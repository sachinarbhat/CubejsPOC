cube(`SiteVisitType`, {
  sql: `SELECT * FROM "Master"."SiteVisitType"`,

  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },

  joins: {

  },

  measures: {
    // count: {
    //   type: `count`,
    //   drillMembers: [sitevisittypename, createddatetime, lastmodifieddatetime]
    // }
  },

  dimensions: {
    SiteVisitTypeID: { sql: `${CUBE}."SiteVisitTypeID"`, type: `number`, primaryKey: true, shown: true },
    isactive: {
      sql: `${CUBE}."IsActive"`,
      type: `string`
    },

    sitevisittypename: {
      sql: `${CUBE}."SiteVisitTypeName"`,
      type: `string`
    },

    createddatetime: {
      sql: `${CUBE}."CreatedDateTime"`,
      type: `time`
    },

    lastmodifieddatetime: {
      sql: `${CUBE}."LastModifiedDateTime"`,
      type: `time`
    }
  },

  dataSource: `default`
});
