import { Injectable } from '@angular/core';
import {HEROES} from './heroes-mock';
import {Observable, of} from 'rxjs';
import {Hero} from './hero';
import {MessageService} from '../messages/message.service';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService, private route: ActivatedRoute) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('Heroes data has sent.');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add('Hero (' + id + ') data has sent.');
    return of(HEROES.find(hero => id === hero.id));
  }
}
