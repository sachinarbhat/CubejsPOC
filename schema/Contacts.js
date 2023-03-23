cube(`Contacts`, {
  sql: `SELECT * FROM "Contact"."Contacts"`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started
  },
  
  joins: {
    ContactStatus: {
      sql: `${CUBE}."ContactStatusID" = ${ContactStatus}."ContactStatusID"`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [firstname, lastname, createddatetime, lastmodifieddatetime]
    }
  },
  
  dimensions: {
    ContactID: { sql: `${CUBE}."ContactID"`, type: `number`, primaryKey: true, shown: true },
    isactive: {
      sql: `${CUBE}."IsActive"`,
      type: `string`
    },
    
    firstname: {
      sql: `${CUBE}."FirstName"`,
      type: `string`
    },
    
    lastname: {
      sql: `${CUBE}."LastName"`,
      type: `string`
    },
    
    referredby: {
      sql: `${CUBE}."ReferredBy"`,
      type: `string`
    },
    
    contactposition: {
      sql: `${CUBE}."ContactPosition"`,
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
