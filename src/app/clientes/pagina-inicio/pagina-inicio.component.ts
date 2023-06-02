import { Component } from '@angular/core';
import { IClientes } from '../interfaces/cliente';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.css']
})
export class PaginaInicioComponent {


  nuevoCliente: IClientes = {
    nombre: '',
    credito: 0,
  }



  agregar = () => {

  console.log(this.nuevoCliente);
  }
}
/*
  agregar=(evento:any)=>{
    evento.preventDefault();
   alert("Hay hay mensaje");
   console.log("Vamos por allia");
  } 
}
*/

