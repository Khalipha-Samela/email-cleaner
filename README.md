# Email Cleaner

Email Cleaner is a modern Gmail management application that helps users organize, analyze, and clean their inbox efficiently. It securely connects to Gmail using Google OAuth and provides an intuitive dashboard for managing emails.

## Features

### Authentication

* Google OAuth 2.0 sign-in
* Secure session management with Passport.js
* Protected dashboard routes
* User authentication status endpoint
* Logout functionality

### Gmail Integration

* Connect to Gmail securely
* Fetch live inbox emails
* Retrieve sender, subject, date, snippets, and labels
* Gmail API integration using Google's official SDK

### Dashboard

* Modern SaaS-inspired interface
* Responsive layout
* Sidebar navigation
* Inbox overview
* Search interface
* Email list
* Statistics cards
* User profile section

## Technology Stack

### Frontend

* React
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* Lucide React

### Backend

* Node.js
* Express
* Passport.js
* Google OAuth 2.0
* Express Session
* Google APIs SDK
* CORS
* Dotenv

## Project Structure

```text
email-cleaner/

├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── email/
│   │   │   └── ProtectedRoute.jsx
│   │   ├── hooks/
│   │   │   └── useEmails.js
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── gmail.js
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server/
│   ├── config/
│   │   └── passport.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── gmailRoutes.js
│   ├── services/
│   │   └── gmailService.js
│   ├── server.js
│   └── .env
│
├── .gitignore
└── README.md
```

## API Endpoints

### Authentication

| Method | Endpoint                | Description              |
| ------ | ----------------------- | ------------------------ |
| GET    | `/auth/google`          | Start Google OAuth login |
| GET    | `/auth/google/callback` | Google OAuth callback    |
| GET    | `/auth/user`            | Get authenticated user   |
| GET    | `/auth/logout`          | Log out user             |

### Gmail

| Method | Endpoint            | Description                 |
| ------ | ------------------- | --------------------------- |
| GET    | `/api/gmail/emails` | Fetch recent Gmail messages |

## Current Progress

### Completed

* ✅ Express backend
* ✅ React frontend
* ✅ Tailwind CSS UI
* ✅ Google OAuth authentication
* ✅ Gmail API integration
* ✅ Protected routes
* ✅ User session management
* ✅ Live Gmail inbox retrieval

### In Progress

* 🚧 Email categorization
* 🚧 Inbox improvements
* 🚧 Search and filtering

### Planned

* AI-powered email classification
* Bulk archive
* Bulk delete
* Smart unsubscribe detection
* Email analytics
* Storage insights
* Automated cleanup rules

## Getting Started

### Install dependencies

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### Configure environment variables

Create a `.env` file inside the `server` folder:

```env
PORT=5000

GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret

CLIENT_URL=http://localhost:5173
```

### Start the application

Backend:

```bash
cd server
npm run dev
```

Frontend:

```bash
cd client
npm run dev
```

## Roadmap

* [x] Modern React dashboard
* [x] Google OAuth login
* [x] Gmail API integration
* [x] Protected routes
* [x] Fetch live Gmail emails
* [ ] Email categorization engine
* [ ] Smart cleanup recommendations
* [ ] Bulk archive and delete
* [ ] AI-powered inbox assistant
* [ ] Email analytics dashboard

## Status

🚧 Active Development

**Current Version:** v0.4

The next milestone is transforming the dashboard into a complete Gmail inbox experience with intelligent email categorization and bulk cleanup tools.
