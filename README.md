## 📚 Project Overview

**Event Manager** is a full-featured frontend application developed as the final project for the *Frontend* course in the **Computer Engineering and AI** degree program. 

The app allows users to browse, search, create, and manage tech-related events. 
It includes features like:

- Authentication (login/registration)
- Role-based access control (Admin vs. Regular User)
- Event creation, modification, deletion
- User management (Admin only)
- Search events with filters
- Clean UI built with **React**, **TypeScript**, and **Material UI**

The backend is powered by `json-server`, simulating a RESTful API for development and testing purposes.

## 🚀 Project Setup & Installation

To run the Event Manager application locally, follow these steps:

### 1. 📥 Clone the Repository

Using HTTPS:
```bash
git clone https://github.com/baketti/Event-Manager.git

Or using SSH:

git clone git@github.com:baketti/Event-Manager.git
```

### 2. 📦 Install Dependencies

Navigate into the project folder and install the required packages:

```bash
cd Event-Manager
npm install
```

### 3. ▶️ Start the Development Server

Run the development server and the mock API (json-server) simultaneously:

```bash
npm run dev
```
This will launch both:

- the React frontend (via Vite)

- the mock REST API (via json-server) using the db.json file

By default, the app will be available at http://localhost:5173.

### 4. 🧪 Test the Application

You can log in using the following test credentials:

#### 👑 Admin User

Email: admin@example.com
Password: admin123

#### 🙍 Regular User

Email: mario@example.com
Password: mario123

## 🛠️ Technologies & Libraries

### Core Technologies

#### **Frontend Framework**
- **React 19.1.0** - Modern React with latest features and performance improvements
- **TypeScript 5.8.3** - Static type checking for enhanced developer experience
- **Vite 6.3.5** - Fast build tool and development server

#### **UI & Styling**
- **Material-UI (MUI) 7.1.2** - Comprehensive React component library
  - `@mui/material` - Core components and theming
  - `@mui/icons-material` - Material Design icons
  - `@mui/x-data-grid` - Advanced data grid component
  - `@mui/x-date-pickers` - Date and time picker components
- **Emotion 11.14.0** - CSS-in-JS library for styling

### State Management

#### **Redux Ecosystem**
- **Redux Toolkit 2.8.2** - Modern Redux with simplified API
- **React-Redux 9.2.0** - Official React bindings for Redux
- **Redux-Saga 1.3.0** - Side effect management for Redux
- **Redux-Persist 6.0.0** - State persistence across browser sessions

### Form Management & Validation

#### **Form Handling**
- **React Hook Form 7.59.0** - Performant forms with minimal re-renders
- **Hookform/Resolvers 3.10.0** - Validation schema resolvers
- **Yup 1.6.1** - Schema validation library for form data

### HTTP & API

#### **HTTP Client**
- **Axios 1.10.0** - Promise-based HTTP client for API requests

### Date & Time

#### **Date Management**
- **Moment.js 2.30.1** - Date parsing, validation, and formatting
- **Date-io/Moment 3.2.0** - MUI date picker adapter for Moment.js

### Routing

#### **Navigation**
- **React Router DOM 7.6.2** - Declarative routing for React applications

### Development Tools

#### **Build & Development**
- **Vite** - Fast development server with HMR (Hot Module Replacement)
- **Concurrently 9.2.0** - Run multiple commands concurrently
- **JSON Server 1.0.0-beta.3** - Mock REST API for development

#### **Code Quality**
- **ESLint 9.25.0** - JavaScript/TypeScript linting
- **TypeScript ESLint 8.30.1** - TypeScript-specific linting rules
- **React Hooks ESLint Plugin 5.2.0** - Rules for React Hooks
- **React Refresh ESLint Plugin 0.4.19** - Fast Refresh support

#### **Type Definitions**
- **@types/react** - TypeScript definitions for React
- **@types/react-dom** - TypeScript definitions for React DOM
- **@types/node** - Node.js type definitions
- **@types/moment** - Moment.js type definitions
- **@types/yup** - Yup validation library types

### Development Scripts

```json
{
  "dev": "concurrently \"vite\" \"json-server --watch ./src/db/db.json --port 3001\"",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

## 🚀 Project Setup & Installation

To run the Event Manager application locally, follow these steps:

### 1. 📥 Clone the Repository

Using HTTPS:
```bash
git clone https://github.com/baketti/Event-Manager.git

Or using SSH:

git clone git@github.com:baketti/Event-Manager.git
```

### 2. 📦 Install Dependencies

Navigate into the project folder and install the required packages:

```bash
cd Event-Manager
npm install
```

### 3. ▶️ Start the Development Server

Run the development server and the mock API (json-server) simultaneously:

```bash
npm run dev
```
This will launch both:

- the React frontend (via Vite)

- the mock REST API (via json-server) using the db.json file

By default, the app will be available at http://localhost:5173.

### 4. 🧪 Test the Application

You can log in using the following test credentials:

#### 👑 Admin User

Email: admin@example.com
Password: admin123

#### 🙍 Regular User

Email: mario@example.com
Password: mario123

## 🛠️ Technologies & Libraries

### Core Technologies

#### **Frontend Framework**
- **React 19.1.0** - Modern React with latest features and performance improvements
- **TypeScript 5.8.3** - Static type checking for enhanced developer experience
- **Vite 6.3.5** - Fast build tool and development server

#### **UI & Styling**
- **Material-UI (MUI) 7.1.2** - Comprehensive React component library
  - `@mui/material` - Core components and theming
  - `@mui/icons-material` - Material Design icons
  - `@mui/x-data-grid` - Advanced data grid component
  - `@mui/x-date-pickers` - Date and time picker components
- **Emotion 11.14.0** - CSS-in-JS library for styling

### State Management

#### **Redux Ecosystem**
- **Redux Toolkit 2.8.2** - Modern Redux with simplified API
- **React-Redux 9.2.0** - Official React bindings for Redux
- **Redux-Saga 1.3.0** - Side effect management for Redux
- **Redux-Persist 6.0.0** - State persistence across browser sessions

### Form Management & Validation

#### **Form Handling**
- **React Hook Form 7.59.0** - Performant forms with minimal re-renders
- **Hookform/Resolvers 3.10.0** - Validation schema resolvers
- **Yup 1.6.1** - Schema validation library for form data

### HTTP & API

#### **HTTP Client**
- **Axios 1.10.0** - Promise-based HTTP client for API requests

### Date & Time

#### **Date Management**
- **Moment.js 2.30.1** - Date parsing, validation, and formatting
- **Date-io/Moment 3.2.0** - MUI date picker adapter for Moment.js

### Routing

#### **Navigation**
- **React Router DOM 7.6.2** - Declarative routing for React applications

### Development Tools

#### **Build & Development**
- **Vite** - Fast development server with HMR (Hot Module Replacement)
- **Concurrently 9.2.0** - Run multiple commands concurrently
- **JSON Server 1.0.0-beta.3** - Mock REST API for development

#### **Code Quality**
- **ESLint 9.25.0** - JavaScript/TypeScript linting
- **TypeScript ESLint 8.30.1** - TypeScript-specific linting rules
- **React Hooks ESLint Plugin 5.2.0** - Rules for React Hooks
- **React Refresh ESLint Plugin 0.4.19** - Fast Refresh support

#### **Type Definitions**
- **@types/react** - TypeScript definitions for React
- **@types/react-dom** - TypeScript definitions for React DOM
- **@types/node** - Node.js type definitions
- **@types/moment** - Moment.js type definitions
- **@types/yup** - Yup validation library types

### Development Scripts

```json
{
  "dev": "concurrently \"vite\" \"json-server --watch ./src/db/db.json --port 3001\"",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```
## 📁 Project Structure

### Core Application (`src/app/`)
- **AppWrapper.tsx** - Main application wrapper component with providers and global setup
- **index.tsx** - Application entry point and root component
- **redux-store/** - Redux state management configuration and slices
- **router/** - React Router setup and navigation logic
- **scenes/** - Main application pages/screens

### State Management (`src/app/redux-store/`)
- **extra-actions/** - Redux actions for API calls and lifecycle events
  - **apis/** - API-related actions for CRUD operations (events, users, sessions)
  - **life-cycle/** - Application lifecycle actions (startup, initialization)
- **slices/** - Redux slices for different state domains
  - **ajax/** - Loading states and API call management
  - **event/** - Event-related state (events list, current event, etc.)
  - **feedback/** - User feedback state (notifications, messages)
  - **ui/** - UI state (dialog visibility, modals)
  - **user/** - User authentication and profile state

### UI Components (`src/components/`)
- **Route Protection** - `AdminRoutesProtector`, `RoutesProtector` for access control
- **Navigation** - `AppNavbar`, `DashboardDrawer`, `BackButton` for app navigation
- **Forms** - `LoginForm`, `RegisterForm`, dialog components for data entry
- **Content Display** - `EventCard`, `EventsList`, `Widget` for content presentation
- **Utilities** - `AppButton`, `ScrollToTopButton`, `ErrorMessage` for common UI elements
- **Layout** - `AppContainer`, `PageContainer`, `Footer` for page structure
- **Form Controls** - `_form/` directory containing reusable form components

### Application Scenes (`src/app/scenes/`)
- **LandingPageScene** - Homepage with app introduction
- **AuthenticationScene** - Authentication wrapper
- **LoginScene** / **RegistrationScene** - User authentication pages
- **DashboardScene** - Main dashboard after login
- **EventsScene** - Events listing with search and filters
- **EventDetailsScene** - Individual event details page
- **UsersScene** - User management (admin only)
- **NotFoundScene** - 404 error page

### Assets & Resources
- **assets/** - Static images and media files
- **db/** - JSON Server database file for development
- **models/** - TypeScript interfaces and data models
- **hooks/** - Custom React hooks for shared logic
- **themes/** - Material-UI theme configuration
- **utils/** - Utility functions and constants

### Development Tools
- **main.tsx** - React application entry point
- **vite-env.d.ts** - Vite environment type definitions

This structure follows a feature-based organization with clear separation of concerns, making the codebase maintainable and scalable.

## 🔧 Redux Store Architecture

### Store Configuration
The application uses **Redux Toolkit** with **Redux-Saga** for side effects and **Redux Persist** for state persistence. The store is configured with the following middleware stack:

- **Redux-Saga** - Handles async operations and API calls
- **Redux-Persist** - Persists state to localStorage (excludes UI slice)

### Store Slices Organization

Each slice follows a consistent file structure:

#### Available Slices

- **`ajax`** - Manages API loading states and request lifecycle
- **`event`** - Event-related state (events list, current event, filters)
- **`user`** - User authentication, profile, and user management
- **`ui`** - UI state (dialog visibility, modals, notifications)
- **`feedback`** - User feedback and notification messages

### API Request Architecture

#### API Builder Pattern
The application uses a sophisticated API builder pattern that standardizes all HTTP requests:

```typescript
// Each API action is created with:
export const apiActionBuilder = (api, prepare) => ({
  request: createAction(`${api}/request`, prepare),
  success: createAction(`${api}/success`),
  fail: createAction(`${api}/fail`),
  cancel: createAction(`${api}/cancel`)
});
```
## 🚀 Available API Actions

### 📦 Events API
- `getEvents` – Fetch all events
- `getEventsByEventId` – Fetch single event details
- `getEventsBySearch` – Search events with filters (e.g. location, price, date)
- `postEvents` – Create a new event
- `patchEventsByEventId` – Update an existing event
- `deleteEventsByEventId` – Delete an event
- `patchUsersEventSubscription` – Subscribe or unsubscribe a user to/from an event

### 👤 Users API
- `getUsers` – Fetch all users (admin only)
- `getUsersByUserId` – Get a specific user's details
- `getUsersMe` – Retrieve the current logged-in user profile
- `postUsers` – Register a new user
- `postUsersByAdmin` – Admin creates a user
- `patchUsersByUserId` – Edit user details
- `deleteUsersByUserId` – Remove a user

### 🔐 Authentication API
- `postSessions` – Log in a user
- `deleteSessions` – Log out the current user

---

## 💾 State Persistence

The application uses **Redux Persist** to store selected parts of the Redux state in `localStorage`:

- **Storage**: `localStorage`
- **Key**: `"App-root"`
- **Blacklist**: `ui` slice (to avoid persisting dialog and modal states)

This guarantees that user sessions and preferences persist across reloads, while keeping the UI state clean on each load.

---

## ⚙️ Side Effects with Redux-Saga

The app leverages **Redux-Saga** middleware to handle asynchronous and side-effect logic such as:

- API requests orchestration
- Authentication flow and session management
- Navigation after successful actions (e.g., login or form submit)
- Global error handling and user feedback
- Request cancellation and cleanup

> This architecture ensures robust, scalable, and predictable behavior across all asynchronous flows.

## 🧩 Component Architecture

### Component Structure
All components in the application follow a consistent two-file architecture pattern for better separation of concerns and maintainability:

### Design Pattern

#### **UI Layer (`index.tsx`)**
- Contains only **presentational logic** and JSX structure
- Focuses on **component composition** and styling
- Handles **prop destructuring** and component rendering
- Keeps components **clean and readable**
- Uses `memo()` for performance optimization

#### **Logic Layer (`index.hooks.tsx`)**
- Manages all **business logic** and state operations
- Handles **Redux interactions** (selectors, dispatchers)
- Contains **form validation** and submission logic
- Manages **side effects** and API calls
- Implements **custom hooks** and utilities

#### **Benefits of This Architecture**
- Testability: Logic is isolated and easily unit testable
- Reusability: Hooks can be shared across components
- Maintainability: Clear separation makes debugging easier
- Performance: UI components can be memoized effectively
- Type Safety: Strong TypeScript support for both layers
- Code Organization: Consistent pattern across the entire codebase

This pattern ensures that components remain focused, maintainable, and follow React best practices while keeping business logic separate from presentation concerns. 

## ✅ Features & Functionality

### 🔐 Authentication & Role Management
The application supports user authentication with role-based access control:
- **Users** have limited permissions:
  - View all public events
  - Create new events
  - Subscribe/unsubscribe to events (as participants)
- **Admins** have full access:
  - All user permissions
  - Manage all events (edit/delete)
  - Manage users (view, create, edit, delete)
  - Admins **cannot** subscribe to events (the button is disabled for them)

Each user is assigned a role (`user` or `admin`) upon creation.

---

### 🧾 Forms & Modals

The application includes various forms and dialog modals for CRUD operations:

#### 📄 Event Management
- **Create Event**: Modal dialog with form fields
- **Edit Event**: Modal dialog pre-filled with current event data
- **Delete Event**: Confirmation dialog before deletion

#### 👤 User Management (Admins Only)
- **Create User**: Modal dialog with fields for name, email, password, role
- **Edit User**: Modal dialog pre-filled with current user data
- **Delete User**: Confirmation dialog to confirm deletion

#### 🔐 Authentication
- **Login Form**: Allows users to sign in
- **Registration Form**: Allows users to register a new account

All forms include validation and real-time feedback using `react-hook-form` and `yup`.

---

### 🔎 Events Filtering & Search

The Events Scene includes advanced filtering capabilities:
- **Location** – Filters events by city/location
- **Price** – Filters events by maximum price (returns events with price ≤ selected value)
- **Date** – Filters events by exact date match

> ⚠️ **Note on Date Search**:
Due to limitations with `json-server`, range-based date filters (like `date_gte`, `date_lte`) are not currently supported.
Instead, a strict `date` query is used, returning only events with a date **exactly matching** the selected one.
This may result in **zero or very few matches** depending on the selected day.

> 🔍 **Important**: The search is triggered **only when clicking the search icon button** to the right of the filters.

---

This set of features ensures a complete event management experience, with secure and intuitive role-based access control and full CRUD support for both users and events.

