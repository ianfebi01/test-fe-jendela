
export interface IInitialLanding  {
    orders: IOrder[]
}

export type ActionMapDefaultReducer = {
    set_order: IOrder 
  };


  interface IOrder{
    sourceOrder: string;
    name: string;
    phone: string;
    qty: string;
    desc: string;
  }