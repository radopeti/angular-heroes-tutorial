import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  hero: Hero;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  addHero(name: string): Hero {
    this.heroService.addHero({ name } as Hero).subscribe((hero: Hero) => {
      this.hero = hero;
      console.log('this: ');
      console.log(this.hero);
    });
    return this.hero;
  }

}
