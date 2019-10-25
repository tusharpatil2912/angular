import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) { }

  categoryId: number;

  ngOnInit() {
    this.categoryId=this.activeRoute.snapshot.params.id;
  }

  backToList(){
    this.router.navigate(['/categories','list']);
  }

}
