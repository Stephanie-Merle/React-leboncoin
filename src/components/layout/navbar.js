import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import Cookies from 'js-cookie';
import Style from './navbar.module.css';
import { AddBoxOutlined, PermIdentityOutlined } from '@material-ui/icons';

const Navbar = (props) => {
	let userName = Cookies.get('username');
	let connected = Cookies.get('token');
	return (
		<div className={Style.header}>
			<Link to="/">
				<img src={Logo} alt="le bon coin logo" />
			</Link>
			<nav>
				<Link to="/post-offer">
					<div className={Style.btnPost}>
						<AddBoxOutlined /> Déposer une annonce
					</div>
				</Link>
				<div className={Style.greeting}>{connected ? 'Bonjour ' + userName : null}</div>
				<div className={Style.btnLogin}>
					<PermIdentityOutlined />
					{connected ? (
						<button
							onClick={() => {
								props.close();
							}}
						>
							Se deconnecter
						</button>
					) : (
						<button
							onClick={() => {
								props.action(true);
							}}
						>
							Se connecter
						</button>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
