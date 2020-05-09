
// information about a person.
export class PersonalInfo {

  public firstName: string;
  public lastName: string;
  public email: string;
  public phone: string;
  public address: string;
  public constructor(init?:Partial<PersonalInfo>) {
    Object.assign(this, init);
  }
}