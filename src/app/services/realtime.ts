import { Injectable } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { DataService } from './data';
import { Activity, Metrics } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class RealtimeService {
  private updateInterval = 5000; // 5 seconds
  private metricsUpdateSubject = new Subject<Metrics>();
  public metricsUpdate$ = this.metricsUpdateSubject.asObservable();

  private newActivities: Activity[] = [
    { icon: 'tools', type: 'info', title: 'Equipment maintenance completed', subtitle: 'Site Management', time: 'Just now' },
    { icon: 'user-check', type: 'success', title: 'New worker onboarded', subtitle: 'HR Department', time: 'Just now' },
    { icon: 'clipboard-check', type: 'success', title: 'Quality inspection passed', subtitle: 'Quality Control', time: 'Just now' },
    { icon: 'truck', type: 'info', title: 'Materials delivered to site', subtitle: 'Supply Chain', time: 'Just now' },
    { icon: 'hard-hat', type: 'warning', title: 'Safety briefing scheduled', subtitle: 'Safety Department', time: 'Just now' }
  ];

  constructor(private dataService: DataService) {}

  startRealTimeUpdates(): void {
    // Update metrics every 5 seconds
    interval(this.updateInterval).subscribe(() => {
      this.updateMetrics();
      this.maybeAddActivity();
    });
  }

  private updateMetrics(): void {
    // Simulate small changes to metrics
    this.dataService.getMetrics().subscribe(currentMetrics => {
      const updatedMetrics: Metrics = {
        totalProjects: this.randomChange(currentMetrics.totalProjects, 0, 1, 0),
        overallProgress: this.randomChange(currentMetrics.overallProgress, 0, 2, 0),
        totalBudget: this.randomChange(currentMetrics.totalBudget, 0, 0.5, 1),
        totalCost: this.randomChange(currentMetrics.totalCost, 0, 0.3, 1),
        openIssues: this.randomChange(currentMetrics.openIssues, -1, 2, 0),
        overdueTasks: this.randomChange(currentMetrics.overdueTasks, -1, 1, 0)
      };

      this.dataService.updateMetrics(updatedMetrics);
      this.metricsUpdateSubject.next(updatedMetrics);
    }).unsubscribe();
  }

  private maybeAddActivity(): void {
    // 10% chance to add a new activity
    if (Math.random() < 0.1) {
      const randomActivity = this.newActivities[Math.floor(Math.random() * this.newActivities.length)];
      this.dataService.addActivity({ ...randomActivity });
    }
  }

  private randomChange(current: number, min: number, max: number, decimals: number): number {
    const change = Math.random() * (max - min) + min;
    const newValue = Math.max(0, current + change);
    return decimals > 0 ? parseFloat(newValue.toFixed(decimals)) : Math.round(newValue);
  }
}
