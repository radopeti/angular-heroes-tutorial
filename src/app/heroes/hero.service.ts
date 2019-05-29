import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Hero} from './hero';
import {MessageService} from '../messages/message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';
  constructor(private messageService: MessageService, private httpClient: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    /*this.messageService.add('Heroes data has sent.');
    return of(HEROES);*/
    return this.httpClient.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(() => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', [])));
  }

  addHero(hero: Hero): Observable<Hero> {
    console.log(hero);
    return this.httpClient.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((newer: Hero) => this.log(newer + ' added')),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  getHero(id: number): Observable<Hero> {
    const url = this.heroesUrl + '/' + id;
    console.log(`${ id }`);
    return this.httpClient.get<Hero>(url).pipe(
      tap(() => this.log('fetched hero with id=${id}')),
      catchError(this.handleError<Hero>('getHero id=${id}'))
    );
  }

  private log(message: string) {
    this.messageService.add(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
