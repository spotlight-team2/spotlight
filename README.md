# Spotlight Website

A modern full-stack web application with React/Next.js frontend and Express.js backend.

## 🚀 Project Structure

```
spotlight/
├── frontend/                 # Next.js 14 frontend application
│   ├── src/
│   │   ├── app/             # App Router pages and layouts
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Additional pages (if using Pages Router)
│   │   ├── hooks/           # Custom React hooks
│   │   ├── utils/           # Utility functions
│   │   ├── services/        # API service functions
│   │   ├── styles/          # CSS and styling files
│   │   └── assets/          # Images, icons, fonts
│   ├── public/              # Static assets
│   ├── package.json
│   ├── next.config.ts
│   ├── tailwind.config.ts
│   └── Dockerfile
├── backend/                  # Express.js backend API
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── models/          # Database models
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Custom middleware
│   │   ├── services/        # Business logic
│   │   ├── utils/           # Utility functions
│   │   └── config/          # Configuration files
│   ├── tests/               # Backend tests
│   ├── package.json
│   └── Dockerfile
├── docs/                    # Project documentation
├── scripts/                 # Build and deployment scripts
├── tests/                   # Integration tests
├── deployment/              # Deployment configurations
├── docker-compose.yml       # Docker services
└── env.example             # Environment variables template
```

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - UI library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication
- **bcryptjs** - Password hashing

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Docker and Docker Compose (optional)
- MongoDB (if not using Docker)

### Development Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd spotlight
   ```

2. **Install dependencies**
   ```bash
   # Frontend
   cd frontend
   npm install
   
   # Backend
   cd ../backend
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

4. **Start development servers**
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run dev
   
   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

### Using Docker

1. **Start all services**
   ```bash
   docker-compose up -d
   ```

2. **View logs**
   ```bash
   docker-compose logs -f
   ```

3. **Stop services**
   ```bash
   docker-compose down
   ```

## 📱 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Backend
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## 🌐 URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **API Health Check**: http://localhost:3001/api/health

## 📝 API Endpoints

- `GET /` - API status
- `GET /api/health` - Health check

## 🔧 Development

### Adding New Features

1. **Frontend Components**: Add to `frontend/src/components/`
2. **API Routes**: Add to `backend/src/routes/`
3. **Database Models**: Add to `backend/src/models/`
4. **Services**: Add to `backend/src/services/`

### Code Style

- Use TypeScript for type safety
- Follow ESLint configuration
- Use Prettier for code formatting
- Write tests for new features

## 🚀 Deployment

The project includes Docker configuration for easy deployment:

1. **Production Build**
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

2. **Environment Variables**
   - Set production environment variables
   - Configure database connection
   - Set up SSL certificates

## 📚 Documentation

- [Frontend Documentation](docs/frontend.md)
- [Backend API Documentation](docs/api.md)
- [Deployment Guide](docs/deployment.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
