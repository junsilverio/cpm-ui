import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-metric-card',
  imports: [CommonModule],
  templateUrl: './metric-card.html',
  styleUrl: './metric-card.scss',
})
export class MetricCard {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() value: string | number = '';
  @Input() change: string = '';
  @Input() changeType: 'positive' | 'negative' | 'neutral' = 'neutral';
  @Input() color: string = '#4A90E2';
  @Input() isUpdating: boolean = false;
}
