import React, { useState } from "react";
import AnnouncementBand from '../../components/AnnouncementBand';
import '../../css/home.css'
import '../../assets/fonts/chaney-fonts.css';
import '../../assets/fonts/blowbrush-font.css';
import bg0 from '../../assets/images/bg-0.png';
import bg1 from '../../assets/images/bg-1.png';
import bg3 from '../../assets/images/bg-3.png';
import spray from '../../assets/images/spray.png';
import courtLeft from '../../assets/images/court-left.png';
import courtRight from '../../assets/images/court-right.png';
import eIcon from '../../assets/images/e-icon.png';
import wIcon from '../../assets/images/w-icon.png';
import logo from '../../assets/images/logo.png';
import hero from '../../assets/images/player-cards.png';
import stephen from '../../assets/images/oval-2.png';
import clippers from '../../assets/images/clippers.png';
import grizzlies from '../../assets/images/grizzlies.png';
import lakers from '../../assets/images/lakers.png';
import mavericks from '../../assets/images/mavericks.png';
import nuggets from '../../assets/images/nuggets.png';
import pelicans from '../../assets/images/pelicans.png';
import rockets from '../../assets/images/rockets.png';
import timberwolves from '../../assets/images/timberwolves.png';

const Home = () => {
	const [menuItem, setMenuItem] = useState(0);
	const handleClickMenu = (index) => (e) => {
		setMenuItem(index);
	}
  return (
		<div class="bg">
			<AnnouncementBand />
			<div class="content">
				<img src={bg0}
					// srcset="img/bg-0@2x.png 2x,
					// 				img/bg-0@3x.png 3x"
					class="bg-0"></img>
				<img src={bg1} class="bg-1"></img>	
				<img src={spray} class="spray"></img>
				<img src={courtLeft} class="court-left"></img>
				<img src={courtRight} class="court-right"></img>
				<img src={eIcon} class="e-icon"></img>
				<img src={wIcon} class="w-icon"></img>
		</div>
		<div class="main-body">
			<div class="menu-band">
				<img src={logo} class="logo"></img>
				<div class="d-flex align-items-end">
					<div class={`menu-button ${menuItem === 0 ? 'menu-button-active':''}`} onClick={handleClickMenu(0)}>Home</div>
					<div class={`menu-button ${menuItem === 1 ? 'menu-button-active':''}`} onClick={handleClickMenu(1)}>MARKETPLACE</div>
					<div class={`menu-button menu-button-black ${menuItem === 2 ? 'menu-button-active':''}`} onClick={handleClickMenu(2)}>
						GAMES
						<div class="menu-button-soon">soon</div>
					</div>
					<div class={`menu-button menu-button-black ${menuItem === 3 ? 'menu-button-active':''}`} onClick={handleClickMenu(3)}>
						CHALLENGES
						<div class="menu-button-soon">soon</div>
					</div>
					<div class={`menu-button menu-button-black ${menuItem === 4 ? 'menu-button-active':''}`} onClick={handleClickMenu(4)}>
						LEADERBOARD
						<div class="menu-button-soon">soon</div>
					</div>
					<div class={`menu-button menu-button-yellow ${menuItem === 5 ? 'menu-button-active':''}`} onClick={handleClickMenu(5)}>
						CONNECT WALLET						
					</div>

				</div>
			</div>
			<div class="main-hero d-flex row">
				<div class="hero-left col-sm-12 col-md-6">
					<div class="Own-The-Best-Rule-T">
						<div >
							Own The 
						</div>
						<div class="text-style-1">
							Best.
						</div>
						<div class="">
							Rule The 
						</div>
						<div class="text-style-1">
							Game.
						</div>				 
					</div>
					<div class="Buy-sell-and-colle">
					  Buy, sell, and collect official NBA players to play and earn. Superhuman is a virtual gaming universe with upgradable characters, high rewarding games and exclusive offers for sports fans.
					</div>
					<div class="buttons">
						<button class="join-button-inner">
							Join Now
						</button>						
						<button class="button-me d-flex">
							<img src={stephen} class="Oval-2"></img>
							<div class="d-flex flex-column mt-2 ml-3">
							<span class="stephen">stephen</span> 
							<span class="stephen curry">curry</span> 
							</div>
						</button>
						<span class="VERIFIED-players">VERIFIED players</span> 				
					</div>
				</div>
				<div class="hero-img col-sm-12 col-md-6" >
					<img src={hero} class="player-cards"></img>
				</div>
			</div>
			<div class="d-flex flex-column mt-5">
				<div class="western-conference">western conference</div>				
				<div class="brands-band">
					<img src={pelicans} class="brand-icon"></img>
					<img src={timberwolves} class="brand-icon"></img>
					<img src={grizzlies} class="brand-icon"></img>
					<img src={lakers} class="brand-icon"></img>
					<img src={mavericks} class="brand-icon"></img>
					<img src={clippers} class="brand-icon"></img>
					<img src={nuggets} class="brand-icon"></img>
					<img src={rockets} class="brand-icon"></img>
					<img src={lakers} class="brand-icon"></img>
					<img src={mavericks} class="brand-icon"></img>
					<img src={clippers} class="brand-icon"></img>
					<img src={nuggets} class="brand-icon"></img>
					<img src={rockets} class="brand-icon"></img>
				</div>
			</div>
			<div class="d-flex justify-content-end flex-column">
				<div class="brands-band2 ">
					<img src={mavericks} class="brand-icon"></img>
					<img src={clippers} class="brand-icon"></img>
					<img src={nuggets} class="brand-icon"></img>
					<img src={rockets} class="brand-icon"></img>
					<img src={mavericks} class="brand-icon"></img>
					<img src={clippers} class="brand-icon"></img>
					<img src={nuggets} class="brand-icon"></img>
					<img src={rockets} class="brand-icon"></img>
					<img src={mavericks} class="brand-icon"></img>
					<img src={clippers} class="brand-icon"></img>
					<img src={nuggets} class="brand-icon"></img>
					<img src={rockets} class="brand-icon"></img>
					<img src={mavericks} class="brand-icon"></img>
					<img src={clippers} class="brand-icon"></img>
					<img src={nuggets} class="brand-icon"></img>
					<img src={rockets} class="brand-icon"></img>
					<img src={mavericks} class="brand-icon"></img>
					<img src={clippers} class="brand-icon"></img>
					<img src={nuggets} class="brand-icon"></img>
					<img src={rockets} class="brand-icon"></img>
				</div>
				<div class="estern-conference">EASTERN CONFERENCE</div>
			</div>
		</div>
		<div class="d-flex mt-5 justify-content-center">
			<div class="bottom-menu">
		  	<img src={bg3} class="bg-3"></img>
			<div class="d-flex bottom-card-container">
				<div class="bottom-card col-12 col-md-4">
					<div class="bottom-card-award"> lorem IPSUM</div>
					<div class="bottom-card-title"> consectetur adipiscing elit</div>
					<div class="bottom-card-desc"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam remomnis iste natus error.</div>
				</div>
				<div class="bottom-card col-12  col-md-4">
					<div class="bottom-card-award"> lorem IPSUM</div>
					<div class="bottom-card-title"> consectetur adipiscing elit</div>
					<div class="bottom-card-desc"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam remomnis iste natus error.</div>
				</div>
				<div class="bottom-card col-12 col-md-4">
					<div class="bottom-card-award"> lorem IPSUM</div>
					<div class="bottom-card-title"> consectetur adipiscing elit</div>
					<div class="bottom-card-desc"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam remomnis iste natus error.</div>
				</div>
			</div>
			</div>
		</div>
		</div>
	)
    
}

export default Home;