import React , { useEffect, useState }from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";

import "./App.css";

function App(){

  const [isLoading, setIsLoading] = useState(true);
  const [loadedValue, setLoadedValue] = useState();
  
  let storageValue = 0;
  let updateValue = 0;
  let accounts = null;
  let contract = null;

  async function setup() {
    try {
      const web3 = await getWeb3();

      accounts = await web3.eth.getAccounts();

      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      contract = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      await contract.methods.set(updateValue).send({ from: accounts[0] });      //set default value to 0

      storageValue = await contract.methods.get().call();           //return default value
      console.log("storage: ", storageValue);
      return storageValue

    } catch (error) {
      console.error(error);
    }
  };

  //useEffect(() => {
    //setIsLoading(true);

  setup().then(data => {
    setLoadedValue(data);
    console.log(data);
    setIsLoading(false);
  })
  
    //setIsLoading(false);
  //}, []);

  const updateHandler = event => {
    updateValue = event.target.value;
    console.log("Update: ", updateValue);
  }

  function loadData(){
    setup().then(data => {
      setLoadedValue(data);
      console.log("Button clicked: ",data);
      setIsLoading(false);
    })
  }

  /*async function update(){
    setIsLoading(true);
    await contract.methods.set(updateValue).send({ from: accounts[0] });      //set default value to 0

    storageValue = await contract.methods.get().call();
    setLoadedValue(storageValue);
    setIsLoading(false);
  }*/

  if (isLoading) {
    return <div>Loading Web3, accounts, and contract...</div>;
  }
  return (
    <div className="App">
      <h1>First Full Stack Truffle App</h1>
      <div>
        <p>Enter a number into the box below and hit submit!</p>
      </div>
      <div className="value">The stored value is:  {loadedValue}</div>
      <div>
        <input className="input" onChange={updateHandler} placeholder="Enter Number"/>
        <button className="button button1" onClick={loadData}>Submit</button>
      </div>
    </div>
  );
}

export default App;
