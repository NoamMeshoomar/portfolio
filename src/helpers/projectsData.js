import SkillownPNG from "../assets/projects/skillown.png";
import ItoysPNG from "../assets/projects/itoys.png";
import SablePNG from "../assets/projects/sable.png";
import JingoPNG from "../assets/projects/jingo.png";
import WhatsappPNG from "../assets/projects/whatsapp.png";

const projects = [
	{
		id: 1,
		title: "Skillown Social Network",
		description: "Skillown is a Social Network to uploading your skills, Write Comments, Get Notifications, Followers & Profiles.",
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
		id: 2,
		title: "Itoys Ecommerce",
		description: "iToys is an online store that selling toys for kids with Accounts, Categories, Cart & PayPal payment method.",
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
		id: 3,
		title: "Sable Landing Page",
		description: "A landing page for a game that called Sable for Beta registration.",
		image: SablePNG,
		technologies: "React, Node.js, Express, MySQL",
		links: {
			github: "",
			link: "https://sable.co.il"
		},
		demoAccount: null
	},
	{
		id: 4,
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
		},
		right: true
	},
	{
		id: 5,
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
		}
	}
];

export default projects;
