import { assert } from "chai";
import { artifacts, contract } from "truffle";

const SimpleContract = artifacts.require("SimpleContract");

contract("SimpleContract", () => {
  it("should set the number", async () => {
    const instance = await SimpleContract.deployed();
    await instance.set(42);
    const storedNumber = await instance.number();
    assert.equal(
      storedNumber.toNumber(),
      42,
      "The number was not stored correctly"
    );
  });
});
