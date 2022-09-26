import logo from "../assets/images/hetali_logo_final.png";

const menulist = [
	"ABOUT US",
	"PROJECTS",
	"DIVERSIFICATION",
	"OUR PROCESS",
	"TESTIMONIALS",
	"CAREERS",
	"CONTACT US",
];

const Header = () => {
	return (
		<>
			<div className="header">
				<a href="#">
					<img src={logo} alt="logo" />
				</a>
				<div>
					<ul>
						{menulist.map((item, index) => (
							<a href="#">
								<li key={index}>{item}</li>
								<span></span>
							</a>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Header;
