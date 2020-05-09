import { Component, OnInit } from '@angular/core';
import { WorkExperience } from 'src/app/models/work-experience.model';
import { PersonalInfoService } from 'src/app/services/personal-info.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences:WorkExperience[];
  constructor(private personalInfoService:PersonalInfoService) { }

  ngOnInit() {
    this.personalInfoService.getWorkExperience().subscribe(info => {
      this.experiences = info;
    });
  }

}
