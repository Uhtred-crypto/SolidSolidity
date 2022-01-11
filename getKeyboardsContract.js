import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0x13E7a134E598D1b8C146C87A0AB77Df9b7654165';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}