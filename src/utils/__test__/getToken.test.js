const { getToken } = require("../getToken");


describe("getToken", () => {
    it("returns correct token value when given a mock request maker", async () => {
        const mockRequestResponse =  { "access_token":"thisisafaketoken","scope":"fake_scope","token_type":"Bearer"};
        const mockRequestMaker = () => Promise.resolve(mockRequestResponse);
        const token = await getToken(mockRequestMaker);
        expect(token).toBe("thisisafaketoken");
    });
});
