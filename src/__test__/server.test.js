const app = require("../server");
const request = require("supertest");

describe("API", () => {
    describe("/docs", () => {
        it("Returns a HTTP 301 response (for some reason)", async () => {
            const response = await request(app).get("/docs");
            expect(response.statusCode).toBe(301);
        });
    });

    describe("/users/{userId}/transactions", () => {
        it("Returns a HTTP 200 response", async () => {
            const response = await request(app).get("/users/12345/transactions");
            expect(response.statusCode).toBe(200);
        });
    });
});
