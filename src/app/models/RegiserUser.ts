// Define a class representing a RegisterUser object
export class User {
    // Properties
    private _lastName: string;
    private _firstName: string;
    private _email: string;
    private _phoneNumber: string;
    private _userName: string;
    private _password: string;
  
    // Constructor
    constructor(
      lastName: string,
      firstName: string,
      email: string,
      phoneNumber: string,
      userName: string,
      password: string
    ) {
      this._lastName = lastName;
      this._firstName = firstName;
      this._email = email;
      this._phoneNumber = phoneNumber;
      this._userName = userName;
      this._password = password;
    }
  
    // Getter and setter for lastName
    get lastName(): string {
      return this._lastName;
    }
  
    set lastName(value: string) {
      this._lastName = value;
    }
  
    // Getter and setter for firstName
    get firstName(): string {
      return this._firstName;
    }
  
    set firstName(value: string) {
      this._firstName = value;
    }
  
    // Getter and setter for email
    get email(): string {
      return this._email;
    }
  
    set email(value: string) {
      this._email = value;
    }
  
    // Getter and setter for phoneNumber
    get phoneNumber(): string {
      return this._phoneNumber;
    }
  
    set phoneNumber(value: string) {
      this._phoneNumber = value;
    }
  
    // Getter and setter for userName
    get userName(): string {
      return this._userName;
    }
  
    set userName(value: string) {
      this._userName = value;
    }
  
    // Getter and setter for password
    get password(): string {
      return this._password;
    }
  
    set password(value: string) {
      this._password = value;
    }
  }
  