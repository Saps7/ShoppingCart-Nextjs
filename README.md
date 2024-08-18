## Deployed App link:
[ShoppingCart-Nextjs](https://shopping-cart-nextjs-41arhz0hh-saptarshi-senguptas-projects.vercel.app/)

## Getting Started/ Installation:

First, run the development server:

```bash
npm run dev
or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project Overview:
This is a Full-Stack Next.js app which has 2 pages that fetch data from 2 routes created in the api folder.
<br/>
The App consists of the following pages:
* Homepage(/):
  * Displays a list of products with image, name, list price, discounted price and an "Add to Cart" button.
  * You can click the Add to Cart button to add any of the products to the cart which will show a popup and reflect the quantity of that item added upon click along with a `+` and a `-` button.
  * You can increase or decrease the quanitity of any item in cart using those buttons till the quantity is 0, or reaches maximum in stock when it will show an alert.
  * On adding any item, a "Remove" button will also be displayed using which you can remove the entire quantity of the item added and an alert will confirm the same.
  * There is a navbar on top common to all pages which contains a counter to display number of items in cart along with a Cart icon which redirects you to the cart page.
* Cart Page (/cart):
  * Displays a list of items in the cart along with list and discounted price, quantity up/down button and totalPrice of all quantities of the item and a Remove button.
  * There is a Cart Summary section which contains the subTotal (Total of MRP), Product discount total, Coupon discount and final Total amount of the Cart. 
  * There is a Coupon button which when clicked let's users pick a coupon of their choice which provides additional discount as a % or absolute amount depending on the coupon.
  * There is a Checkout button which pops up a Order confirmation modal and a "Place Order" button which when clicked resets the cart and redirects you to HomePage.
  * Also when the Cart is empty, a Empty Cart message is rendered on the page instead of the usual components.

The App also contains the following routes:
* api/products:
  * Takes data of all the products from an in-memory json file and sends it as response.
* api/coupons:
  * Takes data of all the coupons from an in-memory json file and sends it as response. 
