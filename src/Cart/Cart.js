import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export const CartPage = (state) => {
	const total = state.cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
	return `
		${Header(state)}
		<div class="container">
			<h3 style="color:#3b3ab2; margin-bottom:10px;">Cart Page</h3>
			<div class="cart-box">
				${state.cart.length === 0 ? '<p>Your cart is empty</p>' : state.cart.map(item => `
					<div class="cart-item">
						<div class="cart-item-left">
							<h4>${item.name}</h4>
							<p>${item.price}</p>
						</div>
						<div class="cart-controls">
							<button onclick="window.app.updateQty(${item.id}, -1)">-</button>
							<span>${item.qty}</span>
							<button onclick="window.app.updateQty(${item.id}, 1)">+</button>
						</div>
					</div>
				`).join('')}
        
				<a href="#" class="total-amount-link" onclick="event.preventDefault()">Totla Amount : ${total}$</a>
				<button class="buy-now-btn" onclick="window.app.checkout()">Buy Now</button>
			</div>
		</div>
		${Footer()}
	`;
};
