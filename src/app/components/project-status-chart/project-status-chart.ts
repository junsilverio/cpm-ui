import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-project-status-chart',
  imports: [CommonModule],
  templateUrl: './project-status-chart.html',
  styleUrl: './project-status-chart.scss',
})
export class ProjectStatusChart implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart: Chart | undefined;

  ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: 'doughnut',
      data: {
        labels: ['On Track', 'At Risk', 'Delayed', 'Completed'],
        datasets: [{
          data: [12, 6, 4, 2],
          backgroundColor: ['#27AE60', '#F39C12', '#E74C3C', '#4A90E2'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        cutout: '70%',
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label || '';
                const value = context.parsed || 0;
                const total = (context.dataset.data as number[]).reduce((a, b) => a + b, 0);
                const percentage = Math.round((value / total) * 100);
                return `${label}: ${value} (${percentage}%)`;
              }
            }
          }
        }
      },
      plugins: [{
        id: 'centerText',
        beforeDraw: (chart) => {
          const ctx = chart.ctx;
          ctx.save();
          const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
          const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
          
          ctx.font = 'bold 32px Arial';
          ctx.fillStyle = '#2C3E50';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('24', centerX, centerY - 10);
          
          ctx.font = '14px Arial';
          ctx.fillStyle = '#7F8C8D';
          ctx.fillText('Total', centerX, centerY + 15);
          ctx.fillText('Projects', centerX, centerY + 30);
          ctx.restore();
        }
      }]
    };

    this.chart = new Chart(ctx, config);
  }
}
