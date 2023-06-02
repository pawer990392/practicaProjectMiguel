import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {



  tituloAntiguo:string='Empleado Antiguos Angular';
  tituloNuevo:string='Empleado Nuevos Angular';

  empleadoAntiguos: IEmpleado[]=[
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
  ];
  empleadoAntiguos1: IEmpleado[]=[
    {
      nombre: "Eudocio",
      apellidos: "garcia Olivera",
      direccion: "calle camelia oreinte numero 122 francisco sarabia",
      suedo: 4000,
    },
   
  ];


}
