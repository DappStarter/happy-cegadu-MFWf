require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture stomach razor outside clutch inside light army giant'; 
let testAccounts = [
"0x4cf9d220ef51843d3ffe998f9c7c6c1cef5671ecd71a70d1b5891e8fc6762aa6",
"0x83988614200a25dfb5c9a5aa4ee8cf642a5dc32e9e1cc517fa4c5ac8361dc260",
"0x0d256687996c6523f7335103b4f6a92e5abe243ff15e4577f87545c3761ab0a0",
"0x8c954244673b1c65bba17b69bb15bbe4710b95e0cbcff4edc171ddd97958f6f1",
"0x474b11949bbfb26e0f4ec907442033fe529b3ac341c931468522a073872b5350",
"0xca430116ac0dbec74f7176a88868d7c5a0da1c75e54e43c6140732ef4b1cce2c",
"0xa9b50ae83c514e4820c6a5823c2cbc1c6e898d3117cb5eab81ce6e4ee18b0389",
"0x9452f81bb06fe20bba899f11f13a3800235b0ef1a3a2aabafd12b6837b50c045",
"0xff20aebcef3ad54a1a2135cb7b791ad790b969fb7dfa06efa3d68fc2c6fa4084",
"0xceea1f76add2ebbf445ed03773b59892d387e55e447d85c08815e5f8974b94ac"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

