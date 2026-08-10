import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

@Component({
  selector: 'app-cost-breakdown',
  imports: [CommonModule],
  templateUrl: './cost-breakdown.html',
  styleUrl: './cost-breakdown.scss',
})
export class CostBreakdown implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart: Chart | undefined;

  ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    const config: any = {
      type: 'doughnut',
      data: {
        labels: ['Labor', 'Materials', 'Equipment', 'Subcontractors', 'Other'],
        datasets: [{
          data: [35.4, 28.7, 15.3, 12.1, 8.5],
          backgroundColor: ['#4A90E2', '#F5A623', '#E74C3C', '#9B59B6', '#95A5A6'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        cutout: '60%',
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: (context: any) => {
                const label = context.label || '';
                const value = context.parsed || 0;
                return `${label}: ${value}%`;
              }
            }
          }
        }
      },
      plugins: [{
        id: 'centerText',
        beforeDraw: (chart: any) => {
          const ctx = chart.ctx;
          ctx.save();
          const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
          const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
          
          ctx.font = 'bold 28px Arial';
          ctx.fillStyle = '#2C3E50';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('$18.6M', centerX, centerY);
          ctx.restore();
        }
      }]
    };

    this.chart = new Chart(ctx, config);
  }
}
