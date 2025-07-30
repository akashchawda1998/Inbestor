import React from 'react';

const ExpertCallForm = () => {
    return (
        <div className="expert-call-wrapper">
            {/* Left Section */}
            <div className="left-section">
                <h2>1:1 with a Inbestor expert</h2>
                <p className="subheading">Free • No commitment call</p>
                <p className="description">
                    Don't leave your future to chance, discover how Inbestor PMS protects and grows your wealth.
                </p>
            </div>

            {/* Right Section */}
            <div className="right-section">
                <h4>
                    Fill in your details & Join our <br />
                    Business Partner Network Today
                </h4>

                <form className="form">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Mobile No." />
                    <input type="email" placeholder="Email ID" />
                    <div className="submit-container">
                        <button type="submit">
                            SUBMIT <span>→</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ExpertCallForm;
