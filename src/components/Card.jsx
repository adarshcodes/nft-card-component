import React from "react";
import CardImg from "../images/image-equilibrium.jpg";
import EtherIcon from "../images/icon-ethereum.svg";
import ClockIcon from "../images/icon-clock.svg";
// import ViewIcon from "../images/icon-view.svg";
// import Avatar from "../images/image-avatar.png";

class Card extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="card--data">
					<img src={CardImg} alt="equilibrium" className="card--data__image" />

					<h1 className="card--data__title">Equilibrium #3429</h1>
					<p className="card--data__description para-font">
						Our Equilibrium collection promotes balance and calm
					</p>
				</div>

				<div className="card--nft">
					<div className="card--nft__pricing">
						<img src={EtherIcon} alt="Etherium" />
						<span>0.041 ETH</span>
					</div>

					<div className="card--nft__duration">
						<img src={ClockIcon} alt="Clock" />
						<span>3 days left</span>
					</div>
				</div>

				<hr />
			</div>
		);
	}
}

export default Card;
