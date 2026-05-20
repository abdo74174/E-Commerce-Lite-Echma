export const LoginPage = () => `
	<div class="auth-wrapper">
		<div class="auth-box">
			<h2>Login</h2>
			<form onsubmit="event.preventDefault(); window.app.login(this)">
				<input type="email" placeholder="Enter Email">
				<input type="password" placeholder="Enter Password">
				<button type="submit">login</button>
			</form>
		</div>
	</div>
`;
