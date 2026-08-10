import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';
import { Alert } from '../../models/project.model';

@Component({
  selector: 'app-alerts',
  imports: [CommonModule],
  templateUrl: './alerts.html',
  styleUrl: './alerts.scss',
})
export class Alerts implements OnInit {
  alerts: Alert[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAlerts().subscribe(alerts => {
      this.alerts = alerts;
    });
  }
}
