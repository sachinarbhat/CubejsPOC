cube(`SiteVisits`, {
  sql: `SELECT * FROM "SiteVisit"."SiteVisits"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    SiteVisitType: {
      sql: `${CUBE}."SiteVisitTypeID" = ${SiteVisitType}."SiteVisitTypeID"`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [sitevisitname, createddatetime, lastmodifieddatetime, sitevisitdatetimefrom, sitevisitdatetimeto]
    }
  },
  
  dimensions: {
    SiteVisitID: {
      sql: `${CUBE}."SiteVisitID"`,
      type: `number`,
      primaryKey: true,
      shown: true
    },
    isactive: {
      sql: `${CUBE}."IsActive"`,
      type: `string`
    },
    
    sitevisitname: {
      sql: `${CUBE}."SiteVisitName"`,
      type: `string`
    },
    
    deanemailaddress: {
      sql: `${CUBE}."DeanEmailAddress"`,
      type: `string`
    },
    
    season: {
      sql: `${CUBE}."Season"`,
      type: `string`
    },
    
    createddatetime: {
      sql: `${CUBE}."CreatedDateTime"`,
      type: `time`
    },
    
    lastmodifieddatetime: {
      sql: `${CUBE}."LastModifiedDateTime"`,
      type: `time`
    },
    
    sitevisitdatetimefrom: {
      sql: `${CUBE}."SiteVisitDateTimeFrom"`,
      type: `time`
    },
    
    sitevisitdatetimeto: {
      sql: `${CUBE}."SiteVisitDateTimeTo"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
