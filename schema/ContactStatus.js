cube(`ContactStatus`, {
  sql: `SELECT * FROM "Master"."ContactStatus"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    
  },
  
  measures: {
    // count: {
    //   type: `count`,
    //   drillMembers: [contactstatusname, createddatetime, lastmodifieddatetime]
    // }
  },
  
  dimensions: {
    ContactStatusID: { sql: `${CUBE}."ContactStatusID"`, type: `number`, primaryKey: true, shown: true },
    isactive: {
      sql: `${CUBE}."IsActive"`,
      type: `string`
    },
    
    contactstatusname: {
      sql: `${CUBE}."ContactStatusName"`,
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
