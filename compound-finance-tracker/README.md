Basic Interest Rate Tracker for Compound Finance using web3 and infura.

The given exchange rates are only estimates, they are not perfect and should not be relied on for precision.

Files:

Comp.js - contains the meat and gravy of the project, it contacts the compound finance protocol and prints out the borrow/supply interest rates for each token.

Var.js - contains the contract addresses, contract abi's and infura link objects. These are called in the comp.js file. It is not necessary to use the data.infura link object, 
you can simply uncomment line 5 of the comp.js script and type in your own infura link there instead. If you choose to use the imported infura link object, all that is needed is
... scroll to the bottom of the var.js file and find the commented 'infura: ...' line and paste in your own link and uncomment the line.

This is my first interaction with the ethereum blockchain from a programming point of view, more improvemnts will be made over time to this :)

JM
  