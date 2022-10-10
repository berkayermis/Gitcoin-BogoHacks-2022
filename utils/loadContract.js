import UniDAO from "./UniDAO.json";

export const loadContract = async (name, web3) => {
    let contract = null,
      Artifacts = null;
  
    let networkID = 1; // Ethereum Mainnet
  
    try {  
      contract = new web3.eth.Contract(
        UniDAO,
        // Artifacts.networks[networkID].address
        "0x93c5f8228Bc3848a00a8AF868f36CC39c50E1998"
      );
  
      console.log(`Contract ${name} loaded`);
    } catch (e) {
      console.log(`Contract ${name} can not loaded from client side`);
      console.log(e);
    }
  
    return contract;
  };