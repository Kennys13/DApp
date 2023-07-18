import { ethers } from "ethers";
import { useEffect, useState } from "react";
import BipulContract from "./BipulContract.sol/BipulContract.json";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const contractABI = BipulContract.abi;

function App() {
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Initialize Ethereum provider and contract
    async function initialize() {
      try {
        // Request access to the user's MetaMask account
        await window.ethereum.enable();

        // Create an instance of the Ethereum provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);

        // Create an instance of the contract
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          provider.getSigner()
        );
        setContract(contract);
      } catch (error) {
        console.error(error);
      }
    }

    initialize();
  }, []);

  async function multiplyNumbers() {
    try {
      if (contract && window.ethereum) {
        setIsProcessing(true);

        // Convert the input numbers to ethers BigNumbers
        const num1 = ethers.BigNumber.from(number1);
        const num2 = ethers.BigNumber.from(number2);

        // Call the multiply function and send 2 ETH along with the transaction
        const tx = await contract.multiply(num1, num2, {
          value: ethers.utils.parseEther("2"),
        });

        // Wait for the transaction to be mined
        await tx.wait();

        // Manually update the contract state by calling the result() function
        const resultVal = await contract.result();
        setResult(resultVal.toString());

        setIsProcessing(false);
      }
    } catch (error) {
      console.error(error);
      setIsProcessing(false); // Set isProcessing back to false in case of an error
    }
  }

  async function subtractNumbers() {
    try {
      if (contract && window.ethereum) {
        setIsProcessing(true);

        // Convert the input numbers to ethers BigNumbers
        const num1 = ethers.BigNumber.from(number1);
        const num2 = ethers.BigNumber.from(number2);

        // Call the subtract function and send 2 ETH along with the transaction
        const tx = await contract.subtract(num1, num2, {
          value: ethers.utils.parseEther("2"),
        });

        // Wait for the transaction to be mined
        await tx.wait();

        // Manually update the contract state by calling the result() function
        const resultVal = await contract.result();
        setResult(resultVal.toString());

        setIsProcessing(false);
      }
    } catch (error) {
      console.error(error);
      setIsProcessing(false); // Set isProcessing back to false in case of an error
    }
  }

  return (
    <div>
      <h1>React DApp</h1>
      <div>
        <label>Number 1:</label>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
      </div>
      <div>
        <label>Number 2:</label>
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>
      <div>
        <button onClick={multiplyNumbers} disabled={isProcessing}>
          Multiply
        </button>
        <button onClick={subtractNumbers} disabled={isProcessing}>
          Subtract
        </button>
      </div>
      <div>
        {isProcessing ? (
          <p>Transaction in progress...</p>
        ) : (
          <>
            <label>Result:</label>
            <p>{result}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
