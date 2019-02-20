const Matic = require('../../lib/index').default
const config = require('./config')

const token = config.TEST_TOKEN // test token address
const amount = '200000000000000000' // amount in wei
const from = config.FROM_ADDRESS // from address

// Create object of Matic
const matic = new Matic({
  maticProvider: config.MATIC_PROVIDER,
  parentProvider: config.PARENT_PROVIDER,
  rootChainAddress: config.ROOTCHAIN_ADDRESS,
  syncerUrl: config.SYNCER_URL,
  watcherUrl: config.WATCHER_URL,
  withdrawManagerAddress: config.WITHDRAWMANAGER_ADDRESS,
})

matic.wallet = config.PRIVATE_KEY // prefix with `0x`

var transactionHash =
  '0xa97edd9637c6b4c4f4b99bba926bff662054d1b036bdb0aa0de71547cf930b38'

// matic.startWithdraw(token, amount, {
//   from,
//   onTransactionHash: txHash => {
//     transactionHash = txHash
//     console.log(txHash)
//   },
// })
// .then(() => {
//   //wait till checkpoint is submitted, then only procced
matic.withdraw(transactionHash, {
  from,
  onTransactionHash: tx => {
    // action on Transaction success
    console.log(tx)
  },
})
// })
