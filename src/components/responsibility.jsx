import logoDivider from "../assets/images/Logodivider.png";
import kids from "../assets/images/sean-pollock-PhYq704ffdA-unsplash 1-2.png";
const Responsibility = () => {
	return (
		<>
			<div className="responsibility">
				<h1 className="missionTitle">Corporate Social Responsibility</h1>
				<img src={logoDivider} alt="" className="logoDivider" />
				<div className="container">
					<div className="infocardContainer">
						<div className="infoCard infoCardSelected">
							<h1>Education for the under-privileged</h1>
							<p>
								We believe that our future lies in the holistic
								educational foundation of the youth and we have nurtured
								that cause by providing the necessary books and monetary
								support to the under-privileged children of Mumbai &
								also at several villages in Gujarat. As the Trustees of
								the H A Desai Boarding School in Matunga, Mumbai, we
								have been providing living and hospitality services to
								the academically bright students from the weaker
								monetary sections of the society.
							</p>
						</div>
						<div className="infoCard">
							<h1>Support for Rural Farmers</h1>
						</div>
						<div className="infoCard">
							<h1>Spiritual</h1>
						</div>
					</div>
					<img src={kids} alt="" />
				</div>
			</div>
		</>
	);
};

export default Responsibility;