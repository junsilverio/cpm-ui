import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';
import { Integration } from '../../models/project.model';

@Component({
  selector: 'app-integrations',
  imports: [CommonModule],
  templateUrl: './integrations.html',
  styleUrl: './integrations.scss',
})
export class Integrations implements OnInit {
  integrations: Integration[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.integrations = this.dataService.getIntegrations();
  }
}
