import React, { useState, useEffect } from "react";
import Web3 from "web3";
import Navbar from "./navbar/Navbar";
import Tether from "../truffle_abis/Tether.json";

export default function App() {
  const [account, setAccount] = useState("0x0");
  const [tether, setTether] = useState({});
  const [rwd, setRwd] = useState({});
  const [decentralBank, setDecentralBank] = useState({});
  const [loading, setLoading] = useState(true);
  const [balances, setBalances] = useState({
    tetherBalance: "0",
    rwdBalance: "0",
    stakingBalance: "0",
  });

  const LoadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("No web3 wallet found");
    }
  };

  const LoadMetamaskData = async () => {
    const web3 = await window.web3;
    const clientAccount = await web3.eth.getAccounts();
    const clientAccounts = await clientAccount[0];
    console.log(account);
    setAccount(clientAccount[0]);
    const networkId = await web3.eth.net.getId();

    // Load tether contract
    const tetherData = await Tether.networks[networkId];
    if (tetherData) {
      const tether = new web3.eth.Contract(Tether.abi, tetherData.address);
      setTether(tether);
      let tetherBalance = await tether.methods.balanceOf(clientAccounts).call();
      setBalances({
        tetherBalance: tetherBalance.toString(),
        rwdBalance: "0",
        stakingBalance: "0",
      });

    } else {
      window.alert("Error, Tether contract not deployed.");
    }
  };

  useEffect(() => {
    const load = async () => {
      await LoadWeb3();
      await LoadMetamaskData();
    };
    load();
  }, []);

  return (
    <div>
      <Navbar money={balances.tetherBalance} account={account} />
    </div>
  );
}
