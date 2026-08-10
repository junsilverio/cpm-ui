import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-timeline',
  imports: [CommonModule],
  templateUrl: './project-timeline.html',
  styleUrl: './project-timeline.scss',
})
export class ProjectTimeline implements OnInit {
  projects: Project[] = [];
  today: Date = new Date('2025-07-15'); // Simulated current date
  startDate: Date = new Date('2025-05-01');
  totalDays: number = 120;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }

  calculateBarPosition(project: Project): { left: string; width: string } {
    const start = new Date(project.startDate);
    const end = new Date(project.endDate);
    
    const startOffset = Math.max(0, (start.getTime() - this.startDate.getTime()) / (1000 * 60 * 60 * 24));
    const duration = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
    
    const leftPercent = (startOffset / this.totalDays) * 100;
    const widthPercent = (duration / this.totalDays) * 100;
    
    return {
      left: `${leftPercent}%`,
      width: `${widthPercent}%`
    };
  }

  getTodayPosition(): string {
    const todayOffset = (this.today.getTime() - this.startDate.getTime()) / (1000 * 60 * 60 * 24);
    return `${(todayOffset / this.totalDays) * 100}%`;
  }
}
