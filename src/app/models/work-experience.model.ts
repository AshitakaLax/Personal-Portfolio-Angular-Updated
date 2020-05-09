
// information about a person.
export class WorkExperience {

  public title: string;
  public startDate: Date;
  public endDate: Date;
  public company: string;
  public companyLogoUrl: string;
  public description: string;
  // public responsiblities: string[];
  public constructor(init?:Partial<WorkExperience>) {
    Object.assign(this, init);
  }
}