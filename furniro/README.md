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
