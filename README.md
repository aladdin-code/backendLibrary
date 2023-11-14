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

  

   


```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
