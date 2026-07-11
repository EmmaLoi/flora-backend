# Flora Backend

Backend for the Flora flower shop project built with Node.js, Express, PostgreSQL, and Sequelize.

## Technologies

- Node.js
- Express
- PostgreSQL
- Sequelize
- Joi
- Multer
- Swagger
- Gravatar

## Installation

Install dependencies:

```bash
npm install
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

Seed bouquets:

```bash
npm run seed:bouquets
```

Seed bestsellers:

```bash
npm run seed:bestsellers
```

Seed feedback:

```bash
npm run seed:feedback
```

## API documentation

Local Swagger UI:

```text
http://localhost:3000/api-docs
```

Deployed Swagger UI:

```text
https://flora-backend-eao9.onrender.com/api-docs
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

### Bestsellers

- GET `/api/bestsellers`
- GET `/api/bestsellers/:id`

### Feedback

- GET `/api/feedback`

### Orders

- POST `/api/orders`