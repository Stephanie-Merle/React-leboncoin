import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Style from './signup.module.css';
import axios from 'axios';
import SignupCard from '../components/login/signup-card';

const SignUp = (props) => {
	const initState = {
		name: '',
		email: '',
		password1: '',
		password2: '',
		agree: false
	};

	const [ error, setError ] = useState(false);
	const [ input, setInput ] = useState(initState);

	const history = useHistory();
	const checkData = (e) => {
		e.preventDefault();
		if (input.password1 === input.password2 && input.agree === true) {
		}
		handleSubscription();
	};

	const handleSubscription = async () => {
		try {
			const res = await axios.post('https://good-deal.herokuapp.com/user/sign_up', {
				email: input.email,
				username: input.name,
				password: input.password1
			});
			alert('Vous avez ete enregistre, vous pouvez maintenant vous connecter');
			// redirecting to main page
			return history.push('/offers');
		} catch (err) {
			setError(true);
			// clear form input
			setInput(initState);
			return console.log(err.message);
		}
	};
	let errorStyle = error ? { color: 'red', marginBottom: '0' } : { display: 'none' };
	return (
		<div className={Style.signup}>
			<div className={Style.layout}>
				<div className={Style.left}>
					<h3>Pourquoi creer un compte ?</h3>
					<SignupCard />
				</div>
				<div className={Style.right}>
					<p className={Style.title}>Creez un compte</p>
					<hr />
					<form>
						<p>Pseudo *</p>
						<div>
							<input
								type="text"
								placeholder="your pseudo"
								name="name"
								value={input.name}
								onChange={(e) => setInput({ ...input, name: e.target.value })}
							/>
						</div>
						<p>Adresse email *</p>
						<div>
							<input
								type="email"
								placeholder="your email"
								name="name"
								value={input.email}
								onChange={(e) => setInput({ ...input, email: e.target.value })}
							/>
						</div>
						<div className={Style.password}>
							<div>
								<p>Mot de passe *</p>
								<input
									type="password"
									name="password1"
									placeholder="your password"
									value={input.password1}
									onChange={(e) => setInput({ ...input, password1: e.target.value })}
								/>
							</div>

							<div>
								<p>Confirmer Mot de passe *</p>
								<input
									type="password"
									name="password2"
									placeholder="your password"
									value={input.password2}
									onChange={(e) => setInput({ ...input, password2: e.target.value })}
								/>
							</div>
						</div>
						<p style={errorStyle}>Wrong password or email already used</p>
						<div className={Style.agree}>
							<input
								className={Style.checkbox}
								type="checkbox"
								name="CGV-CGU"
								value={!input.agree}
								onChange={(e) => setInput({ ...input, agree: !input.agree })}
							/>{' '}
							J'accepte les conditions generale de vente et les conditions generales d'utilisation.{' '}
						</div>

						<button type="submit" className={Style.btnBlue} onClick={(e) => checkData(e)}>
							Creer mon compte
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
// possibility to use checked={..} instead of value, then event.target.checked
export default SignUp;
