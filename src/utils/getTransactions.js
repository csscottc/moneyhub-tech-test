// Having this token in code is a bad idea.
const requestOptions = {
  hostname: "obmockaspsp.moneyhub.co.uk",
  port: 443,
  path: "/api/token?=",
  method: "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": Buffer.byteLength(postData),
  },
};
