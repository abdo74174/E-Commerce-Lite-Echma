import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export const DetailsPage = (state) => {
	const p = state.selectedProduct;
	return `
		${Header(state)}
		<div class="container">
			<h3 style="margin-bottom:10px;">Product Details</h3>
			<div class="details-box">
				<img src="${p.image}" alt="${p.name}">
				<div class="details-info">
					<div>Product Name : ${p.name}</div>
					<div>Price : ${p.price}$</div>
					<div>quantity : 5</div>
					<div>Category : ${p.category}</div>
					<button onclick="window.app.addToCart(${JSON.stringify(p).replace(/"/g, '&quot;')})">add To Cart</button>
				</div>
			</div>
		</div>
		${Footer()}
	`;
};
