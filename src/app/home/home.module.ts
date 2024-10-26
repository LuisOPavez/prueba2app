import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {  HttpClientModule } from '@angular/common/http';
import { ApiStreamingPeliculasService } from '../service/api-streaming-peliculas.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule,
  ],
  providers:[ApiStreamingPeliculasService],
  declarations: [HomePage]
})
export class HomePageModule {}