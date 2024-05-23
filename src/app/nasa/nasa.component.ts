import { Component, OnInit } from '@angular/core';
import { NasaService } from '../services/nasa.service';
import { NasaApodResponse } from '../models/nasa.models';
@Component({
  selector: 'app-nasa',
  standalone: true,
  imports: [],
  templateUrl: './nasa.component.html',
  styleUrl: './nasa.component.scss',
})
export class NasaComponent implements OnInit {
  imgOfTheDayUrl: string = '';

  constructor(private nasaService: NasaService) {}

  ngOnInit() {
    this.nasaService.getImageOfTheDay().subscribe((data: NasaApodResponse) => {
      // vérifie si le type de la propriété media.type est de type image
      if (data.media_type === 'image') {
        this.imgOfTheDayUrl = data.url;
      }
      // Permet de modéliser la data reçue
      console.log(data);
    });
  }
}
