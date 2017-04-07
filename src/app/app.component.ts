import { Component, OnInit } from '@angular/core';
import { FormControl,ReactiveFormsModule  } from '@angular/forms';
import {RouterModule,Routes,ActivatedRoute} from "@angular/router"
import { Observable }        from 'rxjs/Observable';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  constructor(private heroService: HeroService) {
    
  }
  color='green';
  heroes: Hero[];
  myControl = new FormControl();
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => { this.heroes = heroes;
        this.filteredOptions = this.myControl.valueChanges
         .startWith(null)
         .map(hero => hero && typeof hero === 'object' ? hero.name : hero)
         .map(name => name ? this.filter(name) : this.heroes.slice());});
  }
  filteredOptions: Observable<Hero[]>;
  ngOnInit(): void {
    this.getHeroes();
    


  }

  filter(name: string): Hero[] {
      return this.heroes.filter(hero => new RegExp(name, 'gi').test(hero.name)); 
   }
  displayFn(hero: Hero): string {

    return hero ? hero.name : '';
  }

  
}
console.log(ActivatedRoute);

