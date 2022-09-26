import logoDivider from "../assets/images/Logodivider.png";

//images
import agriculture from "../assets/images/image 3.png"
import fule from "../assets/images/image 5.png"
import food from "../assets/images/image 9.png"

const GroupCompanies = () => {
	return (
		<>
			<div className="groupCompanies">
				<h1 className="groupCompaniesTitle">Group Companies</h1>
				<img src={logoDivider} alt="" />
                <div className="container">
                    <div className="imgContainer">
                        <img src={agriculture} alt="" />
                        <h2>Agriculture</h2>
                    </div>
                    <div className="imgContainer">
                        <img src={fule} alt="" />
                        <h2>Fuel</h2>
                    </div>
                    <div className="imgContainer">
                        <img src={food} alt="" />
                        <h2>Foods</h2>
                    </div>
                </div>
			</div>
		</>
	);
};

export default GroupCompanies;
