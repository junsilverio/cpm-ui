import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  Project,
  Activity,
  Alert,
  Metrics,
  Task,
  Document,
  Resource,
  WeatherDay,
  ProjectPhase,
  QuickAction,
  Integration
} from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private projectsSubject = new BehaviorSubject<Project[]>(this.getInitialProjects());
  private activitiesSubject = new BehaviorSubject<Activity[]>(this.getInitialActivities());
  private alertsSubject = new BehaviorSubject<Alert[]>(this.getInitialAlerts());
  private metricsSubject = new BehaviorSubject<Metrics>(this.getInitialMetrics());

  public projects$: Observable<Project[]> = this.projectsSubject.asObservable();
  public activities$: Observable<Activity[]> = this.activitiesSubject.asObservable();
  public alerts$: Observable<Alert[]> = this.alertsSubject.asObservable();
  public metrics$: Observable<Metrics> = this.metricsSubject.asObservable();

  private getInitialProjects(): Project[] {
    return [
      { name: 'Skyline Towers', type: 'Residential Complex', status: 'On Track', progress: 72, startDate: '2025-05-01', endDate: '2025-08-15', color: '#27AE60' },
      { name: 'Metro Plaza', type: 'Commercial Building', status: 'At Risk', progress: 58, startDate: '2025-05-15', endDate: '2025-08-30', color: '#F39C12' },
      { name: 'City Hospital', type: 'Healthcare Facility', status: 'At Risk', progress: 45, startDate: '2025-06-01', endDate: '2025-09-15', color: '#F39C12' },
      { name: 'Bridge Construction', type: 'Infrastructure', status: 'Delayed', progress: 35, startDate: '2025-06-15', endDate: '2025-09-30', color: '#E74C3C' },
      { name: 'School Building', type: 'Education Facility', status: 'On Track', progress: 68, startDate: '2025-07-01', endDate: '2025-10-15', color: '#27AE60' }
    ];
  }

  private getInitialActivities(): Activity[] {
    return [
      { icon: 'check-circle', type: 'success', title: 'Concrete pour completed - Level 5', subtitle: 'Skyline Towers', time: '2 hours ago' },
      { icon: 'bolt', type: 'warning', title: 'Electrical installation in progress', subtitle: 'Metro Plaza', time: '4 hours ago' },
      { icon: 'exclamation-triangle', type: 'warning', title: 'Safety inspection conducted', subtitle: 'Bridge Construction', time: '1 day ago' },
      { icon: 'file-alt', type: 'info', title: 'Document uploaded - Site Report', subtitle: 'City Hospital', time: '1 day ago' },
      { icon: 'check-circle', type: 'success', title: 'Task completed - Foundation work', subtitle: 'School Building', time: '2 days ago' }
    ];
  }

  private getInitialAlerts(): Alert[] {
    return [
      { type: 'high', title: 'High winds warning for construction activities', subtitle: 'Skyline Towers - Today, 2:30 PM', badge: 'High' },
      { type: 'medium', title: 'Material delivery delayed', subtitle: 'Metro Plaza - Today, 6:30 PM', badge: 'Medium' },
      { type: 'medium', title: 'Safety training required for 5 workers', subtitle: 'Bridge Construction - Yesterday, 4:30 PM', badge: 'Medium' }
    ];
  }

  private getInitialMetrics(): Metrics {
    return {
      totalProjects: 24,
      overallProgress: 72,
      totalBudget: 24.8,
      totalCost: 18.6,
      openIssues: 32,
      overdueTasks: 18
    };
  }

  getProjects(): Observable<Project[]> {
    return this.projects$;
  }

  getActivities(): Observable<Activity[]> {
    return this.activities$;
  }

  getAlerts(): Observable<Alert[]> {
    return this.alerts$;
  }

  getMetrics(): Observable<Metrics> {
    return this.metrics$;
  }

  getTasks(): Task[] {
    return [
      { status: 'pending', count: 12 },
      { status: 'in-progress', count: 8 },
      { status: 'review', count: 3 },
      { status: 'completed', count: 15 }
    ];
  }

  getDocuments(): Document[] {
    return [
      { type: 'drawings', count: 342 },
      { type: 'reports', count: 456 },
      { type: 'contracts', count: 198 },
      { type: 'photos', count: 251 }
    ];
  }

  getResources(): Resource[] {
    return [
      { name: 'Labor', utilization: 78, color: '#4A90E2' },
      { name: 'Equipment', utilization: 65, color: '#F39C12' },
      { name: 'Materials', utilization: 82, color: '#27AE60' }
    ];
  }

  getWeather(): WeatherDay[] {
    return [
      { day: 'Mon', temp: '28°C', icon: 'sun', condition: 'Sunny' },
      { day: 'Tue', temp: '26°C', icon: 'cloud-sun', condition: 'Partly Cloudy' },
      { day: 'Wed', temp: '24°C', icon: 'cloud-rain', condition: 'Rainy' },
      { day: 'Thu', temp: '27°C', icon: 'sun', condition: 'Sunny' }
    ];
  }

  getProjectPhases(): ProjectPhase[] {
    return [
      { name: 'Planning', count: 4, color: '#E74C3C' },
      { name: 'Design', count: 6, color: '#F39C12' },
      { name: 'Procurement', count: 5, color: '#F5A623' },
      { name: 'Construction', count: 7, color: '#27AE60' },
      { name: 'Closeout', count: 2, color: '#4A90E2' }
    ];
  }

  getQuickActions(): QuickAction[] {
    return [
      { icon: 'folder-plus', label: 'New Project', color: '#4A90E2' },
      { icon: 'tasks', label: 'Create Task', color: '#27AE60' },
      { icon: 'upload', label: 'Upload Document', color: '#F39C12' },
      { icon: 'user-plus', label: 'Add Resource', color: '#9B59B6' },
      { icon: 'file-chart-line', label: 'Create Report', color: '#E74C3C' },
      { icon: 'clipboard-check', label: 'Site Inspection', color: '#3498DB' }
    ];
  }

  getIntegrations(): Integration[] {
    return [
      { name: 'AutoCAD', icon: 'drafting-compass', connected: true },
      { name: 'Revit', icon: 'building', connected: true },
      { name: 'Primavera', icon: 'project-diagram', connected: true },
      { name: 'MS Project', icon: 'sitemap', connected: true },
      { name: 'Dropbox', icon: 'dropbox', connected: true },
      { name: 'SharePoint', icon: 'share-alt', connected: true },
      { name: 'Power BI', icon: 'chart-bar', connected: false },
      { name: 'OneDrive', icon: 'cloud', connected: true }
    ];
  }

  // Methods to update data (for real-time updates)
  updateMetrics(metrics: Metrics): void {
    this.metricsSubject.next(metrics);
  }

  addActivity(activity: Activity): void {
    const currentActivities = this.activitiesSubject.value;
    currentActivities.unshift(activity);
    if (currentActivities.length > 5) {
      currentActivities.pop();
    }
    this.activitiesSubject.next([...currentActivities]);
  }

  updateProjects(projects: Project[]): void {
    this.projectsSubject.next(projects);
  }

  updateAlerts(alerts: Alert[]): void {
    this.alertsSubject.next(alerts);
  }
}
