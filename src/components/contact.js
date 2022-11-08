// STYLESHEET
const Contact = (props) => {
	return (
		<main>
			<p>
				Si tienes cualquier consulta y prefieres un contacto directo a mi e-mail puedes rellenar el siguiente
				formulario.
			</p>
			<form id="form" action="https://formspree.io/f/xayaggje" method="POST">
				<label htmlFor="Name">Nombre *</label>
				<input placeholder="Escribe tu nombre..." type="text" id="Name" name="Name" />
				<label htmlFor="emailAddress">E-mail *</label>
				<input placeholder="Escribe tu E-mail..." required type="email" id="emailAddress" name="emailAddress" />
				<label htmlFor="phone">Teléfono</label>
				<input placeholder="Ej:123456789" minLength="9" maxLength="13" type="tel" id="phone" name="phone" />
				<label htmlFor="comments">Mensaje *</label>
				<textarea
					placeholder="Escribe tu consulta"
					required
					type="text"
					id="comments"
					name="comments"
					size="15"
					maxLength="500"
				/>
				<p>
					<span className="js_counter">0</span>/500
				</p>
				<input type="submit" value="Enviar" />
			</form>
			<p>Todos los campos con * son obligatorios.</p>
			<a href="./contact.html" title="Up">
				<img src="./assets/images/arrow-up.svg" alt="arrow" />
			</a>
		</main>
	);
};

export default Contact;
