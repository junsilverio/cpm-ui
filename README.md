# BuildPro - Construction & Project Management Dashboard

A comprehensive, real-time Construction and Project Management web application built with **Angular 18**, featuring SmartAdmin-like design, responsive layouts, and dynamic data visualization.

![BuildPro Dashboard](https://github.com/user-attachments/assets/c32e98a1-2c83-437c-9025-db2022fd1e05)

## 🚀 Features

### Modern Angular Architecture
- **Angular 18** - Latest version with standalone components
- **TypeScript** - Type-safe development
- **RxJS** - Reactive programming for real-time updates
- **SCSS** - Modern styling with variables and nesting
- **Chart.js** - Interactive data visualizations

### Dashboard Components

#### Key Metrics (6 Real-time Cards)
- Total Projects (24 Active)
- Overall Progress (72%)
- Total Budget ($24.8M)
- Total Cost ($18.6M)
- Open Issues (32)
- Overdue Tasks (18)

#### Project Management
- **Project Status Overview**: Interactive donut chart
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

#### Activity Tracking
- **Recent Activities Feed**: Real-time project updates
- **Alerts & Notifications**: Priority-based alert system (High/Medium/Low)
- **Weather & Site Conditions**: 4-day forecast for construction planning

#### Financial Management
- **Budget vs Actual Chart**: Comparative analysis across projects
- **Cost Breakdown**: Detailed expense distribution
  - Labor: 35.4%
  - Materials: 28.7%
  - Equipment: 15.3%
  - Subcontractors: 12.1%
  - Other: 8.5%

#### Resource Management
- **Resource Utilization**: Circular progress indicators
  - Labor: 78%
  - Equipment: 65%
  - Materials: 82%

#### Additional Features
- **Documents Overview**: 1,247 total documents
- **Quick Actions**: 6 one-click action buttons
- **Integrations**: 8 industry-standard tools
- **My Tasks Summary**: Personal task dashboard
- **Project Phases**: Visual workflow (Planning → Design → Procurement → Construction → Closeout)

### 📱 Responsive Design

Fully responsive and optimized for all devices:
- **Desktop**: Full dashboard (1200px+)
- **Tablet**: Optimized layout (768px - 1199px)
- **Mobile**: Touch-friendly interface (320px - 767px)

#### Responsive Features
- Collapsible sidebar navigation
- Adaptive grid layouts
- Touch-optimized buttons
- Mobile-friendly charts
- Responsive typography

### 🔄 Real-time Updates

Live data updates with smooth animations:
- **Metrics**: Auto-update every 5 seconds
- **Activities**: Dynamic activity feed
- **Visual Feedback**: Pulse animations
- **RxJS Observables**: Reactive data streams

## 🛠️ Technology Stack

- **Framework**: Angular 18.2.0
- **Language**: TypeScript 5.8
- **Charts**: Chart.js 4.5.1
- **Styling**: SCSS with custom variables
- **Icons**: Font Awesome 6.4.0
- **Build Tool**: Angular CLI with esbuild
- **Package Manager**: npm 10.9.8
- **Node**: v22.23.1

## 📦 Installation

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v8.0.0 or higher)

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/junsilverio/cpm-ui.git
cd cpm-ui
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

The application will open at `http://localhost:4200`

4. **Build for production**
```bash
npm run build
```

Production files will be in the `dist/` directory.

## 📁 Project Structure

```
cpm-ui/
├── src/
│   ├── app/
│   │   ├── components/          # All UI components
│   │   │   ├── dashboard/       # Main dashboard container
│   │   │   ├── sidebar/         # Navigation sidebar
│   │   │   ├── header/          # Top header bar
│   │   │   ├── metric-card/     # Reusable metric card
│   │   │   ├── project-status-chart/
│   │   │   ├── project-timeline/
│   │   │   ├── recent-activities/
│   │   │   ├── alerts/
│   │   │   ├── weather-widget/
│   │   │   ├── budget-chart/
│   │   │   ├── cost-breakdown/
│   │   │   ├── resource-utilization/
│   │   │   ├── documents/
│   │   │   ├── quick-actions/
│   │   │   ├── integrations/
│   │   │   ├── my-tasks/
│   │   │   └── project-phases/
│   │   ├── services/            # Business logic
│   │   │   ├── data.ts         # Data service
│   │   │   └── realtime.ts     # Real-time updates
│   │   ├── models/             # TypeScript interfaces
│   │   │   └── project.model.ts
│   │   ├── app.ts              # Root component
│   │   └── app.routes.ts       # Routing configuration
│   ├── styles.scss             # Global styles
│   └── index.html              # HTML entry point
├── original/                   # Original HTML/CSS/JS version
├── angular.json                # Angular configuration
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

## 🎨 Design System

### Color Palette
```scss
--primary-color: #2E5C9A;
--secondary-color: #4A90E2;
--success-color: #27AE60;
--warning-color: #F39C12;
--danger-color: #E74C3C;
--info-color: #3498DB;
```

### Typography
- Font Family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Icon Library: Font Awesome 6.4.0

### Components
- Consistent card design with shadows
- Smooth hover transitions
- Responsive grid layouts
- Color-coded status indicators

## 🔧 Development

### Available Scripts

```bash
# Development server
npm start

# Build for production
npm run build

# Watch mode
npm run watch

# Run tests
npm test
```

### Component Architecture

All components use Angular's standalone component API:
- No need for NgModule declarations
- Direct imports in component decorators
- Simplified dependency injection

### Services

- **DataService**: Manages all application data using RxJS observables
- **RealtimeService**: Handles periodic updates and simulations

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance

- Lazy loading components
- Optimized bundle size (~464 KB)
- Smooth animations (60 FPS)
- Efficient change detection
- Tree-shaking enabled

## 🚀 Deployment

### Production Build

```bash
npm run build
```

Output will be in `dist/buildpro-cpm/`

### Deploy to GitHub Pages

```bash
ng build --base-href=/cpm-ui/
```

### Deploy to Netlify/Vercel

Simply connect your repository and set:
- Build command: `npm run build`
- Publish directory: `dist/buildpro-cpm`

## 📝 Features Roadmap

Future enhancements:
- [ ] User authentication and authorization
- [ ] Backend API integration
- [ ] WebSocket for true real-time updates
- [ ] PDF report generation
- [ ] Email notifications
- [ ] Dark mode toggle
- [ ] Multi-language support (i18n)
- [ ] Advanced filtering and search
- [ ] Data export (Excel, CSV, PDF)
- [ ] Mobile native app (Ionic/Capacitor)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Jun Silverio**
- GitHub: [@junsilverio](https://github.com/junsilverio)

## 🙏 Acknowledgments

- Inspired by SmartAdmin dashboard design
- Chart.js for powerful data visualization
- Font Awesome for comprehensive icon set
- Angular team for the amazing framework

## 📞 Support

For support, please open an issue in the GitHub repository.

---

**Version 2.0.0** | Built with Angular 18 and ❤️ for Construction Project Management
