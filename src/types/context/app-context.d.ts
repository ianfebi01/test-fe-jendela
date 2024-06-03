
export interface IInitialLanding  {
    orders: IOrder[]
    auth: boolean
}

export type ActionMapDefaultReducer = {
    set_order: IOrder 
    set_login: boolean
    set_logout: boolean
  };


  interface IOrder{
    sourceOrder: string;
    name: string;
    phone: string;
    qty: string;
    desc: string;
  }