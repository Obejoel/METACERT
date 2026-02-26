# METACERT
Verifiable Legacy: Digital Inheritance & Credentials Protocol

Verifiable Legacy is a decentralized protocol built on Starknet that bridges the gap between digital asset accumulation and estate planning. It combines a "Dead Man's Switch" inheritance mechanism with Soulbound Tokens (SBTs) to ensure your digital wealth and achievements (like university degrees) are preserved and automatically transferred to your heirs if you become inactive.

🚀 The Problem: The Digital Inheritance Vacuum

In the current Web3 ecosystem, billions of dollars are lost due to misplaced keys or unexpected tragedies. Traditional wills don't account for cryptographic assets, and centralized exchanges are difficult for heirs to navigate.

🛡️ The Solution

Verifiable Legacy provides a trustless, automated system where:

Institutions issue verifiable, non-transferable certificates (SBTs).

Users set up inheritance plans tied to their activity ("Heartbeats").

Successors can claim assets automatically after a verified period of inactivity, governed entirely by smart contract logic.

🛠️ Tech Stack

Smart Contracts: Cairo 2.x

Development Suite: Starknet Foundry (snforge, sncast)

Build Tool: Scarb

Frontend: React + Starknet.js + StarknetKit

Deployment: Starknet Sepolia Testnet

Clients: Starkli & Ankh

📂 Project Structure

.
├── src/
│   └── lib.cairo          # Core contract logic (Inheritance & Certificates)
├── target/dev/            # Compiled Sierra and CASM artifacts
├── tests/                 # Integration tests using snforge cheatcodes
├── Scarb.toml             # Project dependencies and configuration
└── README.md              # Project documentation


⚙️ Getting Started

Prerequisites

Scarb (Cairo package manager)

Starknet Foundry

Ankh or Starkli

Installation & Build

Clone the repository:

git clone [https://github.com/your-username/verifiable-legacy.git](https://github.com/your-username/verifiable-legacy.git)
cd verifiable-legacy


Build the contracts:

scarb build


Running Tests

The project uses snforge to simulate time-based inheritance triggers using block timestamp cheatcodes.

snforge test


🌍 Deployment

To deploy to the Sepolia testnet, ensure you have a funded account and keystore ready.

1. Declare the Contract

ankh declare target/dev/legacycontract_VerifiableLegacy.contract_class.json \
  --casm target/dev/legacycontract_VerifiableLegacy.compiled_contract_class.json \
  --network sepolia


2. Deploy

Replace <CLASS_HASH> with the output from the declaration and <UNI_PUB_KEY> with the university's public key.

# 31536000 is the 1-year threshold in seconds
starkli deploy <CLASS_HASH> <UNI_PUB_KEY> \
  --rpc [https://starknet-sepolia.public.starknet.foundation](https://starknet-sepolia.public.starknet.foundation)


Note: If experiencing WSL DNS issues, use the direct RPC IP: --rpc https://104.26.8.196

📝 Usage

Heartbeat (Ping)

Users must call this periodically to prove liveness:

starkli invoke <CONTRACT_ADDRESS> ping --account <ACC>


Claiming Inheritance

A successor can claim the vault only after the threshold has passed:

starkli invoke <CONTRACT_ADDRESS> claim_inheritance <OWNER_ADDR> --account <HEIR_ACC>


👥 The Team

Solomon: Lead Cairo Developer (Web3 Logic & Security)

Joel: Frontend Engineering (React & Wallet Integration)

Hadiza & Nneka: UI/UX Design (User Experience & Journeys)

Carm & Radiyat: Graphic Design (Branding & Digital Assets)

📄 License

This project is licensed under the MIT License.
