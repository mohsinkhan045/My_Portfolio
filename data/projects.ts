export interface Project {
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
  slug: string;
  features: string[];
}

export const projects: Project[] = [
  {
    title: "ImpactoMoney",
    description: "A blockchain-based Gaza Fund NFT voucher platform that enables transparent and direct humanitarian aid through NFT vouchers.",
    longDescription: "ImpactoMoney is an innovative cross-chain platform focused on humanitarian aid for Gaza through NFT vouchers. The platform leverages blockchain technology to ensure transparent and direct delivery of funds to those in need. Users can purchase NFT vouchers that represent real-world aid packages, with each transaction recorded on the blockchain for complete transparency. The cross-chain functionality allows donors from various blockchain ecosystems to participate, maximizing reach and accessibility. Smart contracts ensure that funds are allocated as intended, with verification mechanisms to confirm aid delivery. This project demonstrates the power of blockchain technology in humanitarian efforts by eliminating intermediaries and providing verifiable impact.",
    imageUrl: "/images/ImpactoMoney.png",
    tags: ["Cross-Chain", "NFT", "Humanitarian Aid", "Smart Contracts", "Blockchain", "Gaza Fund"],
    codeUrl: "https://github.com/mohsinkhan045/Impactomoney",
    slug: "impactomoney",
    features: [
      "Cross-chain NFT voucher system for humanitarian aid",
      "Transparent fund allocation through blockchain verification",
      "Direct-to-recipient aid delivery mechanism",
      "Real-world impact tracking and reporting",
      "Donor dashboard with impact metrics",
      "Secure and immutable record of all donations and distributions"
    ]
  },
  {
    title: "Fry Staking & Farming",
    description: "An Algorand-based staking and farming platform that allows users to lock their Fry tokens and earn rewards.",
    longDescription: "The Fry Staking & Farming platform was designed to provide Algorand users with opportunities to earn rewards by staking their Fry tokens. Built using PyTeal and the Algorand blockchain, this platform features secure staking contracts that enable token locking, reward distribution, and yield generation. The system utilizes Algorand's box storage for scalable reward management and incorporates ARC4 standards for token interactions. The implementation provides a complete on-chain solution for token staking with auto-compounding rewards and penalty-based withdrawals to incentivize long-term participation.",
    imageUrl: "/images/fry.png",
    tags: ["Algorand", "PyTeal", "Blockchain", "DeFi", "ARC4", "TEAL"],
    demoUrl: "https://fry.network",
    codeUrl: "https://github.com/mohsinkhan045/Fry_staking_farming",
    slug: "fry-staking-farming",
    features: [
      "Token staking with flexible and locked periods on Algorand",
      "Box storage for efficient on-chain data management",
      "Auto-compounding rewards mechanism",
      "Penalty-based early withdrawal system",
      "ARC4 standard integration for token interactions",
      "Secure fund management through atomic transactions and on-chain verification"
    ]
  },
  {
    title: "Fry Market",
    description: "A decentralized NFT marketplace on Algorand blockchain for minting, buying, selling, and auctioning digital collectibles.",
    longDescription: "Fry Market is a comprehensive NFT marketplace built on the Algorand blockchain that provides artists and collectors a platform to mint, trade, and auction digital assets. The platform features efficient NFT transactions leveraging Algorand's fast finality and low transaction fees. Smart contracts ensure secure ownership transfer using ARC4 standards and enable various trading mechanisms including direct sales and auctions. The marketplace includes escrow-based trading to ensure safe transactions between parties. This project demonstrates the power of Algorand for NFT applications with its high throughput and environmentally friendly consensus mechanism.",
    imageUrl: "/images/fry Market.png",
    tags: ["Algorand", "PyTeal", "NFT", "ARC4", "IPFS", "Marketplace"],
    codeUrl: "https://github.com/mohsinkhan045/FryMarket",
    slug: "fry-market",
    features: [
      "NFT minting with metadata storage on Algorand",
      "Auction-based listings with bidding mechanisms",
      "Smart contract-based escrow for secure trading",
      "ARC4 standard implementation for NFT tokens",
      "Seamless wallet integration with MyAlgo and Algorand Wallet",
      "Optimized transaction costs using Algorand's fee structure"
    ]
  },
  {
    title: "EVoting System DApp",
    description: "A blockchain-based electronic voting system that ensures transparency, security, and immutability of the election process.",
    longDescription: "The EVoting System DApp is a decentralized application built on Ethereum that revolutionizes traditional voting systems by leveraging blockchain technology. The system provides a tamper-proof, transparent voting mechanism that eliminates fraud while maintaining voter privacy. Smart contracts manage the entire election lifecycle from candidate registration to vote counting, ensuring that votes cannot be altered once cast. The application includes voter authentication, real-time results tabulation, and a user-friendly interface that makes digital voting accessible to everyone. This solution demonstrates how blockchain can enhance democratic processes by providing verifiable and secure voting systems.",
    imageUrl: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tags: ["Solidity", "Ethereum", "DApp", "Smart Contracts", "Voting", "Web3.js"],
    codeUrl: "https://github.com/mohsinkhan045/EVoting_System_DAPP",
    slug: "evoting-system",
    features: [
      "Secure voter authentication and registration",
      "Candidate registration and management",
      "Anonymous yet verifiable voting process",
      "Real-time vote counting and results display",
      "Role-based access control for administrators and voters",
      "Transparent audit trail of all election activities"
    ]
  },
  {
    title: "Decentralized Freelancing Platform",
    description: "A blockchain-powered freelancing marketplace that connects clients and freelancers without intermediaries, ensuring secure and fair transactions.",
    longDescription: "The Decentralized Freelancing Platform is a DApp built on Ethereum that disrupts traditional freelancing platforms by removing intermediaries and reducing fees. The platform uses smart contracts to automate the entire freelancing process from job posting to payment release. Clients can post jobs, review proposals, and escrow funds, while freelancers can submit proposals, deliver work, and receive guaranteed payments once milestones are approved. The system incorporates reputation systems and dispute resolution mechanisms to create trust in a trustless environment. This project showcases how blockchain technology can create more efficient and equitable marketplaces by eliminating middlemen and reducing transaction costs.",
    imageUrl: "/images/Dapp_freelancing.jpg",
    tags: ["Solidity", "React", "Ethereum", "Smart Contracts", "Freelancing", "Web3.js"],
    codeUrl: "https://github.com/mohsinkhan045/Dapp_Freelancing",
    slug: "dapp-freelancing",
    features: [
      "Smart contract-based escrow system for secure payments",
      "Milestone-based project management and payment release",
      "Decentralized reputation and review system",
      "Dispute resolution mechanism with arbitration",
      "Direct messaging between clients and freelancers",
      "Low transaction fees compared to traditional platforms"
    ]
  },
  {
    title: "Doge Launchpad",
    description: "A decentralized token launchpad for the Dogecoin ecosystem, enabling projects to raise funds and distribute tokens securely.",
    longDescription: "Doge Launchpad is a decentralized platform built on Ethereum that enables new crypto projects in the Dogecoin ecosystem to launch tokens and raise funds in a secure and transparent manner. The launchpad features automated token sales with customizable parameters such as hard/soft caps, vesting schedules, and distribution mechanisms. Smart contracts handle the entire token sale process from KYC verification to token distribution, ensuring fairness and preventing common issues like front-running. The platform includes tier-based allocation systems based on user stake and implements anti-whale measures to prevent large holders from dominating sales. This project demonstrates my expertise in creating secure token sale mechanisms and launch platforms for crypto projects.",
    imageUrl: "/images/doge-launchpad.jpeg",
    tags: ["Solidity", "ERC-20", "DeFi", "Launchpad", "ICO", "Token Sale"],
    codeUrl: "https://github.com/mohsinkhan045/Doge_launchpad",
    slug: "doge-launchpad",
    features: [
      "Automated token sale smart contracts with configurable parameters",
      "Tier-based allocation system for fair distribution",
      "Vesting schedules for token releases",
      "KYC integration for regulatory compliance",
      "Anti-bot and anti-whale protection mechanisms",
      "Token locking and liquidity pool creation"
    ]
  }
]; 