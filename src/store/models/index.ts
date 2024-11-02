import { BalanceModel, ConnectedModel, balanceObject, connectedObject } from './user'

export interface StoreModel {
    balanceObject: BalanceModel,
    connectedObject: ConnectedModel,
}

const model: StoreModel = {
    balanceObject,
    connectedObject,
}

export default model;