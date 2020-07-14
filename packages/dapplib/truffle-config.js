require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture cart forget security trap birth soccer purchase install clock blue struggle'; 
let testAccounts = [
"0x6e2ae28fb79fdfa1b2b0253311662c197e280c83b4ebf05e812bf6f1c2a16a31",
"0x38f4cc3d9c1b5a3666643faf98aa0cf1d04db6771bbee2a1d75ad35e3e73002f",
"0x93f82d6aa330b9855abdb8a7c6ba32e3fb7d91b9bf0d9c4629f38e31100801bf",
"0x86d6a55c3a44b88275a5484dbd0b6339c20ddc0c2066437bbbf12db9ca97d3da",
"0x27bd4b0c0ac863b57c940dcc381d1eb9e844a2669e4587a180c4cd1c0cf135a6",
"0x4176afe89704ae896803030f5f400185a61082ac7fc86bf745e89e3110dbb34d",
"0x16262c21d20f17bb5a755be4f53e55e68188be35ce72a0ae8e486d7607697009",
"0x19a67e4179f086b4d558e8427ae7c54cda16010b41f7aafa4caf5362aafbdd82",
"0x4c957cbc5b3110ae9fb2598514c9106aa3f8d0c6d71cadd08b2300c6d28eaebe",
"0x8f16f67d28318e6ade454d972c7d73197ddfae038640126dbddd86b527458e84"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
