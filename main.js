import { RegisterPage } from './src/Register/Register.js';
import { LoginPage } from './src/Login/Login.js';
import { HomePage } from './src/Home/Home.js';
import { DetailsPage } from './src/ProductDetails/Details.js';
import { CartPage } from './src/Cart/Cart.js';
import { ShippedPage } from './src/Shipped/Shipped.js';

// --- State ---
const state = {
  view: 'register',
  user: null,
  cart: [],
  selectedProduct: null
};

// --- Controller Functions ---
window.app = {
  navigate: (view, params = {}) => {
    state.view = view;
    if (params.product) state.selectedProduct = params.product;
    render();
  },

  register: (form) => {
    const data = new FormData(form);
    state.user = { name: data.get('name') || 'Ali' };
    window.app.navigate('login');
  },

  login: (form) => {
    window.app.navigate('home');
  },

  logout: () => {
    state.user = null;
    window.app.navigate('login');
  },

  addToCart: (product) => {
    const existing = state.cart.find(i => i.id === product.id);
    if (existing) {
      existing.qty++;
    } else {
      state.cart.push({ ...product, qty: 1 });
    }
    render();
  },

  updateQty: (id, delta) => {
    const item = state.cart.find(i => i.id === id);
    if (item) {
      item.qty += delta;
      if (item.qty <= 0) {
        state.cart = state.cart.filter(i => i.id !== id);
      }
    }
    render();
  },

  checkout: () => {
    window.app.navigate('shipped');
  }
};

const render = () => {
  const appDiv = document.getElementById('app');
  switch (state.view) {
    case 'register': appDiv.innerHTML = RegisterPage(); break;
    case 'login': appDiv.innerHTML = LoginPage(); break;
    case 'home': appDiv.innerHTML = HomePage(state); break;
    case 'details': appDiv.innerHTML = DetailsPage(state); break;
    case 'cart': appDiv.innerHTML = CartPage(state); break;
    case 'shipped': appDiv.innerHTML = ShippedPage(state); break;
    default: appDiv.innerHTML = RegisterPage();
  }
};

render();
