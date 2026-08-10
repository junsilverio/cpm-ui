import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';
import { Task } from '../../models/project.model';

@Component({
  selector: 'app-my-tasks',
  imports: [CommonModule],
  templateUrl: './my-tasks.html',
  styleUrl: './my-tasks.scss',
})
export class MyTasks implements OnInit {
  tasks: Task[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.tasks = this.dataService.getTasks();
  }

  getColorForStatus(status: string): string {
    const colors: Record<string, string> = {
      'pending': '#F39C12',
      'in-progress': '#4A90E2',
      'review': '#9B59B6',
      'completed': '#27AE60'
    };
    return colors[status] || '#95A5A6';
  }
}
