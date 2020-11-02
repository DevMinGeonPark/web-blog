import React from "react";

const Profile: React.FC = () => {
    return (
        <main className="from">
            <div className="maincontent">
                <div className="container">
                    <div className="personal-card-item">
                        <div className="card">
                            <div className="card-body">
                                <figure><img src="https://s3.ivisa.com/website-assets/blog/id-photo2.jpg" alt="profile" /></figure>
                                <div className="personal-data">
                                    <div className="profiles">
                                        <h4>MinGeon Park</h4>
                                        <p>Developer</p>
                                        <p>R.O.K Busan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="link-list">
                                <ul>
                                    <li className="link-item">
                                        <h6>Website</h6>
                                        <span>DevMinGeonPark</span>
                                    </li>
                                    <li>
                                        <h6>Github</h6>
                                        <span>DevMinGeonPark-repository</span>
                                    </li>
                                    <li>
                                        <h6>instargram</h6>
                                        <span>#MinGeonPark</span>
                                    </li>
                                    <li>
                                        <h6>facebook</h6>
                                        <span>#MinGeonPark</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="about-item">
                        <div className="personal-status">
                            <div className="card">
                                <div className="card-body">
                                    <div className="status">
                                        <div className="status-key"><h6>Full Name</h6></div>
                                        <div className="status-item">MinGeonPark</div>
                                        <hr/>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                dd
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Profile;