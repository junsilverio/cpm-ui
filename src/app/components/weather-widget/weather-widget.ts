import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';
import { WeatherDay } from '../../models/project.model';

@Component({
  selector: 'app-weather-widget',
  imports: [CommonModule],
  templateUrl: './weather-widget.html',
  styleUrl: './weather-widget.scss',
})
export class WeatherWidget implements OnInit {
  weatherDays: WeatherDay[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.weatherDays = this.dataService.getWeather();
  }
}
