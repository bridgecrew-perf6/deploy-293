/**
 *  This array contains the addresses of the whitelisted users.
 *  Make sure to add your white-listed users to this array. Otherwise,
 *  they will not be able to interact with the contract and mint on pre-sale process. For the public sale,
 *  the whitelist is not required.
 *
 *  ** IMPORTANT: **
 *  Since we are passing the whitelist root (merkleroot) to the contract constructor when deploying,
 *  if you add a new user address to the whitelist or remove an existing user address from the whitelist,
 *  you must change the merkleroot in the contract. For this reason, I created a new script to update the merkleroot
 *  in the contract. You can find it in `scripts/setMerkleRoot.js`.
 */

module.exports = [
  '0x5a95CD871c8ded8e472aEC5F00aB84e59a0177b3',
  '0x7151aAFb49D075397eC1F0510f44987d7511807f'
]
