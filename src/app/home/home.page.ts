import { Component, OnInit } from '@angular/core';
import { ApiStreamingPeliculasService } from '../service/api-streaming-peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{
  datos:any=[];

  constructor(private api:ApiStreamingPeliculasService) {}
  
  ngOnInit() {
    const datos = localStorage.getItem('datos')
    if(datos){
      this.datos = JSON.parse(datos);
      console.log('obtiene')
    }else{
      this.api.obtenerDatos().subscribe((datos)=>{
        console.log('no carga')
        this.datos=datos;
        localStorage.setItem('datos',JSON.stringify(this.datos))
      });
    }
  }
}
