import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';
import { MetricCard } from '../metric-card/metric-card';
import { ProjectStatusChart } from '../project-status-chart/project-status-chart';
import { ProjectTimeline } from '../project-timeline/project-timeline';
import { RecentActivities } from '../recent-activities/recent-activities';
import { Alerts } from '../alerts/alerts';
import { WeatherWidget } from '../weather-widget/weather-widget';
import { BudgetChart } from '../budget-chart/budget-chart';
import { CostBreakdown } from '../cost-breakdown/cost-breakdown';
import { ResourceUtilization } from '../resource-utilization/resource-utilization';
import { Documents } from '../documents/documents';
import { QuickActions } from '../quick-actions/quick-actions';
import { Integrations } from '../integrations/integrations';
import { MyTasks } from '../my-tasks/my-tasks';
import { ProjectPhases } from '../project-phases/project-phases';
import { DataService } from '../../services/data';
import { RealtimeService } from '../../services/realtime';
import { Metrics } from '../../models/project.model';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    Sidebar,
    Header,
    MetricCard,
    ProjectStatusChart,
    ProjectTimeline,
    RecentActivities,
    Alerts,
    WeatherWidget,
    BudgetChart,
    CostBreakdown,
    ResourceUtilization,
    Documents,
    QuickActions,
    Integrations,
    MyTasks,
    ProjectPhases
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  sidebarActive = false;
  metrics: Metrics = {
    totalProjects: 24,
    overallProgress: 72,
    totalBudget: 24.8,
    totalCost: 18.6,
    openIssues: 32,
    overdueTasks: 18
  };

  constructor(
    private dataService: DataService,
    private realtimeService: RealtimeService
  ) {}

  ngOnInit(): void {
    // Subscribe to metrics updates
    this.dataService.getMetrics().subscribe(metrics => {
      this.metrics = metrics;
    });

    // Start real-time updates
    this.realtimeService.startRealTimeUpdates();
  }

  toggleSidebar(): void {
    this.sidebarActive = !this.sidebarActive;
  }
}
