import {ethers} from "ethers";
import abi from './CustomDex.json';
import abiT from './CustomToken.json';

export const tokenContract =async(address)=>{
    const provider=new ethers.providers.Web3Provider(window.ethereum);
    const {ethereum} = window;
    if(ethereum){
        const signer =  provider.getSigner();
        const contractReader=new ethers.Contract(
            address,
            abiT.abiT,
            signer
        );
        console.log(provider.getCode("0xC22C405E5F6E1e0525b6D2575481b09CBc773111"));
        
        return contractReader;
    }
    
}

export const contract =async()=>{
    const provider =new ethers.providers.Web3Provider(window.ethereum);
    const {ethereum}=window;

    if(ethereum){
        const signer = provider.getSigner();

        const contractReader = new ethers.Contract(
           "0xC22C405E5F6E1e0525b6D2575481b09CBc773111",
          abi.abi,
           signer
        );
        return contractReader;
    }
   
}