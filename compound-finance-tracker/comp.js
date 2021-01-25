const {data} = require('./var.js')

const Web3 = require('web3')
const web3 = new Web3(data.infura) //importing infura link from var.js file
//const Web3 = new Web3('Insert Infura Link Here!!!')  

var contractIndex = [] //empty array to store contracts in

for(let i = 0; i < data.abi.length; i ++){
    contractIndex.push(new web3.eth.Contract(data.abi[i], data.address[i])) //fetching contract using imported data from var.js
}

for(let i = 0; i < contractIndex.length; i++){                         //loops from 0 -> 8
    contractIndex[i].methods.borrowRatePerBlock().call((error0, borrow) => {    //finds token borrow rate per block
        contractIndex[i].methods.name().call((error1, name) => {         //finds token name
            contractIndex[i].methods.supplyRatePerBlock().call((error2, supply) => {  //finds token supply rate
                if(name == "Compound Collateral"){
                    name = name.slice(0, 8)                             //name is just compound [0:8]
                }
                else{
                    name = name.slice(9, name.length)               //"Compound " appears before every token and including space is 10 in length [0:9]
                }           
                var supplyDecimal = (100 * 365 * 4 * 60 * 24 * supply / 1e18) //4 blocks/min, 60/hr, 24/day, 365/year, 100/%
                var borrowDecimal = (100 * 365 * 4 * 60 * 24 * borrow / 1e18)
                console.log(name + " supply rate :  " + supplyDecimal.toFixed(2) + "%")      //Gives APY estimate to 2 d.p.
                console.log(name + " borrow rate :  " + borrowDecimal.toFixed(2) + "%\n")
            })
        })
    })
}