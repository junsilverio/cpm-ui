import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';
import { ProjectPhase } from '../../models/project.model';

@Component({
  selector: 'app-project-phases',
  imports: [CommonModule],
  templateUrl: './project-phases.html',
  styleUrl: './project-phases.scss',
})
export class ProjectPhases implements OnInit {
  phases: ProjectPhase[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.phases = this.dataService.getProjectPhases();
  }
}
