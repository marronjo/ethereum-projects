const SimpleStorage = artifacts.require("SimpleStorage");

require('chai')
    .use(require('chai-as-promised'))
	.should()


contract("SimpleStorage", async accounts => {

    let simpleStorage

    before(async() => {
        simpleStorage = await SimpleStorage.new();

        await simpleStorage.set(6)

    })

    describe('correct storage in contract', async () => {
    it('stored correctly', async () => {
        const data = await simpleStorage.getData()
        assert.equal(data, 6)
    })
	
    })
})