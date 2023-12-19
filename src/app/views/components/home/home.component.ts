import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../../services/github.service';
import { Repository } from '../../../types/repository.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  repositories : Repository[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getRepos().subscribe({
      next: (reponse) => console.log(reponse)
    })
  }

}
