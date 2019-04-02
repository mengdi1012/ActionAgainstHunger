import { Component } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(["/homepage/public"]).then( (e) => {
      if (e) {
        console.log("Navigation to login is successful!");
      } else {
        console.log("Navigation to login has failed!");
      }
    });
  }
}
  