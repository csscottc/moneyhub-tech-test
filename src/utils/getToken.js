const { curriedMakeRequest } = require("./makeRequest");
const R = require("ramda");

// Might be worth urlencoding this
const postData = `scope=transactions&grant_type=client_credentials`;

// Having this token in code is a bad idea.
const requestOptions = {
  hostname: "obmockaspsp.moneyhub.co.uk",
  port: 443,
  path: "/api/token?=",
  method: "POST",
  headers: {
    Authorization:
      "Basic YmExYmRjYzAtNjBmNS00OTM5LWFmYzQtMWIxM2E5OGRjNDkwOjZmMWFmZmY4LWViODEtNDk0NS04YjkxLWEwNWUzZDA5NWNlMw==",
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": Buffer.byteLength(postData),
  },
};

const makeRequestToMockServer = curriedMakeRequest(requestOptions, postData);

/*
 * Expects a function that returns a Promise<response>
 */
async function getToken(requestMaker) {
  // TODO: This response should be tested.
  const { access_token: token } = await requestMaker();
  return token;
}

module.exports = { getToken, makeRequestToMockServer };
