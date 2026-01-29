# ShopWithUs - E-Commerce Platform

A full-stack e-commerce application built with React, MongoDB, Node.js, and Express.js, featuring a modern UI, advanced search functionality, and a secure admin dashboard.

**Live Demo:** [e-commerce-vxbo.vercel.app](https://e-commerce-vxbo.vercel.app/)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Key Highlights](#key-highlights)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

---

## ✨ Features

### User Features

- **100+ Products Catalog** - Browse an extensive collection of products
- **Advanced Search & Filters** - Find products with powerful search and filtering options
- **Product Details** - View comprehensive product information with images
- **Shopping Cart** - Add/remove items from cart with persistent storage
- **User Authentication** - Secure sign-up and login functionality
- **Order Management** - Track orders and view order history
- **Mobile Responsive Design** - Seamless experience across all devices
- **Lazy Loading** - Optimized image loading for better performance
- **Payment Integration** - Secure checkout with Stripe integration

### Admin Features

- **Admin Dashboard** - Comprehensive admin panel with analytics
- **Order Tracking** - Real-time order monitoring and status updates
- **Product Management** - Add, edit, delete, and manage products
- **User Management** - View and manage all registered users
- **Role-Based Access Control** - Secure admin-only features
- **Real-Time Analytics** - Dashboard insights and statistics

---

## 🛠️ Tech Stack

### Frontend

- **React** - UI library for building interactive user interfaces
- **Redux** - State management for predictable state updates
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Vite** - Fast build tool and dev server

### Backend

- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Minimalist web framework for routing and middleware
- **MongoDB** - NoSQL database for flexible data storage
- **Stripe API** - Payment processing and webhook handling

### Tools & Libraries

- **Axios** - HTTP client for API requests
- **JWT** - Authentication tokens for secure user sessions
- **Mongoose** - MongoDB object modeling

---

## 📁 Project Structure

```
E-commerce/
├── backend/
│   ├── config/              # Database and Stripe configuration
│   ├── controller/          # Business logic controllers
│   │   ├── cart/            # Shopping cart operations
│   │   ├── orders/          # Order management and payments
│   │   └── product/         # Product operations
│   ├── middleware/          # Authentication and validation
│   ├── model/               # Database schemas
│   ├── route/               # API route definitions
│   ├── utils/               # Helper functions and utilities
│   ├── initialdata/         # Seed data for development
│   ├── index.js             # Server entry point
│   ├── package.json         # Backend dependencies
│   └── vercel.json          # Vercel deployment config
│
└── Frontend/
    ├── src/
    │   ├── components/      # Reusable React components
    │   ├── pages/           # Page components (Home, Cart, etc.)
    │   ├── store/           # Redux store and slices
    │   ├── context/         # React context utilities
    │   ├── helper/          # Helper functions
    │   └── assets/          # Images and static files
    ├── public/              # Static public files
    ├── package.json         # Frontend dependencies
    ├── vite.config.js       # Vite configuration
    ├── tailwind.config.js   # Tailwind CSS configuration
    └── vercel.json          # Vercel deployment config
```

---

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB database
- Git

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   PORT=5000
   ```

4. Initialize the database (optional - loads seed data):
   ```bash
   npm run seed
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd Frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the Frontend directory with the following variables:
   ```env
   VITE_API_URL=http://localhost:5000
   VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
   ```

---

## 🏃 Running the Application

### Development Mode

**Backend:**

```bash
cd backend
npm start
```

Server runs on `http://localhost:5000`

**Frontend:**

```bash
cd Frontend
npm run dev
```

Application runs on `http://localhost:5173`

### Production Build

**Frontend:**

```bash
cd Frontend
npm run build
npm run preview
```

---

## 🎯 Key Highlights

### Performance Optimization

- **Lazy Loading** - Images load only when needed, reducing initial load time
- **Code Splitting** - Components are split for efficient bundling
- **Optimized Queries** - Database queries are optimized for fast retrieval

### Security

- **JWT Authentication** - Secure token-based user authentication
- **Password Hashing** - User passwords are securely hashed
- **Role-Based Access Control** - Admin routes are protected
- **Stripe Webhook Verification** - Secure payment confirmations

### User Experience

- **Mobile Responsive** - Works seamlessly on all screen sizes
- **Intuitive Navigation** - Easy-to-use interface for all users
- **Real-Time Updates** - Cart and order updates reflect immediately
- **Error Handling** - Clear error messages and validation feedback

---

## 📡 API Endpoints

### Authentication

- `POST /api/user/signup` - Register a new user
- `POST /api/user/login` - User login
- `POST /api/user/logout` - User logout

### Products

- `GET /api/product/all` - Get all products
- `GET /api/product/:id` - Get product details
- `POST /api/product/create` - Create product (Admin)
- `PUT /api/product/update/:id` - Update product (Admin)
- `DELETE /api/product/delete/:id` - Delete product (Admin)
- `GET /api/product/search` - Search products

### Cart

- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item
- `DELETE /api/cart/delete` - Remove from cart

### Orders

- `GET /api/order/all` - Get all orders (Admin)
- `GET /api/order/:id` - Get order details
- `POST /api/order/create` - Create order
- `PUT /api/order/update` - Update order (Admin)
- `POST /api/order/webhook` - Stripe webhook handler

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 📧 Contact

For questions or inquiries, feel free to reach out.

---

**Happy Shopping with ShopWithUs! 🛍️**
