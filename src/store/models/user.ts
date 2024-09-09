import { action, Action } from "easy-peasy";


export interface ConnectedModel {
    isConnected: boolean,
    setIsConnected: Action<ConnectedModel, boolean | void>,
}

export interface BalanceModel {
    balance: string,
    setBalance: Action<BalanceModel, string | void>,
}



export const connectedObject: ConnectedModel = {
    isConnected: false,
    setIsConnected: action((state, payload: boolean) => {
        state.isConnected = payload
    })
}

export const balanceObject: BalanceModel = {
    balance: '0.00',
    setBalance: action((state, payload: string) => {
        state.balance = payload;
        console.log("user balance",  state.balance)
    })
}

