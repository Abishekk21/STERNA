# 🔐 Sterna Selyek - Security Management System

<div align="center">

![Version](https://img.shields.io/badge/version-2.0.2-blue.svg)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite)
![License](https://img.shields.io/badge/license-Proprietary-red.svg)

A modern, responsive web application for comprehensive security device and access management.

### 🌐 [Live Demo](https://sterna-security.netlify.app/) | [Documentation](#installation) | [Features](#features)

**Demo Access**: This is a frontend demonstration. Login with any valid email format and password (minimum 8 characters).

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Authentication](#authentication)
- [Pages Overview](#pages-overview)
- [Screenshots](#screenshots)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**Sterna Selyek** is a comprehensive security management system designed for monitoring and controlling security devices, managing access permissions, tracking vehicles, and overseeing user activities across multiple locations. Built with modern web technologies, it offers a seamless, intuitive interface for security administrators and managers.

### Key Highlights

- 🔒 **Secure Authentication** - Login with email/password or OTP
- 📊 **Real-time Dashboard** - Monitor assets, locations, and user activities
- 🗺️ **Location Management** - Manage multiple locations with geofencing
- 🔑 **Access Control** - Grant and revoke access permissions
- 🚗 **Vehicle Tracking** - Monitor vehicle trips and movements
- 👥 **User Management** - Manage users, roles, and permissions
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

---

## ✨ Features

### 🔐 Authentication & Security
- Email/password login with validation
- OTP-based authentication support
- Session persistence with localStorage
- Protected routes and navigation guards
- Logout confirmation modal
- Browser back button protection

### 📊 Dashboard
- **6 Summary Cards**: Total Assets, Locations, Access, Users, Lock Groups, User Groups
- **Analytics Panels**: Assets in Stock, Lock Openings, Lock Status Count
- Real-time status indicators
- Network status monitoring

### 🗺️ Locations Management
- **Lock Mapping**: Manage lock assignments and configurations
- **Lock Groups**: Organize locks into logical groups
- **Geofencing**: Define and monitor geographical boundaries
- **Gateway Mapping**: Configure gateway devices
- Location search and filtering
- Multi-tab interface for organized management

### 🔑 Access Management
- Grant and revoke access permissions
- Permanent and temporary access types
- Access expiry tracking
- User-lock assignment monitoring

### 🚗 Trips & Vehicles
- Real-time trip tracking
- Vehicle management and status monitoring
- Trip history with distance tracking
- In-progress trip monitoring

### 🌐 Gateway Management
- Monitor gateway devices
- Online/offline status tracking
- IP and MAC address management
- Firmware version tracking
- Last seen timestamps

### 👥 User Management
- 7 users across different roles (Admin, Manager, User, Security, Maintenance)
- User status tracking (Active/Inactive)
- Last login monitoring
- Role-based permissions

### 🔐 Keys & Levels Management
- Physical, Digital, and Master key types
- Key issuance and revocation
- Access level configuration
- Priority-based level management

### ⚙️ Settings
- **General Settings**: Organization details, timezone, language
- **Security**: Two-factor authentication, password policies, session timeout
- **Notifications**: Email, SMS, push notification preferences
- **System Information**: Version, database status, server uptime

---

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **React Router DOM 6.20.0** - Client-side routing
- **Font Awesome** - Icon library
- **Vite 5.0.8** - Build tool and dev server

### Styling
- **Plain CSS** - Custom styles with CSS variables
- **CSS Grid & Flexbox** - Modern layout techniques
- **Responsive Design** - Mobile-first approach

### State Management
- **React Context API** - Authentication state management
- **localStorage** - Session persistence

### Development Tools
- **Vite** - Fast development server with HMR
- **ESLint** - Code quality
- **Git** - Version control

---

## 📦 Installation

### 🌐 Try Live Demo First

**No installation needed!** Try the live demo at [https://sterna-security.netlify.app/login](https://sterna-security.netlify.app/login)

Login with any valid email and password (8+ characters) to explore all features.

---

### 💻 Local Development Setup

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**

### Clone the Repository

```bash
git clone https://github.com/Abishekk21/STERNA.git
cd STERNA
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🚀 Usage

### 🌐 Live Demo

**Access the application**: [https://sterna-security.netlify.app/login](https://sterna-security.netlify.app/login)

### Demo Credentials

This is a **frontend demonstration** with client-side validation only. No backend authentication is required.

**Email**: Any valid email format
- Examples: `admin@sterna.com`, `user@example.com`, `demo@test.com`
- Must contain `@` and domain (e.g., `.com`, `.org`)

**Password**: Minimum 8 characters
- Examples: `password123`, `demo12345`, `test1234`
- Any combination of letters and numbers

> 💡 **Note**: Since this is a frontend-only demo, credentials are validated for format only. Any valid email and 8+ character password will grant access to the system.

### Navigation

1. **Login Page** → Enter credentials → Navigate to Dashboard
2. **Sidebar Navigation** → Click any icon to navigate between pages
3. **Logout** → Click logout button (top right) → Confirm logout

### Key Features to Try

- 🔍 **Search**: Filter data in tables using search boxes
- 📊 **Dashboard**: View summary cards and analytics
- 🗺️ **Locations**: Switch between Lock Mapping, Lock Group, Geofence, and Gateway tabs
- 👥 **User Management**: Browse 7 users with different roles
- ⚙️ **Settings**: Explore 4 settings tabs (General, Security, Notifications, System)

---

## 📁 Project Structure

```
STERNA/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable components
│   │   ├── AppSidebar.jsx          # Main navigation sidebar
│   │   ├── AppHeader.jsx           # Page header with logout
│   │   ├── AppFooter.jsx           # Footer with network status
│   │   ├── LogoutConfirmModal.jsx  # Logout confirmation
│   │   ├── ProtectedRoute.jsx      # Route protection
│   │   ├── NavigationGuard.jsx     # Navigation security
│   │   ├── SummaryCard.jsx         # Dashboard summary cards
│   │   ├── DashboardPanel.jsx      # Dashboard panels
│   │   ├── LocationSidebar.jsx     # Location selection panel
│   │   ├── LockMappingTable.jsx    # Lock mapping table
│   │   ├── LockGroupTable.jsx      # Lock group table
│   │   ├── GeofenceTable.jsx       # Geofence table
│   │   └── GatewayMappingTable.jsx # Gateway mapping table
│   │
│   ├── context/             # React Context
│   │   └── AuthContext.jsx         # Authentication context
│   │
│   ├── pages/               # Page components
│   │   ├── LoginPage.jsx           # Login page
│   │   ├── DashboardPage.jsx       # Dashboard
│   │   ├── LocationsPage.jsx       # Locations management
│   │   ├── AccessPage.jsx          # Access management
│   │   ├── TripsPage.jsx           # Trip tracking
│   │   ├── GatewaysPage.jsx        # Gateway management
│   │   ├── VehiclesPage.jsx        # Vehicle management
│   │   ├── UsersPage.jsx           # User management
│   │   ├── KeysPage.jsx            # Key management
│   │   ├── LevelsPage.jsx          # Level management
│   │   └── SettingsPage.jsx        # Application settings
│   │
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
│
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

---

## 🔐 Authentication

### Authentication Flow

1. **Login** → User enters email and password
2. **Validation** → Client-side form validation
3. **Authentication** → Auth state stored in localStorage
4. **Session** → Persists across page refreshes
5. **Protection** → All routes except login require authentication
6. **Logout** → Confirmation modal → Clear session → Redirect to login

### Session Management

- **Storage**: localStorage
- **Persistence**: Survives page refresh
- **Expiry**: Manual logout only
- **Protection**: Browser back button guard
- **URL Protection**: Manual URL changes show logout confirmation

### Security Features

- ✅ Protected routes
- ✅ Session persistence
- ✅ Logout confirmation
- ✅ Browser navigation guard
- ✅ URL manipulation protection
- ✅ Client-side validation

---

## 📄 Pages Overview

| Page | Route | Description | Key Features |
|------|-------|-------------|--------------|
| **Login** | `/login` | User authentication | Email/password validation, OTP option |
| **Dashboard** | `/dashboard` | System overview | 6 summary cards, 3 analytics panels |
| **Locations** | `/locations` | Location management | 4 tabs: Lock Mapping, Lock Group, Geofence, Gateway |
| **Access** | `/access` | Access control | Grant/revoke access, expiry tracking |
| **Trips** | `/trips` | Trip monitoring | In-progress trips, trip history |
| **Gateways** | `/gateways` | Gateway devices | Online/offline status, firmware info |
| **Vehicles** | `/vehicles` | Vehicle fleet | Vehicle details, driver assignments |
| **Users** | `/users` | User management | 7 users, roles, last login tracking |
| **Keys** | `/keys` | Key management | Physical/Digital/Master keys |
| **Levels** | `/levels` | Access levels | Level configuration, priorities |
| **Settings** | `/settings` | App configuration | 4 tabs: General, Security, Notifications, System |

---

## 🎨 Design System

### Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Cyan | `#20B8E8` | Primary actions, links, icons |
| Sidebar Cyan | `#35BFE8` | Sidebar background |
| Light Cyan | `#DFF7FC` | Selected states, highlights |
| Green | `#20B486` | Success, active status |
| Orange | `#F5A623` | Warnings, in-progress |
| Pink | `#E74691` | Errors, required fields |
| Purple | `#8954E8` | User groups |
| Slate | `#64748B` | Lock groups |
| White | `#FFFFFF` | Cards, buttons |
| Page Background | `#EAF9FD` | Main background with hexagon pattern |

### Typography

- **Font Family**: System sans-serif (Inter, Segoe UI, Roboto)
- **Headings**: Bold, 18-24px
- **Body**: Regular, 13-14px
- **Labels**: Medium, 11-12px, uppercase

### Layout

- **Sidebar Width**: 66px
- **Location Panel**: 266px (Locations page only)
- **Card Radius**: 6-8px
- **Button Radius**: 4-6px
- **Max Width**: 1280px (content)

---

## 📸 Screenshots

### Login Page
Clean, centered login form with email/password validation and OTP option.

### Dashboard
Six colored summary cards displaying key metrics, followed by three analytics panels.

### Locations Management
Three-column layout with sidebar, location selector, and tabbed workspace for lock management.

### User Management
Comprehensive table showing 7 users with roles, status, and last login information.

---

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install dependencies
npm install
```

### Development Server

- Runs on `http://localhost:5173/` (or next available port)
- Hot Module Replacement (HMR) enabled
- Fast refresh for React components

### Code Style

- ES6+ JavaScript
- Functional React components with hooks
- CSS with custom properties (variables)
- Component-specific CSS files
- Responsive design principles

---

## 🚀 Deployment

### Live Application

The application is deployed and accessible at:

**🌐 [https://sterna-security.netlify.app/login](https://sterna-security.netlify.app/login)**

### Deployment Platform

- **Platform**: Netlify
- **Status**: Live
- **Auto-Deploy**: Enabled from `main` branch
- **SSL**: Enabled (HTTPS)

### Deployment Steps (for reference)

1. Build the production version:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify

3. Configure build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Node Version**: 16 or higher

### Environment

- **Type**: Static Site (SPA)
- **Runtime**: Client-side only
- **Authentication**: Frontend validation only
- **Data**: Demo data (no backend)

---

## 🤝 Contributing

This is a proprietary project for **Sterna Security Devices Private Limited**. Contributions are limited to authorized developers only.

### Development Workflow

1. Create a feature branch from `development`
2. Make changes and test thoroughly
3. Commit with descriptive messages
4. Create a pull request to `development`
5. After review, merge to `main`

---

## 📝 License

**Proprietary License**

Copyright © 2025 Sterna Security Devices Private Limited. All rights reserved.

This software is the property of Sterna Security Devices Private Limited. Unauthorized copying, distribution, or modification is strictly prohibited.

---

## 📞 Contact & Support

For questions, issues, or feature requests, please contact:

**Sterna Security Devices Private Limited**
- 🌐 Website: Coming soon
- 📧 Email: support@sterna.com
- 📱 Version: 2.0.2

---

## 🎉 Acknowledgments

- **React Team** - For the amazing React library
- **Vite Team** - For the blazing-fast build tool
- **Font Awesome** - For comprehensive icon library
- **Development Team** - For building this comprehensive system

---

<div align="center">

**Sterna Selyek v2.0.2**

Built with ❤️ by Sterna Security Devices Private Limited

🔒 Security • 🚀 Performance • 💎 Quality

</div>
