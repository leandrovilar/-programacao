import { Component, Input, OnInit } from '@angular/core';
import { WeatherDatas } from 'src/app/models/interfaces/WeatheDatas';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent implements OnInit{
@Input() weatherDatasInput!: WeatherDatas;

ngOnInit(): void {
    console.log(
      'DADOS RECEBIDOS DO COMPONENTE PAI - WEATHE-CARD:',
      this.weatherDatasInput
    );
}
}
