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

module.exports = makeRequest;
