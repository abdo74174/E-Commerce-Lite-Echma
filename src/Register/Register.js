export const RegisterPage = () => `
	<div class="auth-wrapper">
		<div class="auth-box">
			<h2>Register</h2>
			<form onsubmit="event.preventDefault(); window.app.register(this)">
				<input type="text" name="name" placeholder="Enter Name">
				<div class="error-msg">Validate all inputs</div>
				<input type="email" name="email" placeholder="Enter Email">
				<input type="password" name="pass" placeholder="Enter Password">
				<input type="password" name="confirm" placeholder="confirm Password">
				<button type="submit">Register</button>
			</form>
		</div>
	</div>
`;
