import logoDivider from "../assets/images/Logodivider.png";
import gift from "../assets/images/sean-pollock-PhYq704ffdA-unsplash 1.png";

const Mission = () => {
	return (
		<>
			<div className="mission">
				<h1 className="missionTitle">Mission</h1>
				<img src={logoDivider} alt="" className="logoDivider" />
				<div className="container">
					<img src={gift} alt="" />
					<div className="infocardContainer">
						<div className="infoCard infoCardSelected">
							<h1>Personalised</h1>
							<p>
								Our core idealogy is to provide personalised homes to
								meet the very specific needs of residents.
							</p>
						</div>
						<div className="infoCard">
							<h1>Committed</h1>
						</div>
						<div className="infoCard">
							<h1>Quality & Service Oriented</h1>
						</div>
						<div className="infoCard">
							<h1>Timely</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Mission;
