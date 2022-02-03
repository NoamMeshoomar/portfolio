import FourGame from "../assets/projects/fourgame.png";
import SkillownPNG from "../assets/projects/skillown.png";
import ItoysPNG from "../assets/projects/itoys.png";
import SablePNG from "../assets/projects/sable.png";
import JingoPNG from "../assets/projects/jingo.png";
import WhatsappPNG from "../assets/projects/whatsapp.png";

const projects = [
    {
		id: 1,
		title: "Sable Virtual World",
		description: "Sable is an upcoming wonderful virtual world for kids and teenagers. In Sable you can get your own ferre-tar, design your look, explore the world, meet new people, play games, trade and sell items, and a lot more!",
		image: SablePNG,
		technologies: "React, Redux, Node.js, Express, Socket.IO, MongoDB, Phaser, OOP, MySQL",
		links: {
			github: "",
			link: "https://sable.co.il"
		},
		demoAccount: {
            login: "test",
            password: "1qaz2wsx"
        }
	},
    {
		id: 2,
		title: "Four Game",
		description: "In Four game you play against a bot which is on the server. The target of the game is to put in a row or column or diagonally 4 times in your color, the first one who succeeds wins the game!",
		image: FourGame,
		technologies: "Vue 3, Node.js, Socket.IO",
		links: {
			github: "https://github.com/NoamMeshoomar/fourgame",
			link: "https://fourgamenoam.netlify.app/"
		},
        right: true
	},
	{
		id: 3,
		title: "Skillown Social Network",
		description: "Skillown is a Social Network for uploading videos of your skills, Anyone can open an account with their own personal page, Upload videos, Watch, Like, Comment, And follow users!",
		image: SkillownPNG,
		technologies: "React, Redux, Node.js, Express, MongoDB",
		links: {
			github: "https://github.com/NoamMeshoomar/skillown-social_network",
			link: "https://skillown.netlify.app"
		},
		demoAccount: {
			login: "test@gmail.com",
			password: "1qaz2wsx"
		}
	},
	{
		id: 4,
		title: "Itoys Ecommerce",
		description: "iToys is an online toy store for kids with a PayPal payment method, modern and responsive design, Cart & Account.",
		image: ItoysPNG,
		technologies: "React, Redux, Node.js, Express, MongoDB",
		links: {
			github: "https://github.com/NoamMeshoomar/itoys-ecommerce",
			link: "https://itoys.netlify.app"
		},
		demoAccount: {
			login: "test@gmail.com",
			password: "1qaz2wsx"
		},
		right: true
	},
	{
		id: 5,
		title: "Jingo Virtual World",
		description: "Jingo is a virtual world multiplayer game, The game include Chat with people, Item System, Inventory, Trades, Shops, Rooms & More!",
		image: JingoPNG,
		technologies: "HTML, CSS, Vanilla JavaScript, Node.js, Express, Socket.IO",
		links: {
			github: "",
			link: "https://jingo-world.herokuapp.com"
		},
		demoAccount: {
			login: "test",
			password: "1qaz2wsx"
		}
	},
	{
		id: 6,
		title: "Whatsapp Clone",
		description: "This is a whatsapp clone project, With some features such as Accounts, Add Contacts & Send Messages in real time.",
		image: WhatsappPNG,
		technologies: "React, Redux, Node.js, Express, MongoDB, Socket.IO",
		links: {
			github: "https://github.com/NoamMeshoomar/whatsapp-clone",
			link: "https://whatsapp-noam.netlify.app/signin"
		},
		demoAccount: {
			login: "test@gmail.com",
			password: "1qaz2wsx"
		},
        right: true
	}
];

export default projects;
