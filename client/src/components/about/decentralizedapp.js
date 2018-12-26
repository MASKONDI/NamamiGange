import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class DecentralizedApp extends Component {
  componentDidMount() {
    //if (this.props.auth.isAuthenticated) {
    // this.props.history.push("/dashboard");
    //}
  }

  render() {
    return (
      <div className="dapp">
        <div className="card-body">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-8" styles="margin-top:30px">
                <img
                  src={require("../.././img/dapp1.png")}
                  styles="margin-bottom:10px"
                  alt="seventh slide"
                />
                <h3 align="left">Decentralized Application</h3>
                <p align="left">
                  A new breed of applications is being discussed across the
                  world. These types of applications are not owned by anyone,
                  can’t be shut down, and cannot have downtime.
                </p>
                <p align="left">Does this sound crazy?</p>
                <p align="left">
                  Such new breeds of applications are named DApps (Decentralized
                  Applications).
                </p>
                <p align="left">
                  But before we discuss DApps, let’s talk about the technology
                  underlying DApps, which is called a “blockchain“.
                </p>
                <p align="left">
                  Bitcoin – the first cryptocurrency – introduced blockchain
                  technology to the world. Bitcoin’s blockchain is a globally
                  distributed ledger which records transactions and is secured
                  cryptographically via a robust consensus mechanism.
                </p>
                <p align="left">
                  But digital currency like Bitcoin, which has decentralized all
                  aspects of money, is only one example of a DApp.
                </p>
                <p align="left">
                  Similarly, other DApps built on blockchain technology have
                  opened up the possibility of a newer and more exciting world.
                </p>
                <p align="left">
                  You might be thinking about what this new world is all about…
                </p>
                <p align="left">
                  Well, this new world is about making everything as
                  decentralized as Bitcoin’s blockchain did for money.
                </p>
                <h3 align="left">What are DApps?</h3>
                <img
                  src={require("../.././img/DApp2.png")}
                  styles="margin-bottom:10px"
                  alt="seventh slide"
                />
                <p align="left">
                  DApps is pronounced in the same way that Email is, where the
                  ‘D’ in DApps means decentralized (i.e. D-Apps).
                </p>
                <p align="left">
                  It is difficult to summarize DApps in a 1-2 line definition,
                  as an application needs to have a specific set of
                  characteristics in order to qualify as a DApp.
                </p>
                <p align="left">
                  If an app doesn’t meet all of these criteria, then it is not a
                  DApp:
                </p>
                <ol align="left">
                  <li>
                    <b>Open Source</b> – Source code of app is available to all.
                  </li>
                  <li>
                    <b>Decentralized</b> – Uses a blockchain-like cryptographic
                    technology.
                  </li>
                  <li>
                    <b>Incentive</b> – App has crypto-tokens/digital assets for
                    fueling itself.
                  </li>
                  <li>
                    <b>Algorithm/Protocol</b> – Generates tokens and has an
                    inbuilt consensus mechanism.
                  </li>
                </ol>
                <h3 align="left">DApps Classification</h3>
                <p align="left">
                  Based on which blockchain model these DApps use, they are
                  classified into three categories:
                </p>
                <table width="600" border="1">
                  <tbody>
                    <tr>
                      <td styles="text-align:center" width="271">
                        <b>Type I</b>
                      </td>
                      <td styles="text-align:center" width="219">
                        <b>Type II</b>
                      </td>
                      <td styles="text-align:center" width="294">
                        <b>Type III</b>
                      </td>
                    </tr>
                    <tr>
                      <td width="271">
                        "These types of Dapps have their own blockchain(like{" "}
                        <b>"Bitcoin"</b>)."
                        <p>
                          Other altcoins also fall under this category as well.
                        </p>
                      </td>
                      <td width="219">
                        "These types of Dapps use the blockchain og Type I
                        Dapps"<p>&nbsp;</p>
                        <p>
                          Type II decentralized applications are protocols and
                          have tokens that are necessary for their function.
                        </p>
                        <p>
                          The &nbsp; Omni Protocol &nbsp; is an example of Type
                          II decentralized application.
                        </p>
                      </td>
                      <td width="294">
                        "These types of Dapps use the protocol of a Type II
                        DApp."
                        <p>
                          "for example, the SAFE network uses the Omni Protocol
                          for issuing SafeCoins that are then to build
                          distributed file storage."
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <p align="left">
                  Now that you know the different classifications, you might
                  start realizing that many of the crypto-projects that out now
                  fall under one of these classifications.
                </p>
                <p align="left">And you are absolutely correct to think so!!</p>
                <h4 align="left">DApps Projects</h4>

                <p align="left">
                  As you probably know, the world’s two biggest blockchain
                  platforms at present are Bitcoin and Ethereum. Several current
                  apps are built on top of these chains.
                </p>
                <p align="left">
                  On the other hand, some apps choose to build their own
                  blockchain.
                </p>
                <p align="left">
                  Here’s a list of some DApps and what “type” they are:
                </p>
                <table styles="height:982px;" width="624" border="1">
                  <tbody>
                    <tr>
                      <td styles="text-align:center;" width="95">
                        <b>DApps in Action</b>
                      </td>
                      <td styles="text-align:center;" width="126">
                        <b>Description</b>
                      </td>
                      <td styles="text-align:center;" width="209">
                        <b>Type of DApp</b>
                      </td>
                      <td styles="text-align:center;" width="123">
                        <b>Token</b>
                      </td>
                      <td styles="text-align:center;" width="145">
                        <b>Blockchain</b>
                      </td>
                    </tr>
                    <tr>
                      <td styles="text-align:center;" width="95">
                        <b>The SAFE</b>
                        <br />
                        <b />
                      </td>
                      <td width="126">
                        A decentralized dat storage and communication network
                      </td>
                      <td>Type III</td>
                      <td>SafeCoin(SFE)</td>
                      <td>Bitcoin's Blockchain</td>
                    </tr>
                    <tr>
                      <td styles="text-align:center;" width="126">
                        <b>Augur</b>
                      </td>
                      <td width="126">
                        A fully open-source and decentralized prediction market
                        plateform.
                      </td>
                      <td>Type II</td>
                      <td>Augur (REP)</td>
                      <td>Ethereum'Blockchain</td>
                    </tr>
                  </tbody>
                </table>

                <h3 align="left">How Does A DApp Function?</h3>
                <p align="left">
                  DApps function by implementing all the four criterion which we
                  discussed in the first section. This means that a DApp is an{" "}
                  <b>open-source</b> software platform implemented on{" "}
                  <b>decentralized </b>blockchains and are fueled using{" "}
                  <b>tokens</b> which are generated using a{" "}
                  <b>protocol/algorithm.</b>
                </p>

                <p align="left">
                  Being an open-source application makes it truly decentralized
                  as anyone can see and contribute to the code. It also fastens
                  the process for scalability of product development in terms of
                  both quality and quantity.
                </p>
                <p align="left">
                  Decentralizing the app by using a blockchain is the next step.
                  The blockchain serves as a permanent ledger of
                  records/transactions which anyone can refer to at any time.
                </p>
                <p align="left">
                  And finally, to add records/transactions to such ledgers,
                  tokens are used which are mined or pre-mined using different
                  algorithms/protocols.
                </p>
                <p align="left">
                  At present, popular protocols which are used are proof-of-work
                  (which Bitcoin users) or proof-of-stake (which Dash uses).
                  They are used to reach a consensus or agreement between all
                  the users of that particular DApp.
                </p>
                <ul align="left">
                  <li>
                    <b>Proof-of-work (POW)</b> entails miners to mine blocks and
                    receive rewards. Because mining blocks and adding them to
                    the chain is an energy consumptive process, this also keeps
                    the blockchain secure.
                  </li>
                  <li>
                    <b>Proof-of-stake (POS)</b> requires holding and staking of
                    tokens in order to become an eligible masternode. This also
                    secures the blockchain and helps in processing transactions.
                  </li>
                </ul>
                <h3 align="left">How To Build A DApp</h3>

                <p align="left">
                  The process of building decentralized apps is not as
                  straightforward as developing any centralized application or
                  software. It has its sequential steps and time frames.
                </p>
                <h4 align="left">
                  Step 1: Publish a white paper on the DApp with a “roadmap”.
                </h4>
                <p align="left">
                  Publishing a white paper explaining the concept, features, and
                  technicalities of the DApp is important, and is also the very
                  first step. This process will allow feedback to come in from
                  the community, thus making it a true DApp.
                </p>
                <p align="left">
                  If you add the DApp’s “roadmap”, or plan, it becomes a
                  positive selling point. DApps with solid roadmaps are ahead of
                  their peers. That’s why it is essential that if you want your
                  DApp to succeed, you must have a solid roadmap in place in
                  front of the open market.
                </p>
                <p align="left">
                  Also, highlight the capabilities and history of top developers
                  and ideators in your project in order to build trust and
                  reliability among the community.
                </p>
                <h4 align="left">Step 2: Launch an ICO.</h4>
                <p align="left">
                  ICOs (initial coin offerings) are the starting points of
                  modern day startups or DApps. In a coin offering, you sell
                  your crypto-coins which will fuel your DApp. These
                  crypto-coins also serve as a way to gather crowdfunding for
                  your project.
                </p>
                <p align="left">
                  Initially, you should announce and explain the aspects of how
                  the ICO of your DApp is going to be. Also, share with the
                  interested community members whether the DApp will be having
                  pre-mined tokens or a mining mechanism in place.
                </p>
                <p align="left">
                  And for building trust, you should highlight how much
                  percentage will go to the development budget, the marketing
                  budget, and other essential allocations. It is important to be
                  transparent with allocations of tokens because most of the
                  DApps projects in the past have ruined their reputation by
                  being not transparent enough.
                </p>
                <h4 align="left">Step 3: Begin development.</h4>
                <p align="left">
                  When all is said and done, after procuring the funds and
                  fine-tuning the concept, it’s time to begin development. And
                  once you have begun, it becomes important to share weekly or
                  monthly updates about the development progress to build an
                  inclusive environment for community members.
                </p>
                <h4 align="left">Step 4: Launch the product.</h4>
                <p align="left">
                  Launch the product with its detailed release notes and
                  maintenance plans to keep the community involved.
                </p>
                <p align="left">
                  Keep maintaining and modifying it as needed to suit your
                  roadmap, your vision, and your community.
                </p>
                <h3 align="left">The Essentials Of DApps</h3>
                <p align="left">
                  Now that you know how to launch a DApp, you can give it a
                  shot.
                </p>
                <p align="left">
                  But what if you’re not a creative genius with a brilliant DApp
                  idea? How can you still participate?
                </p>
                <p align="left">
                  Well, the answer is you can participate in the ICOs of DApps.
                </p>
                <h4>What are DApps’ ICOs and Tokens?</h4>
                <p align="left">
                  Again, ICO means “initial coin offering”. This is where the
                  DApp’s tokens are sold for the very first time in exchange for
                  other currencies (BTC, LTC, ETH, fiat money, etc.).
                </p>
                <p align="left">
                  DApp tokens are crypto-coins made for the purpose of selling
                  in an ICO to fund the product’s development and also for
                  fueling operations of the DApp.
                </p>
                <p align="left">
                  For example, ETH is the “crypto fuel” for running smart
                  contracts on the Ethereum platform.
                </p>
                <p align="left">
                  These tokens are not pegged to any underlying asset, but they
                  are still valuable because of the unique concept and
                  technology backing them. Moreover, the value of the tokens
                  keeps fluctuating based on how much people value the
                  application.
                </p>
                <h3 align="left">How To Participate In ICOs</h3>
                <p align="left">
                  If you want to try your hands early on the DApps token, get
                  into an ICO.
                </p>
                <p align="left">Follow the steps below:</p>
                <ol align="left">
                  <li>
                    Stay Updated – Follow popular crypto and DApps news. Join
                    Slack or Telegram channels of certain ICOs and follow them
                    on Twitter and other social media sites.
                  </li>
                  <li>
                    Prepare a Wallet – Thoroughly read the ICO details and other
                    technical requirements like which wallet should be used for
                    the ICO. And also check out which currency to buy your
                    tokens in (BTC, ETH, USD, etc.).
                  </li>
                  <li>
                    Time Factor – Different ICOs list different timings
                    according to different time zones. Check your time zone and
                    be on time. Some ICOs in the past have finished in less than
                    a few minutes, so you have to be really quick and punctual.
                  </li>
                </ol>
                <p align="left">
                  But a thing to note is that not all ICOs are worth it. Some
                  ICOs are just scams which only look good on paper.
                </p>
                <h4>Analyzing ICOs</h4>
                <p align="left">
                  So how do you judge whether a DApp’s ICO is a scam or not?
                  Here are a few suggestions:
                </p>
                <ul align="left">
                  <li>
                    Check whether the DApp is solving some real-life problem.
                  </li>
                  <li>
                    Check the portfolio and history of the development team.
                  </li>
                  <li>
                    Check the whitepaper and look at its technical feasibility.
                  </li>
                  <li>
                    Join forums to check what the technical experts think about
                    the DApp.
                  </li>
                  <li>Check their development roadmap.</li>
                  <li>
                    See if they have a working prototype demo of the DApp.
                  </li>
                </ul>
                <p align="left">
                  These are only a few of the preconditions; we suggest you do
                  your research and due diligence before getting into any ICO
                  for a DApp.
                </p>
                <h3 align="left">Future of DApps</h3>
                <img
                  src={require("../.././img/DApp3.png")}
                  styles="margin-bottom:10px"
                  alt="seventh slide"
                />
                <p align="left">
                  What we are experiencing now is like a sneak peek to a
                  decentralized world which is about to come in full swing.
                </p>
                <p align="left">
                  Even David Johnston, CEO of the DApp Fund, predicts this in
                  his white paper:
                </p>
                <p align="left">
                  “These decentralized applications will someday surpass the
                  world’s largest software corporations in utility, user-base,
                  and network valuation due to their superior incentivization
                  structure, flexibility, transparency, resiliency, and
                  distributed nature.”
                </p>
                <p align="left">To quote “Johnston’s Law”:</p>
                <p align="left">
                  Everything that can be decentralized, will be decentralized.
                </p>
                <p align="left">-David A. Johnston</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DecentralizedApp.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(DecentralizedApp);
