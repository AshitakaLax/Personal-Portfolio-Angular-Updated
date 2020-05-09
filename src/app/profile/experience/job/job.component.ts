import { Component, Input } from '@angular/core';
import { WorkExperience } from 'src/app/models/work-experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class JobComponent {
  @Input() job: WorkExperience;

}
