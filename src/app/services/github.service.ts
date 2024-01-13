import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { Repository } from '../types/repository.interface';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) {}

  getRepos(): Observable<Repository[]> {
    return this.httpClient.get<Repository[]>('https://api.github.com/users/VitorSiilva2/repos').pipe(
      catchError(error => {
        console.error('Erro ao carregar os repositórios do GitHub', error);
        return [];
      }),
      mergeMap(repos => {
        const observables = repos.map(repo => this.buscarLinguagens(repo.languages_url));
        return forkJoin(observables).pipe(
          map(languagesArray => {
            return repos.map((repo, index) => ({ ...repo, languages: languagesArray[index] }));
          })
        );
      })
    );
  }

  private buscarLinguagens(languagesUrl: string): Observable<string[]> {
    return this.httpClient.get<{ [key: string]: number }>(languagesUrl).pipe(
      map(languages => Object.keys(languages))
    );
  }
}
