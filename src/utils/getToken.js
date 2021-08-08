const https = require("https");
const { curryN } = require("ramda");

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

// Can probably make this testable by mocking https
function makeRequest(requestOptions, postData) {
  return new Promise((resolve, reject) => {
    const req = https.request(requestOptions, (res) => {
      console.log(`Response Status: ${res.statusCode}`);
      console.log(`Response Headers: ${JSON.stringify(res.headers)}`);
      res.setEncoding("utf8");

      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        console.log("No more data in response.");
        console.log(`Data is ${data}`);
        resolve(data);
      });
    });

    req.on("error", (err) => {
      reject(err);
      console.error(`problem with request: ${err.message}`);
    });

    req.write(postData);
    req.end();
  });
}

const curriedMakeRequest = curryN(3,makeRequest);

const makeRequestToMockServer = curriedMakeRequest(requestOptions)(postData);

/*
 * Expects a function that returns a Promise<response>
 */
async function getToken(requestMaker) {
  // TODO: This response should be tested.
  const { access_token: token } = await requestMaker();
  return token;
}

module.exports = { getToken, makeRequestToMockServer };
