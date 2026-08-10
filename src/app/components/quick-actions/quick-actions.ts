import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';
import { QuickAction } from '../../models/project.model';

@Component({
  selector: 'app-quick-actions',
  imports: [CommonModule],
  templateUrl: './quick-actions.html',
  styleUrl: './quick-actions.scss',
})
export class QuickActions implements OnInit {
  actions: QuickAction[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.actions = this.dataService.getQuickActions();
  }

  onActionClick(action: QuickAction): void {
    console.log('Action clicked:', action.label);
  }
}
