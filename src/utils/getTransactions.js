const { makeRequest } = require("./makeRequest");

const requestOptions = {
  hostname: "obmockaspsp.moneyhub.co.uk",
  port: 443,
  path: "/api/users/12345/transactions",
  method: "GET",
  headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6InRyYW5zYWN0aW9ucyIsImlhdCI6MTYyODQ1OTI4MCwiZXhwIjoxNjI4NDY2NDgwfQ.UVYYtNBnEcuRRR6fysgzIrS1sa6jiOJQOPaUKpGNz1I",
  },
};


async function getTransactions(userId) {
    const response = await makeRequest(requestOptions, undefined)();
    return response;
}
    

getTransactions(12345).then(d => {
    console.log(d.Data.Transactions);
}).catch(err => {
    console.error(err);
});


// I've run out of time now, so here's what I want to do next.
// Generalize the above code so I can pass in any userId
// use the getToken function to grab a token rather than having a hardcoded token
// Map the transactions to the required swagger document
// Make use of Ramda pick/compose to come up with a pipeline for the above
