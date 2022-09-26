import logoDivider from "../assets/images/Logodivider.png";
import long_logoDivider from "../assets/images/Long_Logodivider.png";
import happyfamily from "../assets/images/pexels-migs-reyes-4205505.jpg";

//miniLogo import
import miniLogo1 from "../assets/images/miniLogo/timer_FILL0_wght400_GRAD0_opsz48 1.png";
import miniLogo2 from "../assets/images/miniLogo/grade_FILL0_wght400_GRAD0_opsz48 1.png";
import miniLogo3 from "../assets/images/miniLogo/handshake_FILL0_wght400_GRAD0_opsz48 1.png";
import miniLogo4 from "../assets/images/miniLogo/real_estate_agent_FILL0_wght400_GRAD0_opsz48 1.png";

const About = () => {
	return (
		<>
			<div className="about">
				<h1>About Us</h1>
				<img src={logoDivider} alt="" className="logoDivider" />
				<div className="happyFamily"></div>
				{/* <img src={happyfamily} alt="" className="happyFamily"/> */}
				<div className="infoContainer">
					<p className="firstPara">
						We endeavour to build homes which make it's residents happy
						and proud of their address. Residents are at heart of
						everything we do, we build homes to live in, not houses to
						stay in.
					</p>
					<img src={long_logoDivider} alt="" />
					<div className="cardContainer">
						<div className="rows">
							<div className="card1 cards">
								<img src={miniLogo1} alt="" />
								<p className="cardsPara">
									Our track record has been impeccable with
									<strong>project completion on time</strong> and have
									surpassed expectations many a time, society members
									have positively received our redevelopment plans and
									encourage our
									<strong>modern and urbane designs</strong> to their
									neighbours.
								</p>
							</div>
							<div className="card2 cards">
								<img src={miniLogo2} alt="" />
								<p className="cardsPara">
									The Hetali Group is a redeveloper like no other with
									a <strong>profound focus on quality</strong> and
									<strong>
										long term satisfaction of its residents.
									</strong>
								</p>
							</div>
						</div>
						<div className="rows">
							<div className="card3 cards">
								<img src={miniLogo3} alt="" />
								<p className="cardsPara">
									They just don't endeavour but build homes which make
									it's residents proud of their address
									<strong>
										by putting home-owners at the heart and soul of
										everything
									</strong>
									they do from start to finish and post completion.
								</p>
							</div>
							<div className="card4 cards">
								<img src={miniLogo4} alt="" />
								<p className="cardsPara">
									Hetali Group lives by the ethos of
									<strong>
										building homes to live and not houses to stay in.
									</strong>
								</p>
							</div>
						</div>
					</div>
					<div className="blackDivider"></div>
					<p className="infoParas">
						Established in 1992, Hetali Group is a leading real estate
						developer of residential spaces across Mumbai and have earned
						an unmatched reputation amongst its very loyal customers. The
						company's customer-centric values, project management
						proficiency and technical expertise are amplified with over
						6.5 lakh sq.ft. built and almost 1 lakh sq.ft underway leading
						to more than families!
					</p>
					<p className="infoParas">
						The Hetali Group promises a lifestyle second to none. In a
						span of over four decades, the group has proved to be one of
						the most reputed real estate builders in the western suburbs
						of Mumbai with residences in prime locations such as Andheri,
						Goregaon, Vile Parle and Juhu.
					</p>
					<p className="infoParas">
						Spearheaded by Mr Jayesh Pandya, the company's central
						ideology is to provide homes customized to the customer's
						requirements and home's that are superior in nature keeping in
						mind the needs of the modern home user.
					</p>
				</div>
			</div>
		</>
	);
};

export default About;
