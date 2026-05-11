# 🏢 Real Estate Inventory Management System

A modern, responsive web application for managing real estate inventory and parking operations with complete RERA (Real Estate Regulatory Authority) compliance.

![Next.js](https://img.shields.io/badge/Next.js-16.2.5-black)
![React](https://img.shields.io/badge/React-19.2.4-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8)

## 📋 Features

- **Project Management**: Track multiple real estate projects with detailed metrics
- **Building Inventory**: Comprehensive building and wing-level inventory tracking
- **RERA Compliance**: Complete RERA carpet area calculations and reporting
- **Unit Management**: Track unit allocations, bookings, holds, and availability
- **Parking Management**: Monitor parking space availability and allocations
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Data**: Live updates from backend API
- **Interactive UI**: Collapsible accordions, searchable projects, and filtering

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd real-estate
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
NEXT_PUBLIC_API_KEY=your-api-key-here
NEXT_PUBLIC_AUTH_TOKEN=your-auth-token-here
```

4. **Run the development server**

```bash
npm run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── api/          # API routes
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── Components/        # React components
│   │   ├── BuildingAccordion/
│   │   ├── Header/
│   │   ├── ProjectAccordion/
│   │   ├── Searchbar/
│   │   ├── Sidebar/
│   │   ├── StatusBadge/
│   │   ├── WingTable/
│   │   └── WrapperLayout/
│   ├── hooks/            # Custom React hooks
│   │   └── useInventoryData.ts
│   ├── lib/              # Utility functions
│   │   └── api.ts
│   └── types/            # TypeScript type definitions
│       └── inventory.ts
├── .env.local            # Environment variables (create this)
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **Next.js 16.2.5** - React framework with App Router
- **React 19.2.4** - UI library
- **TypeScript 5.x** - Type safety
- **Tailwind CSS 3.4.17** - Utility-first CSS framework

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📊 API Integration

The application connects to a backend API with the following endpoints:

### Project Summary

```
GET /api/InventoryParkingOverallReport/PullProjectInventoryParkingDetails
```

Returns list of all projects with summary information.

### Inventory Details

```
GET /api/InventoryParkingOverallReport/PullInventoryParkingOverallReport
```

Returns detailed inventory data for all buildings and wings.

### Authentication
All requests require:
- `ApiKey` header
- `Authorization: Bearer <token>` header

## 🎨 Component Overview

### Key Components

**WrapperLayout**
- Main layout wrapper with header and sidebar
- Handles sidebar toggle state
- Provides project selection context

**Header**
- Full-width navigation bar
- Project selector dropdown
- User profile and notifications

**Sidebar**
- Collapsible navigation menu
- Icon-based compact mode (80px)
- Expanded mode with labels (256px)

**ProjectAccordion**
- Expandable project cards
- Shows project summary metrics
- Contains building accordions

**BuildingAccordion**
- Building-level details
- Wing-by-wing breakdown
- Collapsible table views

**WingTable**
- Three-section table layout
- RERA Carpet Area tracking
- Unit counts and status
- Parking allocation

**StatusBadge**
- Color-coded status indicators
- Handles zero/null values gracefully

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS v3. Configuration is in `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### TypeScript

TypeScript configuration in `tsconfig.json` uses strict mode for type safety.

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚦 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🐛 Troubleshooting

### Tailwind CSS not working
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### API Connection Issues
1. Check `.env.local` file exists with correct values
2. Verify API endpoint is accessible
3. Check authentication token is valid and not expired

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

## 📈 Future Enhancements

- [ ] Export to Excel/PDF functionality
- [ ] Advanced filtering and search
- [ ] User authentication and authorization
- [ ] Real-time notifications
- [ ] Analytics dashboard
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Audit logs and history

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

---

**Built with ❤️ using Next.js and React**