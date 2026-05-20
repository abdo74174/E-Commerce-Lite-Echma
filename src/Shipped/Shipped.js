import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';

export const ShippedPage = (state) => `
  ${Header(state)}
  <div class="container">
    <div class="shipped-box">
      Order Shipped
    </div>
    <div style="border:1px solid black; height:100px; margin-top:20px;"></div>
  </div>
  ${Footer()}
`;
