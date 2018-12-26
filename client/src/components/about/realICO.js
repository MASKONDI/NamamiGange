import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class RealICO extends Component {
  componentDidMount() {
    //if (this.props.auth.isAuthenticated) {
    // this.props.history.push("/dashboard");
    //}
  }

  render() {
    return (
      <div className="realICO">
        <div className="card-body">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-8" styles="margin-top:30px">
                <h2 align="left">What is an ERC-20 Token?</h2>
                <p align="justify" styles="font-size:14px">
                  The Ethereum blockchain allows you to create your own
                  cryptocurrency, or token, that can be purchased with Ether,
                  the native cryptocurrency of the Ethereum blockchain. ERC-20
                  is simply a standard that specifies how these tokens behave,
                  so that they are compatible with other platforms like
                  cryptocurrency exchanges.
                </p>
                <p align="justify" styles="font-size:14px">
                  Ethereum is a blockchain like Bitcoin. Like Bitcoin, Ethereum
                  keeps track of account balances for people who own Ether,
                  Ethereum’s native cryptocurrency. Unlike Bitcoin, Ethereum is
                  also a platform that allows you to create your own token
                  without creating a new blockchain.
                </p>
                <p align="left">
                  You can create an Ethereum token with a smart contract. ERC-20
                  is a standard that specifies how this token smart contract
                  should work.
                </p>
                <p align="left">
                  Let’s use an example to understand how an ERC-20 token smart
                  contract works. Let’s say that we want to create a token
                  called “My Token” with the symbol “MTK” and that there will be
                  100,000,000 of these tokens in existence.
                </p>
                <img
                  src={require("../.././img/erc_20_token_example.png")}
                  styles="margin-bottom:10px"
                  alt="seventh slide"
                />
                <p align="left">
                  First, the token smart contract keeps track of some basic
                  token attributes. For example it records the name “My Token",
                  the symbol that you see on a cryptocurrency exchange, and how
                  many total tokens exist.
                </p>
                <p align="left">
                  It also keeps track of who owns “My Token” and how much
                </p>
                <p align="left">
                  ERC-20 tokens can be transferred from one account to another
                  as payment, just like any other cryptocurrency.
                </p>
                <p align="left">
                  They can also be purchased in a crowd sale, like an ICO, which
                  we will examine in the next section.
                </p>
                <p align="left">
                  They can also be bought and sold on a cryptocurrency exchange
                </p>
                <h3 align="left">How a Crowd Sale (ICO) Works </h3>
                <p align="justify" styles="font-size:14px">
                  ERC-20 tokens can be distributed in a variety of ways. One
                  popular method is holding a crowd sale, or an initial coin
                  offering (ICO). Crowd sales are a way for a company to raise
                  capital for their business by creating their own ERC-20 token
                  that can be purchased by investors with Ether.
                </p>
                <p align="left">
                  Whenever a crowd sale takes place, the company gets liquid
                  capital in the form of Ether that was paid by the investors,
                  as well as holding onto a reserved amount of the ERC-20 tokens
                  that were sold in the crowd sale.
                </p>
                <p align="left">
                  In order to participate in a crowd sale, an investor must
                  connect to the Etherum Blockchain with an account. This
                  account has a wallet address that can store Ether, as well as
                  the ERC-20 tokens that are purchased in the crowd sale.
                </p>
                <p align="left">
                  The investor must visit a crowd sale website that talks to a
                  smart contract. The smart contract governs all of the rules
                  for how the crowd sale works.
                </p>
                <p align="left">
                  Whenever an investor purchases tokens on the crowd sale
                  website, they send Ether from their wallet to the smart
                  contract, and the smart contract instantly dispenses the
                  purchased tokens to their wallet
                </p>
                <p align="left">
                  The smart contract sets the price of the token in the crowd
                  sale and governs how the crowd sale behaves
                </p>
                <p align="left">
                  Crowd sales can take on all kinds of shapes and sizes. They
                  can have multiple tiers or phases, like Pre ICO, ICO, and ICO
                  Bonus phase. Each of these tiers can happen at different
                  points of time and can behave differently
                </p>
                <p align="left">
                  They can also have white lists to restrict which investors can
                  purchase tokens
                </p>
                <p align="left">
                  They can also have a reserved amount of tokens that are not
                  sold in the crowd sale. These reserves are usually set aside
                  for specific members of each company like founders and
                  advisors. These reserves can be a fixed amount of tokens or a
                  percentage
                </p>
                <p align="left">
                  Whenever a crowd sale ends, it can be finalized by an
                  administrator. Whenever this happens, all of the reserved
                  tokens will be distributed to the appropriate accounts and the
                  crowd sale will officially be over.
                </p>
                <h3 align=" left" styles="color:red">
                  How a ERC-20 work{" "}
                </h3>
                <p align="left">
                  As I explained earlier, ERC-20 tokens are created with
                  Ethereum smart contracts. So what is a smart contract?
                </p>
                <p align="left">
                  Ethereum allows developers to write applications that run on
                  the blockchain with smart contracts, which encapsulate all of
                  the business logic of these applications. They enable us to
                  read and write data to the blockchain, as well as execute
                  code. Smart contacts are written in a programming language
                  called Solidity, which looks a lot like Javascript. It is a
                  full blown programming language that will allow us to do many
                  of the same types of things Javascript is capable of, but it
                  behaves a bit differently because of its use case.
                </p>
                <p align="left">
                  In the case of an ERC-20 token, the smart contract governs all
                  of the behavior about how the token works, and keeps track of
                  token ownership and account balances
                </p>
                <p align="left">
                  ERC-20 is an API specification for how Ethereum tokens should
                  be built. It is a community adopted standard that allows
                  tokens to be supported in a variety of use cases. We want to
                  build a token that is compliant with this standard so that it
                  can be widely accepted. If we did not have a standard like
                  this, we could have endless ways to create tokens, and they
                  might not be compatible with one another!
                </p>
                <p align="left">
                  Using the ERC-20 standard ensures that a token is compliant
                  for the following use cases (and more):
                  <ul>
                    <li>
                      Wallet transfers - sending tokens from one account to
                      another
                    </li>
                    <li>Buying and selling on cryptocurrency exchanges</li>
                    <li>Purchasing tokens in an crowd sale (ICO)</li>
                  </ul>
                </p>
                <p align="left">
                  The ERC-20 specification essentially dictates the interface
                  that the smart contract must respond to. It specifies the
                  structure of the smart contract and types of functions that
                  the smart contract must have. It also provides some suggested
                  functions that are nice to have, but ultimately optional. It
                  dictates certain events that our token must have, like a
                  transfer event. See, smart contracts can emit events that
                  consumers can subscribe to, and with this standard, we can
                  subscribe to events that tell us when tokens are sold.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RealICO.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(RealICO);
