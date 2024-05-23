
// import { Component, OnInit } from '@angular/core';
// import { Hero } from '../hero';
// import { HeroService } from '../hero.service';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { RouterLink } from '@angular/router';
// import { HeroSearchComponent } from '../hero-search/hero-search.component';
// import { HttpClientJsonpModule } from '@angular/common/http';

// @Component({
//   selector: 'app-dashboard',
//   standalone:true,
//   imports:[CommonModule,RouterOutlet,RouterLink,HeroSearchComponent,HttpClientJsonpModule],
//   templateUrl: './dashboard.component.html',
//   styleUrls: [ './dashboard.component.css' ]
// })
// export class DashboardComponent implements OnInit {
//   heroes: Hero[] = [];

//   constructor(private heroService: HeroService) { }

//   ngOnInit(): void {
//     this.getHeroes();
//   }

//   getHeroes(): void {
//     this.heroService.getHeroes()
//       .subscribe(heroes => this.heroes = heroes.slice(1, 5));
//   }
// }
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/