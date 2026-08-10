import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';
import { Activity } from '../../models/project.model';

@Component({
  selector: 'app-recent-activities',
  imports: [CommonModule],
  templateUrl: './recent-activities.html',
  styleUrl: './recent-activities.scss',
})
export class RecentActivities implements OnInit {
  activities: Activity[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getActivities().subscribe(activities => {
      this.activities = activities;
    });
  }
}
