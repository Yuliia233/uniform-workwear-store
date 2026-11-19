UNIFORM --- Professional Workwear Store
UNIFORM is a front-end demo of an online store for professional
workwear, footwear, and work accessories. The project focuses on a clean
shopping experience, clear product presentation, and a responsive
interface.
Project Overview
The website is designed to help individual customers and businesses
explore workwear products and prepare orders. It is a demonstration
project: it does not process real payments or send orders to a
production server.
Pages
- Home --- landing page introducing the UNIFORM store, its product
  collections, customer benefits, and business enquiries.
- Catalog --- product listing with category filtering, search, and
  sorting.
- Favorites --- a list of products saved by the user.
- Cart --- selected products and an order summary.
- Custom Order --- a form for individual or corporate workwear
  enquiries.
Product Categories
- Men's clothing --- jackets, trousers, and overalls.
- Women's clothing --- jackets, trousers, and overalls.
- Footwear --- work shoes and boots.
- Accessories --- work and protective accessories.
Main Features
- Browse the product catalog.
- Search products by name and description.
- Filter products by category.
- Sort products by available sorting options.
- Add products to the shopping cart and update quantities.
- Save products to Favorites and remove them from the list.
- Switch the interface language between Ukrainian and English.
- Submit demo data through the custom order form.
- Store selected cart and favorites data locally in the browser using
  localStorage.
Technologies
- HTML5 --- page structure.
- CSS3 --- layout, styling, and responsive presentation.
- JavaScript (Vanilla JS) --- catalog rendering and interface
  interactions.
- localStorage --- local demo persistence for cart and favorites.
Project Structure
UNIFORM/
├── css/
│   └── style.css
├── images/
│   ├── banners/
│   ├── categories/
│   └── products/
├── js/
│   ├── catalog.js
│   └── script.js
├── catalog.html
├── index.html
├── README.md
└── .gitignore
Running the Project Locally
1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Open index.html in a browser, or use the Live Server extension
   in Visual Studio Code.
4. Navigate through the website using the page navigation.
Demo Limitations
This project is a front-end demonstration.
- No backend or database is connected.
- No real payment processing is implemented.
- Cart checkout and custom order submission are demonstration flows
  only.
- Product information and prices are sample data and may not represent
  real commercial offers.
- Cart and favorites data are stored in the current browser using
  localStorage.
Deployment
The static website can be published using GitHub Pages:
1. Open the repository on GitHub.
2. Go to Settings → Pages.
3. Under Build and deployment, select deployment from a branch.
4. Select the main branch and the root folder (/).
5. Save the settings and wait for GitHub Pages to publish the site.
Project Purpose
The project was created as a diploma project to demonstrate the design
and development of a responsive e-commerce website interface for a
professional workwear store.
