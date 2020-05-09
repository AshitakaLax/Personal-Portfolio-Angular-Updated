/**
 * This is a service that will provide all of the info to be used in the various pages.
 * This way it is simple to replace all of the through the portfolio
 */

import { Injectable } from '@angular/core';
import { INFO} from '../info/person-info';
import { PersonalInfo } from '../models/personal-info.model';
import { Observable, of } from 'rxjs';
import { WorkExperience } from '../models/work-experience.model';
@Injectable({
  providedIn: 'root',
})
export class PersonalInfoService  {

  getUserInfo(): Observable<PersonalInfo>
  {
    const person:PersonalInfo = new PersonalInfo({
      firstName: 'Levi',
      lastName: 'Balling',
      email: 'leviballing@gmail.com',
      address: 'Logan, UT',
      phone: '(801)589-9795'
    });
    return of(person);
  }

  getWorkExperience(): Observable<WorkExperience[]>
  {
    const experiences:WorkExperience[] = [new WorkExperience({
      title: 'Digital Bench Test Engineer',
      company: 'L3 Communications',
      startDate: new Date('2010-9-1'),
      endDate: new Date('2012-10-1'),
      description: 'Interdisciplinary electronics and software engineer experienced in board-level design, remote sensory, device controllers, and GUI design.'
    }),
    new WorkExperience({
      title: 'Lead Software Engineer',
      company: 'ICON Health and Fitness',
      startDate: new Date('2012-10-1'),
      endDate: new Date('2016-1-1'),
      description: 'Developed fitness equipment software for Android and embedded hardware. Created fitness equipment communication protocol still in use today.'
    }),
    new WorkExperience({
      title: 'Lead Software Engineer',
      company: 'Space Dynamics Laboratory',
      startDate: new Date('2016-1-1'),
      description: 'Lead a team of 2-6 software developers in the release of MTK and SATRN Version 1.0.  Mentored various students and new hires in development of products and research concepts.'
    }),
  ];
    return of(experiences);
  }


}