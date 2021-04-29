const {d} = require('./design.js')    //importing d array from design.js file

const Web3 = require('web3')          //import web js library
const web3 = new Web3('LINK TO ETH NODE') //new web3 instance

const account1 = '0x ...'   //public keys for 2 test accounts
const account2 = '0x ...'   //the accounts are not important for now, only test version
const privateKey1 = ('...') //test account private key

const IPFS = require('ipfs-http-client')      //import ipfs http client library
const { globSource } = IPFS                   //globSource instance of IPFS lib
const ipfs = IPFS()                           //instantion of ipfs lib

global.content          //global variable used to store ipfs hash

ipfs.add(globSource('test.txt', {recursive: true})).then((result) => {          //callback f(x) used to add file to ipfs via local daemon
    console.log('\n' + d.title + '\n' + d.subtitle + '\n\n' + d.line + '\n\n') //prints out fancy intro

    console.log("Content Hash\t" + result.cid)      //prints content id (hash)
    console.log("File Path\t" + result.path + '\n') //prints file path
    content = result.cid.toString()                 //cid = content id, returned from ipfs.add function
    content = web3.utils.toHex(content)             //hex value needed for valid ETH transaction, also extra layer of security
    console.log(d.line + '\n\n')
    console.log("Content Hex\t" + content + '\n\n' + d.line + '\n\n')   //prints content hex
    transaction()              //ipfs f(x) must run first, content is needed in order to complete transaction
  })

  /*web3.eth.getBalance(account1).then((result) => {      //callback f(x), simply prints sending accounts ETH balance
    const balance = web3.utils.fromWei(result, 'ether') //converts the balance to ether, 18 decimal precision
    console.log('Ether balance:\t' + balance)
  })*/

const transaction = async () => {
  const balance = await web3.eth.getBalance(account1) //await valid inside async function

  if(balance >= 0.02){      //ensure enough ETH in wallet to send tx
    const createTransaction = await web3.eth.accounts.signTransaction({
      from: account1,   //from account1 above
      to: account2,     //to second account, above ... only public address needed no private key
      value: web3.utils.toWei('0.001', 'ether'),   //sends 0.001 ETH to address 2 also, not needed but included
  		gas: web3.utils.toHex(200000),               //hex value for 200,000 gas
      data: content,                                //from above, ipfs hash turned into hex value, necessary for transaction
  	  },
      privateKey1         //private key for account 1 needed to sign transaction
    );
      const receipt = await web3.eth.sendSignedTransaction(createTransaction.rawTransaction); //sends transaction using above info
      console.log('Successful Tx with hash:\t' + receipt.transactionHash + '\n\n' + d.line + '\n\n');
      console.log("copy and paste line below into web browser to verify transaction:")
      console.log("https://ropsten.etherscan.io/tx/" + receipt.transactionHash)   //link to Ethereum Block Explorer
      console.log(d.end)
  }
    //note: on the above webpage, you can see all account balances, transactions, timestamps and data etc. on the ETH blockchain

    //The transaction on etherscan should have same to and from addresses as above
    //also same data as content hex above, scroll down the page to see data tab
    else{
      console.log("Not enough ETH to send transaction.")
    }
  }
