import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private passwords: { [key: string]: string [] }= {
    '/fallas/MCE1': ['password1', 'lucas123'],
    '/fallas/FH200': ['password2'],
    '/fallas/UTL63': ['password3'],
    '/fallas/ME70': ['password4'],
  };

  authenticate(url: string, password: string): boolean {
    const validPasswords = this.passwords[url];
    return validPasswords && validPasswords.includes(password);
  }
}