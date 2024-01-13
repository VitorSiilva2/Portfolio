import { Component } from '@angular/core';


@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent {
  slides = [
    {
      img: "assets/img/Java.svg",
      name: "Java"
  },
    {
      img: "assets/img/angular.svg",
      name: "Angular"
    },
    {
      img: "assets/img/kotlin.svg",
      name:"Kotlin"
    },
    {
      img: "assets/img/python.svg",
      name:"Python"
    }
  ];
  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "horizontal": true
  };
  

  
 
  afterChange() {
    console.log('afterChange');
  }
  
  beforeChange() {
    console.log('beforeChange');
  }
}