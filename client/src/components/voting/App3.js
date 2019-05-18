import React, { Component } from 'react';

import './App.css';
import web3 from './web3.js';
import contract from './contract.js'

class App3 extends Component {

  state=  {
    authfigadd: '',
    noallowed: '',
    indexofcandidate: '',
    indexno: '',
    noofvotes1: '',
    winneraddress: '',
    status: '',
    listofcandidates: '',
    manager: '',
    newlocation: '',
    teamaddress: '',
    location: '',
    balance: '',
    value: 0,
    message: '',
    teamname: '',
    amount: '',
    goal: '',
    judges: '',
    nextcandidate: '',
    messageforjudge: '',
    booleanforteamvote: false,
    messageforjudgebyvote: '',
    teamno: '',
    teamno2: ''
  }

  totalnoofvotes = async event =>  {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    //newlocation paSS karni h
    const noofvotes1 = await contract.methods.getnoofvotes(this.state.indexno).send({
      from: accounts[0]
    });

    this.setState({noofvotes1 : noofvotes1 });
  }

  getauthfigurelist = async event =>  {
    event.preventDefault();

    console.log("testing");
    for(var i = 0; ;i++)  {
      const message = await contract.methods.authfigure(i).call();
      //console.log(judges);
      this.setState({ message: this.state.message + "Index " + (i) + '. ' +  message + "\n"});
    }
  };

  giverighttovote = async event =>   {
    event.preventDefault();
    // teamno pass karna h
    console.log("hi");
    const accounts = await web3.eth.getAccounts();
    await contract.methods.giveRightToVote(this.state.teamno, this.state.teamno2).send({
      from: accounts[0]
    });
    console.log("bye");
  }

  makecandidates = async event =>  {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
     await contract.methods.makecandidate(this.state.nextcandidate).send({
      from: accounts[0]
    });

  }

  declareauthfigure = async event =>  {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    await contract.methods.addNewAuthenticationFigure(this.state.authfigadd, this.state.noallowed).send({
      from: accounts[0]
    });
  }

  votethecandidate = async event =>  {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    await contract.methods.payamount().send({
      from: accounts[0]
    });
    this.setState({status: 'your vote has been recorded'});
  }

  async componentDidMount() {

    const manager = await contract.methods.manager().call();
    this.setState({manager});
  }

  

  getlistofcandidates = async event => {
    event.preventDefault();

    console.log("testing");
    for(var i = 0; ;i++)  {
      const can = await contract.methods.candidates(i).call();
      this.setState({ listofcandidates: this.state.listofcandidates+ "Index " + (i) + '. ' +  can + "\n"});
    }

  }

  checkwinner = async event => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    const winner = await contract.methods.winning().send({
      from: accounts[0]
    });

    this.setState({ winneraddress: 'Winners address is' + winner});
    //this.setState({messageforjudgebyvote: 'your vote has been recorded'});
  }

  render() {
    return (
      <div>
<h1 align="center">Voting Application</h1>
        <h3>Contract is deployed by {this.state.manager} and contract is deployed at 0x9f0229612a4fd856b28c916e80f70270d32a21dd address {}{}{}</h3>
        <hr />



        <form onSubmit = {this.getauthfigurelist}>
          <h4> &nbsp;&nbsp;If you want to see list of authentication figure press this button</h4>
          <div>
            
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>Enter</button>
        </form>
        <h1 Style = "font-size: 50px;">{this.state.message}</h1>
        <hr />



        <form onSubmit = {this.getlistofcandidates}>
        <h4> &nbsp;&nbsp;If you want to see list of candidates then press this button </h4>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button>Enter</button>
        <h4  Style = "font-size: 50px;">{this.state.listofcandidates}</h4>
        </form>
        <hr />



        <form onSubmit = {this.makecandidates}>
        <h4> &nbsp;&nbsp;Only manager can call this function to make candidates </h4>&nbsp;&nbsp;
        <input
          value = {this.state.nextcandidate}
          onChange = {event => this.setState({ nextcandidate: event.target.value})}
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button>Enter</button>
        </form>
        <hr />



        <form onSubmit = {this.declareauthfigure}>
        <h4>&nbsp;&nbsp; this field can be called by manager to declare the authentication figure with no of voters that can be verified by him</h4>&nbsp;&nbsp;
        <input
          value = {this.state.authfigadd}
          onChange = {event => this.setState({authfigadd: event.target.value})}
        />
        <br></br>&nbsp;&nbsp;
        <input
          value = {this.state.noallowed  }
          onChange = {event => this.setState({noallowed: event.target.value})}
        />
        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button>Enter</button>
        </form>
        <hr/>



        <form onSubmit = {this.giverighttovote}>
        <h4>&nbsp;&nbsp; this field can be called by authentication figure to give right to vote to voters </h4>&nbsp;&nbsp;
        <input
          value = {this.state.teamno}
          placeholder = "address(of voter)"
          onChange = {event => this.setState({ teamno: event.target.value})}
        />
        <br></br>
        &nbsp;&nbsp;
        <input
          value = {this.state.teamno2}
          placeholder = "index(Authorityindex)"
          onChange = {event => this.setState({ teamno2: event.target.value})}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <button>Enter</button>
        </form>
        <hr />



        <form onSubmit = {this.votethecandidate}>
        <h4>&nbsp;&nbsp; this is for voters where they can vote their candidates </h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button>Enter</button>
        &nbsp;&nbsp;
        <input
          value = {this.state.indexofcandidate}
          onChange = {event => this.setState({indexofcandidate: event.target.value})}
        />
        </form>
        <hr />




        <form onSubmit = {this.totalnoofvotes}>
        <h4>&nbsp;&nbsp; This field is used to check the no of votes given to candidate </h4>&nbsp;&nbsp;
        <input
          value = {this.state.indexno}
          onChange = {event => this.setState({ indexno: event.target.value})}
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button>Enter</button>
        <h1>{this.state.noofvotes1}</h1>
        </form>
        <hr />


        <form onSubmit = {this.checkwinner}>
        <h4>&nbsp;&nbsp; This field can only be called by manager to check the winning candidate </h4>
        &nbsp;&nbsp;
        <button>Enter</button>
        <h1>{this.state.winneraddress}</h1>
        </form>
        <hr />

        

      </div>
    );
  }
}

export default App3;
