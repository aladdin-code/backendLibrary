# Library Management System

## Description

Library Management System is an online platform that allows users to search for books, view details, borrow, and return them. The application is developed using NestJS.

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

### Installing

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/aladdin-code/backendLibrary.git
2. Navigate to the Project Directory
   ```bash
   cd library-management-system
3. Install Dependencies
   ```bash
   npm install
4. Install Dependencies
   - Make sure PostgreSQL is installed locally.
   - Create a new database for the project.
5. Configure Environment Variables
   - Open the .env file and set the following variables:
   ```bash
   DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:PORT/DBName?schema=public"
6. Run Migrations
   ```bash
   npx prisma migrate dev
6. Running the Application
   ```bash
   npm run start:dev
   
### Technologies Used
- Prisma: Utilized as an Object-Relational Mapping (ORM) tool to simplify database operations.
- Argon2: Chosen for secure password hashing to enhance user authentication.
- JWT (JSON Web Tokens): Implemented for secure and stateless user authentication.
- class-validator: Integrated to streamline input validation for a cleaner and more maintainable codebase.

 
