import React from "react";
import { FaArrowRight } from "react-icons/fa";

function HomeNoAccount() {
    return (
        <div className="homeNoAccount">
            <p className="big">Find Scholarships That Fit You Best</p>
            <p className="home">Match. Apply. Succeed</p>
            <div className="buttonContainer">
                <button className="btn">
                    Get Started
                    <FaArrowRight className="arrowRight" />
                </button>
            </div>
        </div>
    );
}

export default HomeNoAccount;
