var React = require('react');

let Main = (props) => {
	return (
		<div>
			<div >
				<div >
					<p>Main.jsx rendered</p>
					{props.children}
				</div>
			</div>
		</div>
	);
};

module.exports = Main;