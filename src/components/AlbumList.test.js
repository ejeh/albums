const AlbumList = require("./AlbumList")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new AlbumList.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})