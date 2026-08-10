import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  @Output() menuToggle = new EventEmitter<void>();
  isCollapsed = false;

  menuItems = [
    { icon: 'chart-line', label: 'Dashboard', badge: '6', active: true, route: '#dashboard' },
    { icon: 'folder', label: 'Projects', arrow: true, route: '#projects' },
    { icon: 'tasks', label: 'Tasks & Schedule', arrow: true, route: '#tasks' },
    { icon: 'users', label: 'Resources', arrow: true, route: '#resources' },
    { icon: 'file-alt', label: 'Documents', arrow: true, route: '#documents' },
    { icon: 'dollar-sign', label: 'Financial', arrow: true, route: '#financial' },
    { icon: 'chart-bar', label: 'Reports', arrow: true, route: '#reports' },
    { icon: 'calendar-alt', label: 'Calendar', route: '#calendar' },
    { icon: 'bell', label: 'Notifications', badge: '12', route: '#notifications' },
    { icon: 'cog', label: 'Settings', route: '#settings' }
  ];

  toggleMenu(): void {
    this.isCollapsed = !this.isCollapsed;
    this.menuToggle.emit();
  }
}
