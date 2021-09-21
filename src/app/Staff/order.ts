import { Customer } from "./customer";
import { Address } from "./address";
export class Order {
    public id?:number;
    public date?:Date;
    public totalPrice?:number;
    public discount?:number;
    public modeOfPayment?:string;
    public status?:string;
    public tracking?:string;
    public customer?:Customer;
    public address?:Address;
}
