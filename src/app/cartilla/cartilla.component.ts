import { Component } from '@angular/core';

@Component({
  selector: 'app-cartilla',
  templateUrl: './cartilla.component.html',
  styleUrl: './cartilla.component.css'
})
export class CartillaComponent {
  checkboxChecked = false;

  onCheckboxChange(event: Event): void {
    this.checkboxChecked = (event.target as HTMLInputElement).checked;
  }

  redirectToGoogleForm(): void {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdMopgdr8NZWjnOydu7K8K_8RoZYnYmCe2Q4UI7fqY1fcY8xw/viewform?usp=sf_link','_blank');
  }

}
