import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit {
  public order:Order|any 
  public orderDetail:Order|any
  public orderDetails:Order|any
  public totalAmount:Number|any
  public num=5.5
  constructor(private orderService:OrderService) { }
  ProcessOrderForm=new FormGroup({
    modeOfPayment:new FormControl(''),
  })
  ngOnInit(): void {
    this.order=localStorage.getItem('order')
    this.orderDetail=JSON.parse(this.order)
    console.log(this.orderDetail)
    this.totalAmount;
  }
  processOrder()
  {
    this.orderDetails=new Order();
    this.orderDetails.modeOfPayment=this.ProcessOrderForm.get('modeOfPayment')?.value;
    this.orderDetails.status="SUCCESS";
    this.orderDetails.tracking="DELIVERED";
    this.orderDetails.discount=this.orderDetail.discount
    this.orderDetails.totalPrice=this.orderDetail.totalPrice
    this.orderService.updateOrder(this.orderDetail.orderId,this.orderDetails).subscribe(response=>{
      console.log(response)
      window.alert(response)
    })
  }
}
