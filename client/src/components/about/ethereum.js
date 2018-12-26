import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Ethereum extends Component {
  componentDidMount() {
    //if (this.props.auth.isAuthenticated) {
    // this.props.history.push("/dashboard");
    //}
  }

  render() {
    return (
      <div className="ethereum">
        <div className="card-body">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-8" styles="margin-top:30px">
                <h2 styles={"color:red"}>What is a Blockchain?</h2>
                <p align="justify" styles="font-size:14px">
                  Let’s use an analogy to understand what a blockchain is and
                  how it works. Let’s look at a web application.
                </p>
                <img
                  src={require("../.././img/web_application_diagram.png")}
                  styles="margin-bottom:10px,margin-top:30px"
                  alt="seventh slide"
                />
                <p align="left" styles="font-size:14px">
                  Web Application Diagram Normally when you interact with a web
                  application, you use a web browser to connect to a central
                  server over a network. All the code of this web application
                  lives on this central server, and all the data lives in a
                  central database. Anytime you transact with your application,
                  must communicate with this central server on the web.
                </p>
                <p align="justify" styles="font-size:14px">
                  {" "}
                  If we were to build our voting application on the web, we’d
                  run into a few problems:
                  <ol>
                    <li>
                      The data on the database could be changed: it could be
                      counted more than once, or removed entirely.
                    </li>
                    <li>
                      The source code on the web server could also be changed at
                      any time.
                    </li>
                  </ol>
                </p>
                <p align="justify" styles="font-size:14px">
                  We don’t want to build our app on the web. We want to build it
                  on the blockchain where anyone connected to the network can
                  participate in the election. We want to ensure that their
                  participates are counted, and that they are only counted once.
                  So let’s take a look at how that works.{" "}
                </p>
                <p align="justify" styles="font-size:14px">
                  Instead of having a network, a central server, and a database,
                  the blockchain is a network and a database all in one. A
                  blockchain is a peer-to-peer network of computers, called
                  nodes, that share all the data and the code in the network.
                  So, if you’re a device connected to the blockchain, you are a
                  node in the network, and you talk to all the other computer
                  nodes in the network. You now have a copy of all the data and
                  the code on the blockchain. There are no more central servers.
                  Just a bunch of computers that talk to one another on the same
                  network.
                </p>
                <img
                  src={require("../.././img/ethereum_blockchain_nodes_diagram.png")}
                  styles="margin-bottom:10px,margin-top:30px"
                  alt="seventh slide"
                />

                <p align=" justify" styles="font-size:14px margin-top:20px">
                  Instead of a centralized database, all the transaction data
                  that is shared across the nodes in the blockchain is contained
                  in bundles of records called blocks, which are chained
                  together to create the public ledger. This public ledger
                  represents all the data in the blockchain. All the data in the
                  public ledger is secured by cryptographic hashing, and
                  validated by a consensus algorithm. Nodes on the network
                  participate to ensure that all copies of the data distributed
                  across the network are the same. That’s one very important
                  reason why we’re building our voting application on the
                  blockchain, because we want to ensure that our participate was
                  counted.
                </p>
                <p align=" justify" styles="font-size:14px">
                  What would it look like for a user of our application to
                  participate on the blockchain? Well, for starters, the user
                  needs an account with a wallet address with some Ether,
                  Ethereum's cryptocurrency. Once they connect to the network,
                  they cast their participate and pay a small transaction fee to
                  write this transaction to the blockchain. This transaction fee
                  is called “gas”. Whenever the participate is cast, some of the
                  nodes on the network, called miners, compete to complete this
                  transaction. The miner who completes this transaction is
                  awarded the Ether that we paid to participate.
                </p>
                <p align=" justify" styles="font-size:14px">
                  {" "}
                  As a recap, when I participate, I pay a gas price to
                  participate, and when my participate gets recorded, one of the
                  computers on the network gets paid the my Ether fee. I in turn
                  am confident my participate was recorded accurately forever.{" "}
                </p>
                <h3 align="left">The ethereum blockchain</h3>
                <p align="left">
                  The structure of the ethereum blockchain is very similar to
                  bitcoin’s, in that it is a shared record of the entire
                  transaction history. Every node on the network stores a copy
                  of this history
                </p>
                <p align="left">
                  The big difference with ethereum is that its nodes store the
                  most recent state of each smart contract, in addition to all
                  of the ether transactions. (This is much more complicated than
                  described, but the text below should help you get your feet
                  wet.)
                </p>
                <p align="left">
                  For each ethereum application, the network needs to keep track
                  of the ‘state’, or the current information of all of these
                  applications, including each user’s balance, all the smart
                  contract code and where it’s all stored.
                </p>
                <p align="left">
                  Bitcoin uses unspent transaction outputs to track who has how
                  much bitcoin.
                </p>
                <p align="left">
                  While it sounds more complex, the idea is fairly simple. Every
                  time a bitcoin transaction is made, the network ‘breaks’ the
                  total amount as if it was paper money, issuing back bitcoins
                  in a way that makes the data behave similarly to physical
                  coins or change
                </p>
                <p align="left">
                  To make future transactions, the bitcoin network must add up
                  all your pieces of change, which are classed as either ‘spent’
                  or ‘unspent’
                </p>
                <p align="left">Ethereum, on the other hand, uses accounts.</p>
                <p align="left">
                  Like bank account funds, ether tokens appear in a wallet, and
                  can be ported (so to speak) to another account. Funds are
                  always somewhere, yet don’t have what you might call a
                  continued relationship.
                </p>
                <img
                  src={require("../.././img/eth1.png")}
                  styles="margin-bottom:10px,margin-top:30px"
                  alt="seventh slide"
                />
                <h3 align="left">What is the ethereum virtual machine?</h3>
                <p align="left">
                  With ethereum, every time a program is used, a network of
                  thousands of computers processes it.
                </p>
                <p align="left">
                  Contracts written in a smart contract-specific programming
                  languages are compiled into ‘bytecode’, which a feature called
                  the ‘ethereum virtual machine’ (EVM) can read and execute.
                </p>
                <p align="left">
                  All the nodes execute this contract using their EVMs.
                </p>
                <img
                  src={require("../.././img/eth2.png")}
                  styles="margin-bottom:10px,margin-top:30px"
                  alt="seventh slide"
                />
                <p align="left">
                  Remember that every node in the network holds a copy of the
                  transaction and smart contract history of the network, in
                  addition to keeping track of the current ‘state’. Every time a
                  user performs some action, all of the nodes on the network
                  need to come to agreement that this change took place.
                </p>

                <p align="left">
                  The goal here is for the network of miners and nodes to take
                  responsibility for transferring the shift from state to state,
                  rather than some authority such as PayPal or a bank. Bitcoin
                  miners validate the shift of ownership of bitcoins from one
                  person to another. The EVM executes a contract with whatever
                  rules the developer initially programmed.
                </p>
                <p align="left">
                  Actual computation on the EVM is achieved through a
                  stack-based bytecode language (the ones and zeroes that a
                  machine can read), but developers can write smart contracts in
                  high-level languages such as Solidity and Serpent that are
                  easier for humans to read and write.
                </p>
                <p align="left">
                  As explained in our guide “How Ethereum Mining Works“, miners
                  are the ones that are preventing bad behavior – like ensuring
                  that no one is spending their money more than once and
                  rejecting smart contracts that haven’t been paid for.
                </p>
                <p align="left">
                  There are a few thousand ethereum nodes out there, and every
                  node is compiling and executing the same code.
                </p>
                <p align="left">
                  But, you might be thinking, isn’t that much more expensive
                  than a normal computation? Yes, it is. That’s why the network
                  might only be used only for particular use cases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Ethereum.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Ethereum);
