import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';
import { Resource } from '../../models/project.model';

@Component({
  selector: 'app-resource-utilization',
  imports: [CommonModule],
  templateUrl: './resource-utilization.html',
  styleUrl: './resource-utilization.scss',
})
export class ResourceUtilization implements OnInit {
  resources: Resource[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.resources = this.dataService.getResources();
  }
}
