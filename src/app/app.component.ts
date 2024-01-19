import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Blotta-ST';
  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      let element = document.querySelector('.class-name')
      
      // Manipulating the DOM here

      document.addEventListener("DOMContentLoaded", () => {
         // Obtén todos los elementos de la lista
         const navItems = document.querySelectorAll('.nav-link');
    
         // Agrega un evento de clic a cada elemento de la lista
         navItems.forEach(function (item) {
             item.addEventListener('click', function () {
                 // Elimina la clase 'active' de todos los elementos
                 navItems.forEach(function (navItem) {
                     navItem.classList.remove('active');
                 });
     
                 // Agrega la clase 'active' solo al elemento clicado
                 item.classList.add('active');
             });
         });

        if ('ontouchstart' in document.documentElement) {
          let contadorApariciones = 0;
          let intervalId: NodeJS.Timeout;

          function mostrarTexto() {
            const popElement = document.getElementById("pop") as HTMLElement;

            popElement.style.visibility = "visible";

            setTimeout(() => {
              popElement.style.visibility = "hidden";
              contadorApariciones++;

              if (contadorApariciones === 2) {
                clearInterval(intervalId);
              }
            }, 3000); // Ocultar después de 2 segundos
          }

          mostrarTexto();
          intervalId = setInterval(mostrarTexto, 6000);
        }
      });
    }
  }
}
