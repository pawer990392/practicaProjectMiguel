import { Component, Input } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  etiquetaBorrado: string = '';



  //por medio de las innterpolizacion
  //uso de directivas
  //Tema de llamado decorador input que podemos recibir informacion de otro componete y recibirlo a otro componente

  @Input()
  empleados: IEmpleado[] = [];
  
  @Input()
  titulo:string='';
  

  borrar = () => {
    const emp = this.empleados.shift();
    if(emp!==undefined){
      this.etiquetaBorrado =emp?.nombre+' '+emp?.apellidos;
    }else{
      this.etiquetaBorrado='';
    }
    //uso de directivas 
    //decoradores
    //de padre a hijo imput
    
  }
  /**
     {
      nombre: "miguel angel",
      apellidos: "garcia martinez",
      direccion: "calle camelia oreinte numero 122 francisco sarabia",
      suedo: 4000,
    },
    {
      nombre: "angelina",
      apellidos: "martinez garcia",
      direccion: "calle camelia oreinte numero 122 francisco sarabia",
      suedo: 3000,
    },
    {
      nombre: "mariana",
      apellidos: "vidal sanchez",
      direccion: "calle francisco romero numero 123 colonia la paz",
      suedo: 12000,
    },
    {
      nombre: "yael",
      apellidos: "garcia cuesta",
      direccion: "calle ramon caballero sin numero san rafael ",
      suedo: 67000,
    }
   */


}
