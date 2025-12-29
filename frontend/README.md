# Notes App - Frontend

A full-stack MERN (MongoDB, Express, React, Node.js) notes application with user authentication via Clerk and real-time note management.

## Overview

This frontend application provides a modern, responsive interface for creating, editing, and deleting notes. Users can sign in with Clerk authentication and manage their personal notes with a clean, intuitive UI built with React and styled with Tailwind CSS.

## Features

- **User Authentication** - Secure sign-in/sign-up with Clerk
- **Note Management** - Create, read, update, and delete notes
- **Real-time Updates** - Instant UI updates when performing operations
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Accessible Components** - Built with Radix UI for better accessibility
- **Error Handling** - User-friendly error messages and loading states

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Styling
- **Radix UI** - Accessible component library
- **Axios** - HTTP client for API calls
- **Clerk** - Authentication & user management
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 16+ installed
- Backend server running on `http://localhost:5000`
- Clerk account and API keys

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the frontend directory:
```
VITE_API_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── NewNoteDialog.jsx      # Dialog for creating new notes
│   ├── NoteCard.jsx            # Individual note component with edit/delete
│   └── ui/                     # Reusable UI components
│       ├── button.jsx
│       ├── card.jsx
│       ├── input.jsx
│       └── textarea.jsx
├── pages/
│   └── Dashboard.jsx           # Main notes dashboard
├── lib/
│   ├── api.js                  # API client setup
│   └── utils.js                # Utility functions
├── App.jsx                     # Main app component
├── main.jsx                    # Entry point
└── index.css                   # Global styles
```

## Key Components

### Dashboard
Main page displaying all user notes with create/edit/delete functionality.

**Props:**
- `frontendUserId` - User ID from Clerk

### NoteCard
Individual note display with inline editing.

**Props:**
- `note` - Note object with `_id`, `title`, `content`, `updatedAt`
- `onSave(id, payload)` - Callback for saving note changes
- `onDelete(id)` - Callback for deleting a note

### NewNoteDialog
Dialog form for creating new notes.

**Props:**
- `onCreate(payload)` - Callback for creating a new note

## API Integration

The app communicates with the backend API at `/api/notes` for:
- `GET /api/notes?userId=<userId>` - List user's notes
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

See [api.js](src/lib/api.js) for implementation details.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_API_URL` | Backend API base URL |
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk public key for authentication |

## Common Issues

**500 Error on API calls:**
- Ensure backend server is running on port 5000
- Check that `VITE_API_URL` is set correctly in `.env.local`
- Verify database connection in backend

**Clerk authentication not working:**
- Confirm `VITE_CLERK_PUBLISHABLE_KEY` is correct
- Check that Clerk is initialized in `main.jsx`

## License

ISC
