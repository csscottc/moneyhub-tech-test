const app = require("../server");
const request = require("supertest");

describe("API", () => {
    describe("/docs", () => {
        it("Returns a HTTP 301 response (for some reason)", async () => {
            const response = await request(app).get("/docs");
            expect(response.statusCode).toBe(301);
        });
    });
});
