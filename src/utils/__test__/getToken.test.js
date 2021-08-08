const { getToken, makeRequestToMockServer } = require("../getToken");


describe("getToken", () => {
    it("returns correct token value when given a mock request maker", async () => {
        const mockRequestResponse =  { "access_token":"thisisafaketoken","scope":"fake_scope","token_type":"Bearer"};
        const mockRequestMaker = () => Promise.resolve(mockRequestResponse);
        const token = await getToken(mockRequestMaker);
        expect(token).toBe("thisisafaketoken");
    });

    // This is more of an integration test, and its not particularly great
    it("gets a token when using a real requestMaker", async () => {
        const token = await getToken(makeRequestToMockServer);
        expect(typeof token).toBe("string");
    });
});
