import long_logoDivider from "../assets/images/Long_Logodivider.png";
import logoDivider from "../assets/images/Logodivider.png";
import profile from "../assets/images/image 8.png";

const FounderMessage = () => {
	return (
		<>
			<div className="founderMessage">
				<div className="container">
					<h1>Founder's Message</h1>
					<div className="profile">
						<div className="profilePhoto">
							<div>
								<img src={profile} alt="" />
							</div>
						</div>
						<img src={logoDivider} alt="" />
						<h2>Mr. Jayesh H. Pandya</h2>
						<p cl>
							“When a customer buys a home, he is giving up a major chunk
							of his life's savings to do so. It is imperative to give
							him exactly what he looks for in his home.”
						</p>
					</div>
					<p className="infoProfile">
						We bring to our clients much wanted human values, integrity,
						trust and an assurance of responsibility all coupled with our
						expertise in construction, engineering & management. Our
						biggest assets have always been our small but highly trained
						team of professional managers and engineers who are backed by
						a very able team of administrators. We have a clear vision
						about building on our strengths and our achievements while
						holding dear to us our basic principles
					</p>
				</div>
				<img src={long_logoDivider} alt="" />
			</div>
		</>
	);
};

export default FounderMessage;
