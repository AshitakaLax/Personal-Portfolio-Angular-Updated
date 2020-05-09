import { Component, OnInit } from '@angular/core';
import { PersonalInfoService } from '../../services/personal-info.service';
import { PersonalInfo } from 'src/app/models/personal-info.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  person:PersonalInfo;
  constructor(private personalInfoService:PersonalInfoService) { }

  ngOnInit() {
    this.personalInfoService.getUserInfo().subscribe(info => {
      this.person = info;
    });
  }

}
