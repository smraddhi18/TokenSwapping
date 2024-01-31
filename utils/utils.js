import {ethers} from "ethers";

export function toWei(amount,decimals=18){
    const toWei = ethers.utils.parseUnits(amount,decimals);
    return toWei.toString();
}

export function toEth(amount,decimal=10){
    const toEth = ethers.utils.formatUnits(amount,decimal)
    return toEth.toString();
}

