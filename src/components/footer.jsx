import logoDivider from "../assets/images/Frame_96.png"
import logoFooter from "../assets/images/hetali_logo_final_29.7_1-2.png"
const footerMenus = [
	{
		menuName: "Quick Links",
		menuItems: [
			"Contact Us",
			"About Us",
			"Testimonial",
			"Gallery",
			"Site Map",
		],
	},
	{
		menuName: "Flats in Mumbai",
		menuItems: [
			"1BHK Andheri West",
			"2 BHK Andheri West",
			"3 BHK Andheri West",
			"1BHK Goregaon East",
			"2BHK Goregaon East",
		],
	},
	{
		menuName: "Projects in Mumbai",
		menuItems: [
			"Ongoing",
			"Upcoming",
			"Completed",
			"Hetali Blessings",
			"Hetali Anuchhaya",
		],
	},
];

const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="logomenuContainer">
					<img src={logoFooter} alt="" />
					<div className="menuContainer">
						{footerMenus.map((data, idx) => (
							<ul key={idx}>
								<h3>{data.menuName}</h3>
								{data.menuItems.map((item, idx2) => (
									<li key={idx2}>
										<a href="#">{item}</a>
									</li>
								))}
							</ul>
						))}
					</div>
				</div>
                <img src={logoDivider} alt="" />
                <h5>Copyright © 2022 Hetali Enterprises - All Rights Reserved.</h5>
			</div>
		</>
	);
};
export default Footer;
