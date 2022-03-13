const TestContract = artifacts.require('./TestContract.sol')

contract('TestContract', (accounts) => {
  before(async () => {
    this.testContract = await TestContract.deployed()
  })

  /*  To make sure the contract is deployed to the blockchain and it has an address  */
  it('deploys successfully', async () => {
    const address = await this.testContract.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
  })

  it('creates tasks', async () => {
     const result = await this.TestContract.addtask()

  })

  it('Number of tasks', async () => {
     const taskCount = await this.testContract.rendertask()
     assert.equal(taskCount.toNumber(), 1)
  })

})
