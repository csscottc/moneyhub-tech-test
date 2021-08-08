const { getToken } = require("../getToken");


describe("getToken", () => {
    it("returns a token", async () => {
        const mockRequestResponse =  { "access_token":"thisisafaketoken","scope":"fake_scope","token_type":"Bearer"};
        const mockRequestMaker = () => Promise.resolve(mockRequestResponse);
        const token = await getToken(mockRequestMaker);
    });
});
