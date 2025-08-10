# DevTinder Web

A modern web application built with React that provides a developer-focused networking platform similar to Tinder, allowing developers to connect, chat, and build professional relationships.

## 🚀 Features

- **User Authentication**: Secure login and signup system with JWT tokens
- **Profile Management**: Create and edit user profiles with photos and personal information
- **Smart Matching**: Swipe-based interface to discover and connect with other developers
- **Real-time Chat**: Live messaging system with Socket.IO for instant communication
- **Connection Management**: Handle connection requests and manage your professional network
- **Responsive Design**: Modern UI built with Tailwind CSS and DaisyUI components
- **State Management**: Redux Toolkit for efficient application state management

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4.0, DaisyUI
- **State Management**: Redux Toolkit, React Redux
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Real-time Communication**: Socket.IO Client
- **Build Tool**: Vite

## 📁 Project Structure

```
devTinder-web/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── App.jsx        # Main application component with routing
│   │   ├── Body.jsx       # Layout wrapper component
│   │   ├── Login.jsx      # Authentication forms (login/signup)
│   │   ├── Profile.jsx    # User profile management
│   │   ├── Feed.jsx       # Main feed showing potential connections
│   │   ├── Usercard.jsx   # Individual user cards for swiping
│   │   ├── Connections.jsx # View and manage connections
│   │   ├── ConnectionRequests.jsx # Handle incoming connection requests
│   │   ├── Chat.jsx       # Real-time chat interface
│   │   └── Navbar.jsx     # Navigation component
│   ├── utils/             # Utility functions and configurations
│   │   ├── store.js       # Redux store configuration
│   │   ├── userSlice.js   # User state management
│   │   ├── feedSlice.js   # Feed state management
│   │   ├── connectionSlice.js # Connection state management
│   │   ├── requestSlice.js # Request state management
│   │   ├── socket.js      # Socket.IO connection setup
│   │   └── constants.js   # Application constants (API URLs)
│   ├── index.css          # Global styles
│   └── main.jsx          # Application entry point
├── package.json           # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd devTinder-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   - Update the `BASE_URL` in `src/utils/constants.js` to point to your backend server
   - Default: `http://localhost:3000`

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔧 Configuration

### Backend API

The application expects a backend server running on the URL specified in `src/utils/constants.js`. The backend should provide the following endpoints:

- `POST /login` - User authentication
- `POST /signup` - User registration
- `GET /user/feed` - Get potential connections
- `POST /request/send/:status/:userId` - Send connection requests
- `GET /chat/:targetUserId` - Get chat messages
- Additional endpoints for profile management, connections, etc.

### Socket.IO

Real-time chat functionality requires a Socket.IO server that handles:
- `joinChat` events for joining chat rooms
- `sendMessage` events for sending messages
- `messageReceived` events for receiving messages

## 🎯 Core Features

### Authentication System
- Secure login and signup with email/password
- JWT token-based authentication
- Protected routes for authenticated users

### User Discovery
- Swipe-based interface (Interested/Ignore)
- User cards displaying profile information
- Dynamic feed updates based on user actions

### Connection Management
- Send and receive connection requests
- View pending requests
- Manage existing connections

### Real-time Chat
- Instant messaging between connected users
- Online/offline status indicators
- Message history persistence
- Real-time message delivery

### Profile Management
- Edit personal information
- Upload profile photos
- Update preferences and bio

## 🎨 UI/UX Features

- **Modern Design**: Clean, responsive interface built with Tailwind CSS
- **Component Library**: DaisyUI components for consistent styling
- **Mobile-First**: Responsive design that works on all devices
- **Dark Theme**: Built-in dark mode support
- **Smooth Animations**: Enhanced user experience with transitions

## 🔒 Security Features

- JWT token authentication
- Secure HTTP requests with credentials
- Protected API endpoints
- Input validation and sanitization

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder
- **AWS S3**: Upload built files to S3 bucket
- **GitHub Pages**: Deploy directly from your repository

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Include error messages and steps to reproduce

## 🔮 Future Enhancements

- Push notifications for new messages and requests
- Advanced matching algorithms
- Video chat integration
- File sharing in chat
- Mobile app development
- Analytics dashboard
- Premium features and subscriptions

---

**Built with ❤️ for the developer community**
