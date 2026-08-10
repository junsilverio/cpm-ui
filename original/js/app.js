// Application State
const appState = {
    projects: [
        { name: 'Skyline Towers', type: 'Residential Complex', status: 'On Track', progress: 72, startDate: '2025-05-01', endDate: '2025-08-15', color: '#27AE60' },
        { name: 'Metro Plaza', type: 'Commercial Building', status: 'At Risk', progress: 58, startDate: '2025-05-15', endDate: '2025-08-30', color: '#F39C12' },
        { name: 'City Hospital', type: 'Healthcare Facility', status: 'At Risk', progress: 45, startDate: '2025-06-01', endDate: '2025-09-15', color: '#F39C12' },
        { name: 'Bridge Construction', type: 'Infrastructure', status: 'Delayed', progress: 35, startDate: '2025-06-15', endDate: '2025-09-30', color: '#E74C3C' },
        { name: 'School Building', type: 'Education Facility', status: 'On Track', progress: 68, startDate: '2025-07-01', endDate: '2025-10-15', color: '#27AE60' }
    ],
    activities: [
        { icon: 'check-circle', type: 'success', title: 'Concrete pour completed - Level 5', subtitle: 'Skyline Towers', time: '2 hours ago' },
        { icon: 'bolt', type: 'warning', title: 'Electrical installation in progress', subtitle: 'Metro Plaza', time: '4 hours ago' },
        { icon: 'exclamation-triangle', type: 'warning', title: 'Safety inspection conducted', subtitle: 'Bridge Construction', time: '1 day ago' },
        { icon: 'file-alt', type: 'info', title: 'Document uploaded - Site Report', subtitle: 'City Hospital', time: '1 day ago' },
        { icon: 'check-circle', type: 'success', title: 'Task completed - Foundation work', subtitle: 'School Building', time: '2 days ago' }
    ],
    alerts: [
        { type: 'high', title: 'High winds warning for construction activities', subtitle: 'Skyline Towers - Today, 2:30 PM', badge: 'High' },
        { type: 'medium', title: 'Material delivery delayed', subtitle: 'Metro Plaza - Today, 6:30 PM', badge: 'Medium' },
        { type: 'medium', title: 'Safety training required for 5 workers', subtitle: 'Bridge Construction - Yesterday, 4:30 PM', badge: 'Medium' }
    ],
    metrics: {
        totalProjects: 24,
        overallProgress: 72,
        totalBudget: 24.8,
        totalCost: 18.6,
        openIssues: 32,
        overdueTasks: 18
    }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeSidebar();
    generateTimeline();
    generateActivities();
    generateAlerts();
    initializeCharts();
    startRealTimeUpdates();
});

// Sidebar Toggle
function initializeSidebar() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }
    
    // Close sidebar on mobile when clicking outside
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 992) {
            if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
                sidebar.classList.remove('active');
            }
        }
    });
}

// Generate Timeline
function generateTimeline() {
    const timelineContainer = document.getElementById('timelineItems');
    if (!timelineContainer) return;
    
    const today = new Date('2025-07-15'); // Simulated current date
    
    appState.projects.forEach(project => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        const projectInfo = document.createElement('div');
        projectInfo.className = 'timeline-project';
        projectInfo.innerHTML = `
            <div class="timeline-project-name">${project.name}</div>
            <div class="timeline-project-type">${project.type}</div>
        `;
        
        const barContainer = document.createElement('div');
        barContainer.className = 'timeline-bar-container';
        
        // Calculate bar position and width
        const start = new Date(project.startDate);
        const end = new Date(project.endDate);
        const totalDays = 120; // May to Aug = ~120 days
        const startOffset = Math.max(0, (start - new Date('2025-05-01')) / (1000 * 60 * 60 * 24));
        const duration = (end - start) / (1000 * 60 * 60 * 24);
        
        const leftPercent = (startOffset / totalDays) * 100;
        const widthPercent = (duration / totalDays) * 100;
        
        const bar = document.createElement('div');
        bar.className = 'timeline-bar';
        bar.style.left = `${leftPercent}%`;
        bar.style.width = `${widthPercent}%`;
        bar.style.background = project.color;
        
        barContainer.appendChild(bar);
        
        // Add today marker on first item
        if (project === appState.projects[0]) {
            const todayOffset = (today - new Date('2025-05-01')) / (1000 * 60 * 60 * 24);
            const todayPercent = (todayOffset / totalDays) * 100;
            
            const todayMarker = document.createElement('div');
            todayMarker.className = 'timeline-bar today-marker';
            todayMarker.style.left = `${todayPercent}%`;
            
            const todayLabel = document.createElement('div');
            todayLabel.className = 'timeline-bar today-label';
            todayLabel.style.left = `${todayPercent}%`;
            todayLabel.textContent = 'Today';
            
            barContainer.appendChild(todayMarker);
            barContainer.appendChild(todayLabel);
        }
        
        item.appendChild(projectInfo);
        item.appendChild(barContainer);
        timelineContainer.appendChild(item);
    });
}

// Generate Activities
function generateActivities() {
    const activitiesContainer = document.getElementById('activitiesList');
    if (!activitiesContainer) return;
    
    appState.activities.forEach(activity => {
        const item = document.createElement('div');
        item.className = 'activity-item';
        item.innerHTML = `
            <div class="activity-icon ${activity.type}">
                <i class="fas fa-${activity.icon}"></i>
            </div>
            <div class="activity-content">
                <div class="activity-title">${activity.title}</div>
                <div class="activity-subtitle">${activity.subtitle}</div>
            </div>
            <div class="activity-time">${activity.time}</div>
        `;
        activitiesContainer.appendChild(item);
    });
}

// Generate Alerts
function generateAlerts() {
    const alertsContainer = document.getElementById('alertsList');
    if (!alertsContainer) return;
    
    appState.alerts.forEach(alert => {
        const item = document.createElement('div');
        item.className = `alert-item ${alert.type}`;
        item.innerHTML = `
            <div class="alert-icon">
                <i class="fas fa-exclamation-circle"></i>
            </div>
            <div class="alert-content">
                <div class="alert-title">${alert.title}</div>
                <div class="alert-subtitle">${alert.subtitle}</div>
            </div>
            <div class="alert-badge">${alert.badge}</div>
        `;
        alertsContainer.appendChild(item);
    });
}

// Initialize Charts
function initializeCharts() {
    createProjectStatusChart();
    createBudgetChart();
    createCostBreakdownChart();
}

// Project Status Chart (Donut)
function createProjectStatusChart() {
    const ctx = document.getElementById('projectStatusChart');
    if (!ctx) return;
    
    new Chart(ctx, {
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
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = Math.round((value / total) * 100);
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
    
    // Add center text
    const centerText = {
        id: 'centerText',
        beforeDraw: function(chart) {
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
            
            ctx.font = '14px Arial';
            ctx.fillText('Projects', centerX, centerY + 30);
            ctx.restore();
        }
    };
    Chart.register(centerText);
}

// Budget vs Actual Chart
function createBudgetChart() {
    const ctx = document.getElementById('budgetChart');
    if (!ctx) return;
    
    new Chart(ctx, {
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
                        callback: function(value) {
                            return '$' + value + 'M';
                        }
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
                        label: function(context) {
                            return context.dataset.label + ': $' + context.parsed.y + 'M';
                        }
                    }
                }
            }
        }
    });
}

// Cost Breakdown Chart
function createCostBreakdownChart() {
    const ctx = document.getElementById('costBreakdownChart');
    if (!ctx) return;
    
    new Chart(ctx, {
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
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            return `${label}: ${value}%`;
                        }
                    }
                }
            }
        }
    });
    
    // Add center text
    const centerText = {
        id: 'centerText2',
        beforeDraw: function(chart) {
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
    };
    Chart.register(centerText);
}

// Real-time Updates
function startRealTimeUpdates() {
    // Simulate real-time updates every 5 seconds
    setInterval(function() {
        updateMetrics();
        updateActivities();
    }, 5000);
    
    // Update time stamps
    setInterval(function() {
        updateTimeStamps();
    }, 60000); // Every minute
}

function updateMetrics() {
    // Simulate small changes to metrics
    const metrics = document.querySelectorAll('.metric-card h2');
    metrics.forEach(metric => {
        const currentValue = parseFloat(metric.textContent.replace(/[^0-9.]/g, ''));
        if (!isNaN(currentValue)) {
            // Add slight random variation
            const change = (Math.random() - 0.5) * 2;
            const newValue = Math.max(0, currentValue + change);
            
            // Animate the change
            metric.classList.add('updating');
            setTimeout(() => {
                if (metric.textContent.includes('$')) {
                    metric.textContent = '$' + newValue.toFixed(1) + 'M';
                } else if (metric.textContent.includes('%')) {
                    metric.textContent = Math.round(newValue) + '%';
                } else {
                    metric.textContent = Math.round(newValue);
                }
                metric.classList.remove('updating');
            }, 500);
        }
    });
}

function updateActivities() {
    // Randomly add new activity (10% chance)
    if (Math.random() < 0.1) {
        const newActivities = [
            { icon: 'tools', type: 'info', title: 'Equipment maintenance completed', subtitle: 'Site Management', time: 'Just now' },
            { icon: 'user-check', type: 'success', title: 'New worker onboarded', subtitle: 'HR Department', time: 'Just now' },
            { icon: 'clipboard-check', type: 'success', title: 'Quality inspection passed', subtitle: 'Quality Control', time: 'Just now' }
        ];
        
        const randomActivity = newActivities[Math.floor(Math.random() * newActivities.length)];
        appState.activities.unshift(randomActivity);
        
        // Keep only last 5 activities
        if (appState.activities.length > 5) {
            appState.activities.pop();
        }
        
        // Regenerate activities list
        const activitiesContainer = document.getElementById('activitiesList');
        if (activitiesContainer) {
            activitiesContainer.innerHTML = '';
            generateActivities();
        }
    }
}

function updateTimeStamps() {
    // Update "time ago" stamps
    const timeElements = document.querySelectorAll('.activity-time');
    timeElements.forEach(element => {
        let text = element.textContent;
        if (text.includes('hours ago')) {
            const hours = parseInt(text);
            element.textContent = (hours + 1) + ' hours ago';
        }
    });
}

// Add data to window for debugging
window.appState = appState;

console.log('BuildPro Construction & Project Management Dashboard Loaded');
console.log('Real-time updates enabled');
