import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  constructor(private heroService: HeroService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    this.route.params.subscribe(
      (params: Params) => {
        this.heroService.getHero(+params.id).subscribe(
          (hero: Hero) => {
            this.hero = hero;
          });
      });
  }

  goBack() {
    this.location.back();
  }
}
