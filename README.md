# BuildPro - Construction & Project Management Dashboard

A comprehensive, real-time Construction and Project Management web application with SmartAdmin-like design, featuring responsive layouts and dynamic data visualization.

![BuildPro Dashboard](https://github.com/user-attachments/assets/c32e98a1-2c83-437c-9025-db2022fd1e05)

## 🌟 Features

### Dashboard Overview
- **Real-time Metrics**: Live updates for 6 key performance indicators
  - Total Projects (24 Active)
  - Overall Progress (72%)
  - Total Budget ($24.8M)
  - Total Cost ($18.6M)
  - Open Issues (32)
  - Overdue Tasks (18)

### Project Management
- **Project Status Overview**: Interactive donut chart showing project distribution
  - On Track: 12 projects (50%)
  - At Risk: 6 projects (25%)
  - Delayed: 4 projects (17%)
  - Completed: 2 projects (8%)

- **Project Timeline**: Gantt-style visualization with 5 active projects
  - Skyline Towers (Residential Complex)
  - Metro Plaza (Commercial Building)
  - City Hospital (Healthcare Facility)
  - Bridge Construction (Infrastructure)
  - School Building (Education Facility)

### Activity & Alerts
- **Recent Activities Feed**: Real-time updates on project activities
- **Alerts & Notifications**: Priority-based alert system (High/Medium/Low)
- **Weather & Site Conditions**: 4-day weather forecast for construction planning

### Financial Management
- **Budget vs Actual Chart**: Comparative analysis across all projects
- **Cost Breakdown**: Detailed expense distribution
  - Labor: 35.4%
  - Materials: 28.7%
  - Equipment: 15.3%
  - Subcontractors: 12.1%
  - Other: 8.5%

### Resource Management
- **Resource Utilization**: Circular progress indicators
  - Labor: 78%
  - Equipment: 65%
  - Materials: 82%

### Document Management
- **Documents Overview**: Quick access to 1,247 documents
  - Drawings: 342
  - Reports: 456
  - Contracts: 198
  - Photos: 251

### Quick Actions
Six one-click action buttons for common tasks:
- New Project
- Create Task
- Upload Document
- Add Resource
- Create Report
- Site Inspection

### Integrations
Connected with 8 industry-standard tools:
- AutoCAD
- Revit
- Primavera
- MS Project
- Dropbox
- SharePoint
- Power BI
- OneDrive

### Task Management
- **My Tasks Summary**: Personal task dashboard
  - Pending: 12
  - In Progress: 8
  - Review: 3
  - Completed: 15

### Project Phases
Visual workflow showing project distribution across 5 phases:
- Planning (4 projects)
- Design (6 projects)
- Procurement (5 projects)
- Construction (7 projects)
- Closeout (2 projects)

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full dashboard with all features (1200px+)
- **Tablet**: Optimized layout with stacked sections (768px - 1199px)
- **Mobile**: Touch-friendly interface with hamburger menu (320px - 767px)

### Responsive Features
- Collapsible sidebar navigation
- Adaptive grid layouts
- Touch-optimized buttons
- Mobile-friendly charts
- Responsive typography

## 🔄 Real-time Updates

The dashboard features live data updates:
- **Metrics**: Auto-update every 5 seconds with smooth animations
- **Activities**: New activities added dynamically
- **Time Stamps**: Automatic time progression
- **Visual Feedback**: Pulse animations for updating elements

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/junsilverio/cpm-ui.git
cd cpm-ui
```

2. Open `index.html` in your web browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

That's it! No build process or dependencies required.

## 📁 Project Structure

```
cpm-ui/
├── index.html          # Main HTML file with dashboard structure
├── css/
│   └── styles.css      # Complete styling with responsive breakpoints
├── js/
│   └── app.js          # JavaScript for charts, real-time updates, and interactivity
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Dynamic functionality
- **Chart.js**: Data visualization library
- **Font Awesome**: Icon library

## 🎨 Design Features

- **Color Scheme**: Professional blue and green palette
- **Typography**: Segoe UI for clarity and readability
- **Icons**: Font Awesome 6.4.0
- **Shadows**: Subtle depth with consistent shadow system
- **Animations**: Smooth transitions and hover effects

## 🔧 Customization

### Changing Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #2E5C9A;
    --secondary-color: #4A90E2;
    --success-color: #27AE60;
    /* ... more variables ... */
}
```

### Modifying Data
Edit the `appState` object in `js/app.js`:
```javascript
const appState = {
    projects: [...],
    activities: [...],
    alerts: [...],
    metrics: {...}
};
```

### Adding New Features
The application is modular and easy to extend:
1. Add HTML markup in `index.html`
2. Style it in `css/styles.css`
3. Add functionality in `js/app.js`

## 📊 Charts & Visualizations

### Project Status Chart
- Type: Doughnut chart
- Shows: Distribution of projects by status
- Center text: Total project count

### Budget vs Actual Chart
- Type: Bar chart
- Shows: Budget comparison across projects
- Labels: Project names

### Cost Breakdown Chart
- Type: Doughnut chart
- Shows: Cost distribution by category
- Center text: Total cost

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Future Enhancements

Potential features for future versions:
- User authentication and authorization
- Database integration for persistent data
- WebSocket integration for true real-time updates
- PDF report generation
- Email notifications
- Mobile app (React Native)
- Dark mode
- Multi-language support
- Advanced filtering and search
- Data export (Excel, CSV, PDF)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Jun Silverio**
- GitHub: [@junsilverio](https://github.com/junsilverio)

## 🙏 Acknowledgments

- Inspired by SmartAdmin dashboard design
- Chart.js for powerful data visualization
- Font Awesome for comprehensive icon set

## 📞 Support

For support, please open an issue in the GitHub repository.

---

**Version 1.0.0** | Built with ❤️ for Construction Project Management
