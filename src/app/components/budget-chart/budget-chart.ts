import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

@Component({
  selector: 'app-budget-chart',
  imports: [CommonModule],
  templateUrl: './budget-chart.html',
  styleUrl: './budget-chart.scss',
})
export class BudgetChart implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart: Chart | undefined;

  ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    const config: any = {
      type: 'bar',
      data: {
        labels: ['Skyline Towers', 'Metro Plaza', 'City Hospital', 'Bridge Construction', 'School Building'],
        datasets: [
          {
            label: 'Budget',
            data: [10, 8, 6, 9, 7],
            backgroundColor: '#4A90E2',
            borderRadius: 4
          },
          {
            label: 'Actual',
            data: [7, 6, 4, 8, 5],
            backgroundColor: '#27AE60',
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value: any) => '$' + value + 'M'
            },
            grid: {
              display: true,
              color: '#F0F0F0'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              boxWidth: 12,
              padding: 15
            }
          },
          tooltip: {
            callbacks: {
              label: (context: any) => context.dataset.label + ': $' + context.parsed.y + 'M'
            }
          }
        }
      }
    };

    this.chart = new Chart(ctx, config);
  }
}
