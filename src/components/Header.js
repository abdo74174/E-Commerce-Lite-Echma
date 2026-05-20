export const Header = (state) => `
  <header>
    <div class="container nav-container">
      <div class="nav-left">
        <a href="#" onclick="window.app.navigate('home')">Home</a>
        <a href="#" onclick="event.preventDefault()">contact</a>
      </div>
      <div class="nav-right">
        <div onclick="window.app.navigate('cart')" style="cursor:pointer">
          <i class="fa-solid fa-cart-shopping"></i>
          ${state.cart.length > 0 ? `<span style="font-size:12px; vertical-align:top; color:var(--primary-color)">${state.cart.length}</span>` : ''}
        </div>
        <span class="user-name">${state.user ? state.user.name : 'Ali'}</span>
        <span class="logout-link" onclick="window.app.logout()">logout</span>
      </div>
    </div>
  </header>
`;
