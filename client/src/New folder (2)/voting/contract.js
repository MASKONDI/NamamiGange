import web3 from "./web3";

//const address = '0xc917Bf4861D28643fc76CFe06D4D7dBee9fB99Cb';
//const address = '0x90F1bAa353F6f6882cCF4D3A270FE16ea74F9156';
const address = "0x9f0229612a4fd856b28c916e80f70270d32a21dd";

const abi = [
  {
    constant: false,
    inputs: [
      {
        name: "index",
        type: "uint256"
      }
    ],
    name: "vote",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "auths",
    outputs: [
      {
        name: "auth",
        type: "address"
      },
      {
        name: "noOfAccountsallowed",
        type: "uint256"
      },
      {
        name: "noOfVerificationLeft",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "candidateaddress",
        type: "address"
      }
    ],
    name: "makecandidate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "newauth",
        type: "address"
      },
      {
        name: "noallowed",
        type: "uint256"
      }
    ],
    name: "addNewAuthenticationFigure",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "authfigure",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "index",
        type: "uint256"
      }
    ],
    name: "getnoofvotes",
    outputs: [
      {
        name: "noofvotes",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "candidates",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "manager",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "winning",
    outputs: [
      {
        name: "add",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "candiates1",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "candis",
    outputs: [
      {
        name: "candi",
        type: "address"
      },
      {
        name: "count",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "voters",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "voter",
        type: "address"
      },
      {
        name: "index",
        type: "uint256"
      }
    ],
    name: "giveRightToVote",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "approvedauthfigure",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  }
];

export default new web3.eth.Contract(abi, address);
