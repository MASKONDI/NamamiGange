import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class SmartContract extends Component {
  componentDidMount() {
    //if (this.props.auth.isAuthenticated) {
    // this.props.history.push("/dashboard");
    //}
  }

  render() {
    return (
      <div className="smartcontract">
        <div className="card-body">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-8" styles="margin-top:30px">
                <img
                  src={require("../.././img/sma1.png")}
                  styles="margin-bottom:10px,margin-top:30px"
                  alt="seventh slide"
                />
                <p align="left">
                  A smart contract is a computerized transaction protocol that
                  executes the terms of a contract. The general objectives are
                  to satisfy common contractual conditions.
                </p>

                <p align="left">Ahh! So technical!!</p>

                <p align="left">
                  To make it easier to understand, let’s fast forward to the
                  21st century. Consider a real-life example where you are
                  taking out a bag of potato chips mapped against the trigger
                  number “B6” of a vending machine.
                </p>

                <p align="left">
                  You put a $10 note in a vending machine. This action triggers
                  the next option for you to select a number (like B6) on the
                  vending machine.
                </p>

                <p align="left">And what happens when you select B6?</p>

                <p align="left">
                  A lever in the vending machine moves and pushes out the bag of
                  chips.
                </p>

                <p align="left">
                  A smart contract self-executes the “if-this-then-that”
                  conditions coded onto it in the same way that triggers are
                  implemented in a vending machine.
                </p>

                <p align="left">
                  But why is everyone buzzing about the outdated technology in
                  vending machines?
                </p>

                <p align="left">
                  The buzz is about the smarter contracts that are based on
                  Ethereum technology.
                </p>

                <p align="left">
                  The Ethereum blockchain mechanism coupled with smart contract
                  technology removes intermediaries and escrow services.
                </p>

                <p align="left">
                  Let’s dwell deeper into the concept of smart contracts so that
                  even a non-techie can understand.
                </p>

                <p align="left">
                  But before that, you need to be familiar with Ethereum 101…
                </p>
                <p align="left">Ethereum in a nutshell:</p>
                <ul align="left">
                  <li>
                    <b> Ethereum</b> – A blockchain which records all executed
                    codes as transactions.
                  </li>
                  <li>
                    <b>Ether</b> – The cryptocurrency which fuels the Ethereum
                    blockchain.
                  </li>
                </ul>
                <p align="left">
                  To be even more familiar with Ethereum 101, see our guide on
                  <u>
                    “Ethereum Cryptocurrency: Everything A Beginner Needs To
                    Know”.
                  </u>
                </p>
                <h2 align="left">What is a Smart Contract?</h2>
                <img
                  src={require("../.././img/sma2.png")}
                  styles="margin-bottom:10px,margin-top:30px"
                  alt="seventh slide"
                />

                <p align="left">
                  A smart contract is a piece of software that contains rules
                  and regulations for negotiating the terms of a contract. It
                  automatically verifies the contract and then executes the
                  agreed upon terms.
                </p>
                <p align="left">
                  And when this smart contract’s centralized code is made
                  decentralized for execution purposes on the Ethereum
                  blockchain, it becomes a smarter contract.
                </p>
                <p align="left">
                  Coding and executing smart contracts on the Ethereum
                  blockchain makes them immutable and independent from
                  centralization.
                </p>
                <h4 align="left">
                  Smart Contract’s Characteristics on Ethereum
                </h4>

                <p align="left">
                  A smart contract has the following characteristics:
                </p>
                <ul align="left">
                  <li>Self-executing</li>
                  <li>Immutable</li>
                  <li>Self-verifying</li>
                  <li>Auto-enforcing</li>
                  <li>Cost saving</li>
                  <li>Removes third parties or escrow agents</li>
                </ul>
                <h3 align="left">How Do Smart Contracts Work on Ethereum?</h3>
                <p align="left">
                  Developers write the code of smart contract using the native
                  language of Ethereum called Solidity.
                </p>
                <p align="left">
                  These contract codes can be of many forms, such as the
                  transaction of money when certain conditions are met, or the
                  exchange of goods between parties.
                </p>
                <p align="left">
                  Once the code is written, it is uploaded on the EVM- Ethereum
                  Virtual Machine, which you can say is a universal runtime
                  compiler or browser to execute the smart contract’s code.
                </p>
                <p align="left">
                  Now once the code is on the EVM, it will be same across each
                  Ethereum node.
                </p>
                <p align="left">
                  And each node will try to run and see whether the conditions
                  are met or not.
                </p>
                <p align="left">
                  A contract of Ethereum will involve two or more parties which
                  will be fueled by the digital asset (Ether). Once the contract
                  is executed successfully, the digital asset will be
                  distributed or re-distributed according to the logic defined
                  in the code.
                </p>
                <img
                  src={require("../.././img/sma3.png")}
                  styles="margin-bottom:10px,margin-top:30px"
                  alt="seventh slide"
                />
                <h6 align="left">
                  To make it easier to understand, consider this example:
                </h6>

                <p align="left">
                  Assume that Harry has given a contract of $1000 to Mary for
                  web development. Harry has hardcoded the requirements and
                  conditions about the kind of website he needs onto the
                  Ethereum blockchain.
                </p>
                <p align="left">
                  Now, this blockchain will act as the evaluator whenever Mary
                  submits the website to Harry for approval after the project’s
                  completion. Harry has already pre-coded his requirements (such
                  as load time, server host, design specifics, etc.).
                </p>
                <p align="left">
                  Now, Mary submits the work on the blockchain for evaluation.
                  If the conditions set by Harry are successfully evaluated, and
                  the website is done as per his coding requirements, then the
                  contract worth $1000 will be instantly self-executed, and
                  payment in equivalent Ether (ETH) will be released to Mary.
                </p>
                <p align="left">
                  But let’s suppose Mary didn’t get her payment or Harry didn’t
                  get his work.
                </p>
                <p align="left">
                  Then this conflict of interest is resolved by the blockchain’s
                  smart contract, which enforces trust by default.
                </p>

                <h3 align="left">Why Trust an Ethereum Smart Contract?</h3>
                <p align="left">
                  As every transaction history and history of every executed
                  code is stored on the blockchain, you can trust and verify
                  everything when needed.
                </p>
                <p align="left">
                  Even in the case of Harry’s smart contract, Harry can’t cheat
                  Mary. Because once Mary has done her work, it will be verified
                  by the blockchain and recorded onto it.
                </p>
                <p align="left">
                  Anyone, including Harry, can inspect the blockchain, hence
                  resolving the conflict or protecting against cheating.
                </p>
                <p align="left">
                  Moreover, Harry can’t stop or manipulate this contract as the
                  execution of this contract is no longer dependent on one
                  single party or node. As Harry’s contract is running on an EVM
                  of the Ethereum blockchain, it is resistant to damage caused
                  by a single point of failure.
                </p>
                <p align="left">
                  On the other hand, if these conditions are not met, then Mary
                  will need to continue the work until the appropriate website
                  is created.
                </p>
                <p align="left">
                  That’s why you can trust an Ethereum smart contract.
                </p>
                <h3 align="left">Use Cases of Smart Contracts</h3>
                <img
                  src={require("../.././img/sma4.png")}
                  styles="margin-bottom:10px,margin-top:30px"
                  alt="seventh slide"
                />

                <p align="left">
                  Smart contracts are becoming an integral part of the
                  blockchain economy.
                </p>
                <p align="left">
                  Some current applications of smart contracts:
                </p>
                <ul align="left">
                  <li>
                    <b>Real Estate</b> – A Midasium Contract is a small computer
                    program. It is a digital representation of the mutual
                    agreements as in a traditional real estate contract. This
                    software code self-executes and self-enforced, and it is
                    based on smart contracts.
                  </li>
                  <li>
                    <b>Supply Chain Mangement (Skuchain)</b> – A material’s
                    supply and procurement are typically tracked with paper
                    trails which are mutable. Hence, implementing the supply
                    chain management on blockchain removes the possibility of
                    theft or fraud.
                  </li>
                  <li>
                    <b> Intellectual Property Rights</b> – Musicians, writers,
                    and artists can put their creativity on the blockchain and
                    can control ownership of their work. Smart contracts like
                    this enable the creator to collect royalties and payments
                    directly without any third parties involved.
                  </li>
                </ul>

                <h3 align="left">What is the Future of Smart Contracts?</h3>
                <p align="left">
                  Bitcoin is merely the first application on the blockchain
                  backed by the internet.
                </p>
                <p align="left">
                  But Ethereum and smart contracts are the next-gen applications
                  on the blockchain.
                </p>
                <p align="left">
                  And I think Ethereum smart contracts also answer the question
                  of “why do you need Ethereum when you have Bitcoin?”
                </p>
                <p align="left">
                  Just like the invention of the internet has transformed human
                  life, the Ethereum blockchain and smart contracts have the
                  power to change human life in incredible ways.
                </p>
                <ul align="left">
                  <li>Why incredible?</li>
                </ul>
                <p align="left">
                  Because the marathon has just started; Ethereum is only 3
                  years old, and many scholars are pursuing a lot of research on
                  it.
                </p>
                <p align="left">
                  The floodgates of unparalleled innovation have been opened
                  with the establishment of The Enterprise Ethereum Alliance.
                </p>

                <p align="left">
                  The Enterprise Ethereum Alliance connects Fortune 500
                  enterprises (like{" "}
                  <b>Accenture, Microsoft, Intel, JP Morgan, Wipro, </b>
                  etc.), startups, and academics with Ethereum subject matter
                  experts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SmartContract.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(SmartContract);
