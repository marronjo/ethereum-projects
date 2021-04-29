Digital Identity Platform : Group 2 : Computer Networks

= = = = = README.txt = = = = =

Dependencies:

JAVASCRIPT:
      1 Node js - https://nodejs.org/en/download/

        You may need to add node to path in order to run in command line.
        Difficult to explain by text, here is a short video, hope it helps.
        https://www.youtube.com/watch?v=hiVKXJ2hAdo

      2 Web3.js library - 'npm install web3' or 'yarn add web3' in terminal

        this uses npm, which should be included in nodejs download, or use yarn if you prefer

      3 ipfs-http-client library - 'npm install ipfs-http-client' in terminal



IPFS:
      4 Go-ipfs - https://github.com/ipfs/go-ipfs/releases
      scroll down until go-ipfs_v0.8.0_windows-amd64.zip download this one if you are on windows

      any problems ... https://docs.ipfs.io/reference/go/api/#working-with-go

      unzip it and go to the file location in command line/terminal
      type - '.\install.sh' to install on windows, uses bash to run this command I think. Or else just click on install file
      then type - 'ipfs init' to initialize the ipfs folder

Please note, some commands may be slightly different on mac, I am using windows so I cannot give 100% clear mac instructions apologies.

Instructions:

1.Download the included code files on Desktop.
2.Navigate to go-ipfs folder in terminal and type 'ipfs daemon', this will start a local gateway to IPFS.
3.Once daemon has begun, navigate to Desktop where the other files are (design.js, tx.js, identity.txt).
4.Type 'node tx' in terminal. This will run file and print outputs to terminal.
5.If you wish to see results logged into a text file type  'node tx > C:\output.txt' on windows cmd, nothing will appear in terminal unless error.
6.Copy and paste link into web browser to verify transaction has been processed.
7.Scroll to bottom of webpage and click 'Click to see more', verify that Input Data = content hex printed to terminal.
8.Finsihed

p.s. apologies if this is a very long README, hopefully it helped to get everything up and running. 
