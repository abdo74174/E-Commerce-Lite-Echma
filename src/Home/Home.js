import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { products } from '../data.js';

export const HomePage = (state) => `
	${Header(state)}
	<div class="container">
		<h2 style="text-align:center; color:#ff4d4d; margin-bottom:10px;">Ecommerce</h2>
		<div class="home-slider">Slider</div>
		<h3 class="section-title">Our Products</h3>
    
		<div class="filter-row">
			<button class="filter-btn">price</button>
			<button class="filter-btn">size</button>
			<button class="filter-btn">filter</button>
		</div>
    
		<div class="main-content">
			<aside class="sidebar">
				<button onclick="event.preventDefault()">All</button>
				<button onclick="event.preventDefault()">Clothes</button>
				<button onclick="event.preventDefault()">Makeup</button>
				<button onclick="event.preventDefault()">Phones</button>
				<div style="border:1px solid black; height:150px; margin-top:10px;"></div>
				<div style="border:1px solid black; height:150px;"></div>
			</aside>
      
			<div class="product-grid">
				${products.map(p => `
					<div class="product-card">
						<img src="${p.image}" alt="${p.name}">
						<div style="margin-top:5px;">
							<div style="font-size:14px;">${p.name}</div>
							<div style="font-weight:bold;">${p.price}$</div>
						</div>
						<div class="card-footer">
							<i class="fa-regular fa-eye eye-icon" onclick="window.app.navigate('details', { product: ${JSON.stringify(p).replace(/"/g, '&quot;')} })"></i>
							<i class="fa-solid fa-plus plus-icon" onclick="window.app.addToCart(${JSON.stringify(p).replace(/"/g, '&quot;')})"></i>
						</div>
					</div>
				`).join('')}
			</div>
		</div>
	</div>
	${Footer()}
`;
