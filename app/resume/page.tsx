"use client";
import { motion } from "framer-motion";

export default function ResumePage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 pt-16 sm:pt-20 md:pt-24">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <motion.div 
          className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            My Resume
          </motion.h1>
          <motion.p 
            className="font-light text-gray-500 sm:text-xl dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Muhammad Mohsin Saleem's professional background and experience
          </motion.p>
          <motion.div 
            className="mt-6 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume/Mohsin.pdf"
              download
              target="_blank"
              className="inline-flex items-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Download Resume (PDF)
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume/Mohsin.pdf"
              target="_blank"
              className="inline-flex items-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-900"
            >
              View Resume
              <svg 
                className="w-5 h-5 ml-2 -mr-1" 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  fillRule="evenodd" 
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" 
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Work Experience Section */}
          <motion.div 
            className="mb-10"
            variants={fadeIn}
          >
            <motion.h2 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Work Experience
            </motion.h2>

            <motion.div 
              className="border-l-2 border-gray-200 dark:border-gray-700 pl-5 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ x: 5, borderColor: "#3b82f6" }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Blockchain Engineer
              </h3>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-500 mb-1">
                Octaloop Technologies | 03/12/2024 - Present
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Islamabad, Pakistan
              </p>
              <p className="text-gray-900 dark:text-white font-semibold mb-1">Responsibilities:</p>
              <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mb-2">
                <li>
                  Developed and deployed staking and farming smart contracts on Algorand, ensuring optimized yield distribution and security
                </li>
                <li>
                  Designed and implemented a decentralized NFT marketplace, enabling seamless NFT trading with smart contract-based escrow
                </li>
                <li>
                  Integrated ARC4 standards for NFT auctions, improving transparency and security in bidding mechanisms
                </li>
                <li>
                  Optimized Algorand smart contracts for gas efficiency and reduced transaction costs
                </li>
                <li>
                  Ensured secure fund management through atomic transactions and on-chain verification
                </li>
              </ul>

              <p className="text-gray-900 dark:text-white font-semibold mb-1">Key Projects:</p>
              <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mb-2">
                <li>
                  <span className="font-medium">Algorand Staking & Farming System</span> – Designed a staking contract allowing users to lock assets and earn rewards based on farming algorithms
                </li>
                <li>
                  <span className="font-medium">NFT Marketplace on Algorand</span> – Built a decentralized NFT marketplace supporting auction-based listings, bid tracking, and automated settlement
                </li>
              </ul>

              <p className="text-gray-900 dark:text-white font-semibold mb-1">Tech Stack:</p>
              <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mb-2">
                <li>
                  <span className="font-medium">Blockchain:</span> Algorand, PyTeal, Algopy
                </li>
                <li>
                  <span className="font-medium">Smart Contracts:</span> ARC4, TEAL
                </li>
                <li>
                  <span className="font-medium">Backend:</span> Node.js, Express.js
                </li>
                <li>
                  <span className="font-medium">Frontend:</span> React.js, Next.js
                </li>
                <li>
                  <span className="font-medium">Database:</span> MongoDB
                </li>
                <li>
                  <span className="font-medium">Wallet Integration:</span> Algorand Wallet, MyAlgo
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="border-l-2 border-gray-200 dark:border-gray-700 pl-5 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ x: 5, borderColor: "#3b82f6" }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Blockchain Engineer
              </h3>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-500 mb-1">
                Telgates Inc. | 05/08/2023 - 10/11/2024
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Lahore, Pakistan
              </p>
              <p className="text-gray-900 dark:text-white font-semibold mb-1">Responsibilities:</p>
              <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mb-2">
                <li>
                  Developed EVM-based smart contracts for DeFi, staking, vesting, and token swaps using Solidity
                </li>
                <li>
                  Built NFT marketplaces with on-chain royalties, escrow, and multi-currency payments
                </li>
                <li>
                  Conducted smart contract security audits and implemented best practices
                </li>
                <li>
                  Integrated Chainlink oracles and governance frameworks for decentralized decision-making
                </li>
                <li>
                  Developed Algorand smart contracts using Algopy/PyTeal
                </li>
                <li>
                  Utilized Hardhat, Foundry, and Truffle for testing, debugging, and deployment
                </li>
                <li>
                  Deployed smart contracts on Ethereum, Algorand, BSC, Polygon, and Arbitrum
                </li>
                <li>
                  Implemented cross-chain bridges and token transfers for interoperability
                </li>
              </ul>

              <p className="text-gray-900 dark:text-white font-semibold mb-1">Key Projects:</p>
              <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mb-2">
                <li>
                  <span className="font-medium">FryStaking (Algorand)</span> – Staking & farming smart contract leveraging ARC4 & box storage for scalable rewards
                </li>
                <li>
                  <span className="font-medium">ImpactoMoney Charity (Ethereum)</span> – Stablecoin-wrapped NFT voucher system for transparent donations & fund traceability
                </li>
                <li>
                  <span className="font-medium">NFT Marketplace (Ethereum)</span> – Built a decentralized NFT marketplace with minting, bidding, and multi-chain support
                </li>
                <li>
                  <span className="font-medium">Token Vesting (Ethereum & Algorand)</span> – Developed vesting contracts for structured token unlocks & beneficiary claims
                </li>
                <li>
                  <span className="font-medium">Staking & Reward Contracts (EVM & Algorand)</span> – Designed secure staking mechanisms with auto-compounding & penalty-based withdrawals
                </li>
                <li>
                  <span className="font-medium">Token ICO & Launchpad (Ethereum)</span> – Built a secure token sale contract with whitelist access & vesting schedules
                </li>
                <li>
                  <span className="font-medium">Swapping & Exchange (Ethereum)</span> – Integrated DEX liquidity pools for efficient on-chain token swaps
                </li>
              </ul>

              <p className="text-gray-900 dark:text-white font-semibold mb-1">Tech Stack:</p>
              <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mb-2">
                <li>
                  <span className="font-medium">Languages:</span> Solidity, Python (Algopy/PyTeal)
                </li>
                <li>
                  <span className="font-medium">Blockchain Platforms:</span> Ethereum, Algorand, BSC, Polygon, Arbitrum
                </li>
                <li>
                  <span className="font-medium">Development Tools:</span> Hardhat, Foundry, Truffle
                </li>
                <li>
                  <span className="font-medium">Features:</span> Staking, Vesting, NFT Marketplaces, Auctions, Token Swaps, DAOs
                </li>
                <li>
                  <span className="font-medium">Security & Auditing:</span> OpenZeppelin, Slither, MythX
                </li>
                <li>
                  <span className="font-medium">Interoperability:</span> Cross-chain bridges, Multi-token payments
                </li>
                <li>
                  <span className="font-medium">Oracles & Infrastructure:</span> Chainlink, The Graph, IPFS
                </li>
              </ul>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-medium">Website:</span> <a href="https://telgates.net" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-500 hover:underline">https://telgates.net</a>
              </p>
            </motion.div>
          </motion.div>

          {/* Education Section */}
          <motion.div 
            className="mb-10"
            variants={fadeIn}
          >
            <motion.h2 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Education
            </motion.h2>

            <motion.div 
              className="border-l-2 border-gray-200 dark:border-gray-700 pl-5 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ x: 5, borderColor: "#3b82f6" }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Bachelors in Software Engineering
              </h3>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-500 mb-1">
                COMSATS University Islamabad Vehari Campus | 01/09/2020 – 02/09/2024
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                61100 Vehari, Pakistan
              </p>
            </motion.div>

            <motion.div 
              className="border-l-2 border-gray-200 dark:border-gray-700 pl-5 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ x: 5, borderColor: "#3b82f6" }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                FSC (Pre-Engineering)
              </h3>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-500 mb-1">
                Govt. Post Graduate College Vehari | 01/07/2018 – 22/09/2020
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                61100 Vehari, Pakistan
              </p>
            </motion.div>

            <motion.div 
              className="border-l-2 border-gray-200 dark:border-gray-700 pl-5 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              whileHover={{ x: 5, borderColor: "#3b82f6" }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Matriculation (Science)
              </h3>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-500 mb-1">
                Govt. Model Higher Secondary School Vehari | 01/03/2016 – 21/07/2018
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                61100 Vehari, Pakistan
              </p>
            </motion.div>
          </motion.div>

          {/* Soft Skills Section */}
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <motion.h2 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              Communication and Interpersonal Skills
            </motion.h2>

            <motion.div 
              className="border-l-2 border-gray-200 dark:border-gray-700 pl-5"
              whileHover={{ x: 5, borderColor: "#3b82f6" }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Soft Skills
              </h3>
              <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mb-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                <motion.li whileHover={{ x: 5, color: "#3b82f6" }}>Multitasking</motion.li>
                <motion.li whileHover={{ x: 5, color: "#3b82f6" }}>Problem-Solving</motion.li>
                <motion.li whileHover={{ x: 5, color: "#3b82f6" }}>Teamwork</motion.li>
                <motion.li whileHover={{ x: 5, color: "#3b82f6" }}>Attention to Detail</motion.li>
                <motion.li whileHover={{ x: 5, color: "#3b82f6" }}>Time Management</motion.li>
                <motion.li whileHover={{ x: 5, color: "#3b82f6" }}>Adaptability</motion.li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <motion.h2 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              Certifications
            </motion.h2>

            <motion.div 
              className="border-l-2 border-gray-200 dark:border-gray-700 pl-5 mb-3"
              whileHover={{ x: 5, borderColor: "#3b82f6" }}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Become a Software Tester
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Udemy | May 2024 - June 2024
              </p>
            </motion.div>

            <motion.div 
              className="border-l-2 border-gray-200 dark:border-gray-700 pl-5"
              whileHover={{ x: 5, borderColor: "#3b82f6" }}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Blockchain Specialization
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Coursera | August 2023 - November 2023
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 