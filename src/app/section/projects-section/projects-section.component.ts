import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { catchError, of } from 'rxjs';
import { Repository } from '../../types/repository.interface';


@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.css'
})
export class ProjectsSectionComponent implements OnInit {

  repositories: Repository[] = [];

  constructor(private gitHubService: GithubService) {}


  ngOnInit(): void {
    this.findRepositories();
  }


  findRepositories() {
    this.gitHubService.getRepos().pipe(
      catchError(error => { 
        console.error('Erro ao carregar os repositórios do GitHub', error);
        return of([]); // Retorna um array vazio em caso de erro
      })
    ).subscribe(
      (data) => {
        //this.repositories = data;
        const allowedRepositoryNames = ['PeopleManager', 'StorageSystem', 'TalkieMessage', 'NetflixRemake'];
        this.repositories = data.filter(repo => allowedRepositoryNames.includes(repo.name));
      }
    );
      }

      openRepository(htmlURL: string) {window.open(htmlURL, '_blank');}

      showAllProjects = false;

      toggleShowAllProjects() {
        this.showAllProjects = !this.showAllProjects;
      }
}
