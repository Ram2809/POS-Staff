import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from '../order';
import { OrderItem } from '../order-item';
import { OrderService } from '../order.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  AddOrderForm=new FormGroup({
    productName:new FormControl(''),
    quantity:new FormControl('')
  })
  constructor(private productService:ProductService,private orderService:OrderService,private router:Router) { }
  public productList:Observable<Product[]>|any
  public product:Product|any
  public order:Order|any
  public orderItem:OrderItem|any
  public orderId:Number|any
  public orderedItems:Observable<OrderItem[]>|any
  public length:number|any
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      console.log(data)
      this.productList=data
      console.log(this.AddOrderForm.get('productName')?.value)
    })
    // this.order=new Order()
    // this.orderService.addOrder(9080247951,1,this.order).subscribe(data=>{
    //   console.log(data)
    // })
  }
  addOrderItem()
  {
    this.orderService.getOrderId(9080247951).subscribe(data=>{
      console.log(data)
      this.orderId=data
      this.orderItem=new OrderItem()
      this.orderItem.quantity=this.AddOrderForm.get('quantity')?.value
      this.orderService.addOrderItem(this.orderId,this.product.id,this.orderItem).subscribe(data=>{
        console.log(data)
        window.alert(data)
        this.orderService.getOrderedItems(this.orderId).subscribe(data=>{
          this.orderedItems=data
          this.length=this.orderedItems.length
          console.log(data)
          this.orderService.getOrderById(this.orderId).subscribe(data=>{
            console.log(data)
            this.order=data
          })
        })
      })
    })
  }
  getAvailability()
  {
    this.productService.getProductByName(this.AddOrderForm.get('productName')?.value).subscribe(data=>{
      console.log(data)
      this.product=data
    })
  }
  goToPayment()
  {
    localStorage.setItem("order",JSON.stringify(this.order))
    this.router.navigate(['process-order'])
  }
}
