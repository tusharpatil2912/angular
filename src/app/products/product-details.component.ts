import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
    ) { }

    productId:number;

  ngOnInit() {
    this.productId=this.activeRoute.snapshot.params.id;
    //console.log(this.activeRoute);
  }

  backToList(){
    this.router.navigate(['/products','list']);
  }

}
