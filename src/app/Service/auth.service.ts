import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private passwords: { [key: string]: string [] }= {
    '/soporte/MCE1': ['password1', 'lucas123'],
    '/soporte/FH200': ['password2'],
    '/soporte/UTL63': ['password3'],
    '/soporte/ME70': ['password4'],
  };

  authenticate(url: string, password: string): boolean {
    const validPasswords = this.passwords[url];
    return validPasswords && validPasswords.includes(password);
  }
}