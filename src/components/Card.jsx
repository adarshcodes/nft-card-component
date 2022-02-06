import React from "react";
import CardImg from "../images/image-equilibrium.jpg";
import EtherIcon from "../images/icon-ethereum.svg";
import ClockIcon from "../images/icon-clock.svg";
import ViewIcon from "../images/icon-view.svg";
import Avatar from "../images/image-avatar.png";

class Card extends React.Component {
	render() {
		return (
			<div className="card">
				<div className="card--data">
					<div className="card--data__image-container">
						<img
							src={CardImg}
							alt="equilibrium"
							className="card--data__image"
						/>

						<div className="card--data__activeModal">
							<img src={ViewIcon} alt="viewicon" />
						</div>
					</div>

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

				<div className="card--creator">
					<div className="card--creator__avatar">
						<img src={Avatar} alt="Avatar" />
					</div>
					<p className="card--creator__info">
						Creation of <span>Jules Wyvern</span>
					</p>
				</div>
			</div>
		);
	}
}

export default Card;
