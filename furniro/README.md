<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->

## Furniro E-Commerce App

Furniro is a modern backend E-commerce app built with Django and DjangoRestFramework.

## Table of Content

- Features
- Installation
- Usage
- API Endpoints
- Tech Stack

## Features

- User Authentication(Register/Login)
- Shopping Cart and Checkout
- Payment Integration
- Product Management (CRUD)

<!-- ## Screenshots and Demo -->

## Installation

1. Clone the repository:

- git clone https://github.com/username/furniro.git

2. Enter the directory:
   - cd furniro
3. Install required dependencies:
   - pip install -r requirements.txt
4. Run the project:
   - python manage.py runserver

## Usage

- Create an account.
- Login to the Account.
- Browse through products.
- Add products to cart.
- Checkout using Paystack API.
- Download order receipt.

## API Endpoints

- `POST /api/register/` this registers a new user.
- `POST /api/login/` this logs in an existing user.
- `POST /api/refresh/` this gets a new JWT Token for authentication.
- `GET /api/products/` this displays the list of products available.
- `GET /api/cart/` this displays the products in the cart.
- `POST /api/cart/add` this adds item to cart.
- `GET /api/order/` this display list of items ordered.
- `POST /api/order/` this checksout orders.

## Tech Stack

- Backend : Django, Django Rest Framework
- Database : Postgresql
- Deployment : Render

## Contributing

- Fork the repo
- Create a new branch ("git checkout -b feature-branch)
- Commit new changes ("git commit -m "Added a new feature")
- Push to your branch ("git push origin feature-branch")
- Open a pull request

## License

- This project is under the MIT license.

## Author

- Hanif Baaba
- Github : (https://github.com/hanifbaaba)
