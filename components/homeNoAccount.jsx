import React from "react";
import { FaArrowRight } from "react-icons/fa";

function HomeNoAccount() {
    return (
        <div className="homeNoAccount">
            <h1>Find Scholarships That Fit You Best</h1>
            <p>Match. Apply. Succeed</p>
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
