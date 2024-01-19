import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private passwords: { [key: string]: string [] }= {
    '/soporte/MCE1': ['password1', 'lucas123','mce1'],
    '/soporte/FH200': ['password2','fh200'],
    '/soporte/UTL63': ['password3','utl63'],
    '/soporte/M70': ['password4','m70'],

    // '/soporte/MCE1': [''],
    // '/soporte/FH200': [''],
    // '/soporte/UTL63': [''],
    // '/soporte/M70': [''],
  };

  authenticate(url: string, password: string): boolean {
    const validPasswords = this.passwords[url];
    return validPasswords && validPasswords.includes(password);
  }
}