export class SignupInfo {
  email: string;
  firstName: string;
  lastName: string;
  role: string[];
  birthday: Date;
  password: string;

  constructor(email: string, firstName: string, lastName: string, role: string[], birthday: Date, password: string) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.birthday = birthday;
    this.password = password;
  }
}
