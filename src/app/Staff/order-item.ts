import { Order } from "./order";
import { Product } from "./product";

export class OrderItem {
    public id?:number;
    public quantity?:number;
    public price?:number;
    public order?:Order;
    public product?:Product
}
