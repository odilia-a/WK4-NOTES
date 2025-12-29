# Notes App - Full Stack MERN

A complete full-stack MERN (MongoDB, Express, React, Node.js) notes application with user authentication via Clerk. Create, manage, and organize your notes with a modern web interface.

## 🎯 Project Overview

This is a learning project demonstrating a complete MERN stack application. Users can authenticate securely using Clerk, create and manage their personal notes, and access them across devices. The app features a clean, responsive UI and a RESTful backend API.

## 📋 Features

### Frontend
- 🔐 Secure authentication with Clerk
- ✏️ Create, read, update, and delete notes
- 🎨 Modern, responsive UI with Tailwind CSS
- ♿ Accessible components using Radix UI
- 🔄 Real-time updates without page refresh
- 📱 Mobile-friendly design

### Backend
- 🚀 Express.js REST API
- 📦 MongoDB database with Mongoose
- 🔒 CORS security
- ⚡ Fast and reliable note operations
- 🗂️ User-based note organization

## 🏗️ Project Structure

```
wk4-notes/
├── backend/                    # Node.js/Express API server
│   ├── src/
│   │   ├── server.js          # Express app setup
│   │   ├── config/
│   │   │   └── db.js          # MongoDB connection
│   │   ├── models/
│   │   │   └── Notes.js       # Note schema & model
│   │   └── routes/
│   │       └── notes.js       # Note API endpoints
│   ├── package.json
│   └── .env (create this)
│
├── frontend/                   # React/Vite web interface
│   ├── src/
│   │   ├── components/
│   │   │   ├── NewNoteDialog.jsx
│   │   │   ├── NoteCard.jsx
│   │   │   └── ui/            # Reusable UI components
│   │   ├── pages/
│   │   │   └── Dashboard.jsx
│   │   ├── lib/
│   │   │   ├── api.js         # API client
│   │   │   └── utils.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── .env.local (create this)
│
└── README.md (this file)
```

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express 5.2** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 9.0** - ODM for MongoDB
- **CORS 2.8** - Cross-origin resource sharing
- **Dotenv 17** - Environment variable management
- **Nodemon 3.1** - Development auto-reload

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Axios 1.13** - HTTP client
- **Clerk 5.59** - Authentication & user management
- **Lucide React** - Icon library

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ installed
- MongoDB Atlas account (or local MongoDB)
- Clerk account for authentication
- Git installed

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in the backend directory:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/notes
PORT=5000
ALLOWED_ORIGIN=http://localhost:5173
```

4. Start the development server:
```bash
npm run dev
```

The backend API will run at `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file in the frontend directory:
```env
VITE_API_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

Get your Clerk key from [Clerk Dashboard](https://dashboard.clerk.com)

4. Start the development server:
```bash
npm run dev
```

The frontend will run at `http://localhost:5173`

## 📡 API Endpoints

All endpoints are under `/api/notes`

### GET /api/notes
List notes (optionally filtered by user)

**Query Parameters:**
- `userId` (optional) - Filter notes by user ID

**Response:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "userId": "user_123",
    "title": "My Note",
    "content": "Note content here",
    "createdAt": "2025-12-29T10:00:00Z",
    "updatedAt": "2025-12-29T10:00:00Z"
  }
]
```

### POST /api/notes
Create a new note

**Request Body:**
```json
{
  "title": "Note Title",
  "content": "Note content",
  "userId": "user_123",
  "userEmail": "user@example.com"
}
```

**Response:** Created note object

### PUT /api/notes/:id
Update an existing note

**Request Body:**
```json
{
  "title": "Updated Title",
  "content": "Updated content"
}
```

**Response:** Updated note object

### DELETE /api/notes/:id
Delete a note

**Response:**
```json
{
  "ok": true
}
```

## 🗄️ Database Schema

### Notes Collection

```javascript
{
  _id: ObjectId,
  userId: String,           // User identifier from Clerk
  title: String,           // Required
  content: String,         // Optional, defaults to ""
  createdAt: Date,         // Auto-managed by Mongoose
  updatedAt: Date          // Auto-managed by Mongoose
}
```

**Indexes:**
- `userId` - Fast user filtering
- `userId + createdAt` - Optimized for user's notes sorted by date

## 🔐 Authentication

This app uses **Clerk** for authentication:
- Sign up with email/password or social providers
- User data is managed by Clerk
- User ID from Clerk is passed to the backend for note association
- Notes are associated with users via Clerk user IDs

## 📝 Available Scripts

### Backend
```bash
npm run dev      # Start with auto-reload (nodemon)
npm start        # Start production server
```

### Frontend
```bash
npm run dev      # Start development server with HMR
npm run build    # Create production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## 🐛 Troubleshooting

### 500 Error on API calls
- ✅ Ensure backend is running on port 5000
- ✅ Check `VITE_API_URL` matches backend address
- ✅ Verify MongoDB connection in `.env`
- ✅ Check backend console for error messages

### Clerk authentication issues
- ✅ Verify `VITE_CLERK_PUBLISHABLE_KEY` is correct
- ✅ Check Clerk dashboard for app configuration
- ✅ Ensure Clerk is initialized in `main.jsx`
- ✅ Clear browser cookies and try again

### Notes not appearing
- ✅ Check browser console for API errors
- ✅ Verify `userId` is being sent with requests
- ✅ Check MongoDB Atlas connection and data
- ✅ Ensure CORS is properly configured

### MongoDB connection error
- ✅ Verify connection string in `.env`
- ✅ Check MongoDB Atlas IP whitelist includes your IP
- ✅ Ensure username/password are correct
- ✅ Test connection string directly

## 📚 Learning Resources

- [MERN Stack Tutorial](https://mern.io/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [React Documentation](https://react.dev/)
- [Clerk Documentation](https://clerk.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)

## 🚢 Deployment

### Backend Deployment (Heroku/Railway/Render)
1. Push code to GitHub
2. Connect repository to hosting platform
3. Set environment variables
4. Deploy

### Frontend Deployment (Vercel/Netlify)
1. Run `npm run build`
2. Push code to GitHub
3. Connect repository to hosting platform
4. Update `VITE_API_URL` to production API endpoint
5. Deploy

## 📄 License

ISC

## 👤 Author

Created as a learning project for PLP MERN Stack Week 4

---

**Happy coding! 🎉** Start by setting up the backend and frontend following the Getting Started section above.
