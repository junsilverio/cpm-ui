export interface Project {
  name: string;
  type: string;
  status: 'On Track' | 'At Risk' | 'Delayed' | 'Completed';
  progress: number;
  startDate: string;
  endDate: string;
  color: string;
}

export interface Activity {
  icon: string;
  type: 'success' | 'warning' | 'info' | 'danger';
  title: string;
  subtitle: string;
  time: string;
}

export interface Alert {
  type: 'high' | 'medium' | 'low';
  title: string;
  subtitle: string;
  badge: string;
}

export interface Metrics {
  totalProjects: number;
  overallProgress: number;
  totalBudget: number;
  totalCost: number;
  openIssues: number;
  overdueTasks: number;
}

export interface Task {
  status: 'pending' | 'in-progress' | 'review' | 'completed';
  count: number;
}

export interface Document {
  type: 'drawings' | 'reports' | 'contracts' | 'photos';
  count: number;
}

export interface Resource {
  name: string;
  utilization: number;
  color: string;
}

export interface WeatherDay {
  day: string;
  temp: string;
  icon: string;
  condition: string;
}

export interface ProjectPhase {
  name: string;
  count: number;
  color: string;
}

export interface QuickAction {
  icon: string;
  label: string;
  color: string;
}

export interface Integration {
  name: string;
  icon: string;
  connected: boolean;
}
