import { ethers } from "hardhat";

async function main() {
  const StudentSocietyDAO = await ethers.getContractFactory("StudentSocietyDAO");
  const studentSocietyDAO = await StudentSocietyDAO.deploy();
  await studentSocietyDAO.deployed();

  console.log(`StudentSocietyDAO deployed to ${studentSocietyDAO.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
