import {BigNumber, ethers} from "ethers";
import {contract, tokenContract} from "./contract.mjs";
import {toEth, toWei} from "./utils";

export async function swapEthToToken(tokenName, amount){
    try {
        let tx ={value: toWei(amount)};
        const contractObj = await contract();

        const data =await contractObj.swapEthToToken(tokenName,tx);
        const receipt =await data.wait();
        return receipt;
    } catch (e) {
        return parseErrorMsg(e);
    }
}

export async function hasValifdAllowance(owner, tokenName, amount){
    try {
        const contractObj =await contract();
        const address= await contractObj.getTokenAddress(tokenName);
        const tokenContractObj=await tokenContract(address);
        const data = await tokenContractObj.allowance(
            owner,
            "0xC22C405E5F6E1e0525b6D2575481b09CBc773111");
        const result =BigNumber.from(data.toString()).gte(
            BigNumber.from(toWei(amount))
        )
    } catch (error) {
        return parseErrorMsg(e);   
    }
}

export async function swapaEthtoToken(){
  try {
    const contractObj = await contract();
    const data = await contractObj.swapEthToToken(tokenName,toWei(amount));
  
    const receipt = await data.wait();
    return receipt; 
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function swapTokenToToken(srcToken, destToken, amount){
    try {
        const contractObj = await contract();
        const data =contractObj.swapTokenToToken(srcToken,destToken,toWei(amount));
        const receipt = await data.wait();
        return receipt;
    } catch (e) {
        return parseErrorMsg(e);
        
    }
}

export async function getTokenAddressBalance(tokenName,address){
    const contractObj = await contract();
    const balance = contractObj.getBalance(tokenName, address);
    return balance;
}

export async function getTokenAddress(tokenName){
    try {
        const contractObj = await contract();
        const address = await contractObj.getTokenAddress(tokenName);
        return address;
    } catch (e) {
        return parseErrorMsg(e);                
    }
}

export async function increaseAllowance(tokenName,amount){
    try {
        const contractObj =await contract();
        const address = await contractObj.getTokenAddress(tokenName);

        const tokenContractObj = await tokenContract();
        const data = await tokenContractObj.approve(
            "0xC22C405E5F6E1e0525b6D2575481b09CBc773111",
            toWei(amount)
        )

        const receipt = await data.wait();
        return data;

    } catch (e) {
        return parseErrorMsg(e);
    }
}

export async function getAllHistory(){
   try {
     const contractObj = await contract();
     const getAllHistory=await contractObj.gethAllHistory();
 
     const historyTransaction = getAllHistory.map((history,i)=>({
         historyId: history.historyId.toNumber(),
         tokenA: history.tokenA,
         tokenB: history.tokenB,
         inputValue: toEth(history?.inputValue),
         outputValue: toEth(history?.inputValue),
         userAddress: history.userAddress,
     }));
     return historyTransaction;
   } catch (e) {
        return parseErrorMsg(e);
   }
}

// function toWei(amount){
//     const toWei = ethers.utils.parseUnits(amount.toStrinG());
//     return toWei.toString();
// }

function parseErrorMsg(e){
    const json = JSON.parse(JSON.stringify(e));
    return json?.reason || json?.error?.message;
}
