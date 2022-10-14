import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Test", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const StudentSocietyDAO = await ethers.getContractFactory("StudentSocietyDAO");
    const studentSocietyDAO = await StudentSocietyDAO.deploy();

    return { studentSocietyDAO, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should return hello world", async function () {
      const { studentSocietyDAO } = await loadFixture(deployFixture);
      expect(await studentSocietyDAO.helloworld()).to.equal("hello world");
    });
  });
});
