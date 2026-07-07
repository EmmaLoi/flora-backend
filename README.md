# Flora Backend

Backend for the Flora project built with Node.js, Express, PostgreSQL, and Sequelize.

## Technologies

- Node.js
- Express
- PostgreSQL
- Sequelize
- Joi
- Multer
- Swagger

## Installation

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
PORT=3000
DATABASE_URL=your_database_url
```

## Run the project

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

## Seed database

Bouquets:

```bash
npm run seed:bouquets
```

Feedback:

```bash
npm run seed:feedback
```

## API Documentation

Swagger UI is available at:

```
http://localhost:3000/api-docs
```

## Endpoints

### Bouquets

- GET `/api/bouquets`
- GET `/api/bouquets/:id`
- POST `/api/bouquets`
- PUT `/api/bouquets/:id`
- DELETE `/api/bouquets/:id`
- PATCH `/api/bouquets/:id/favorite`
- PATCH `/api/bouquets/:id/photo`

### Feedback

- GET `/api/feedback`