import React from 'react';

const Status: React.FC = () => {
    return (
        <div className="status">
            <h1> Stay hungry Stay foolish </h1>
            <p>끊임없이 탐구하자.</p>
            <p>아직은 개발 진행중인 블로그입니다. 부족한점은 지적해주시면 고쳐가도록하겠습니다.<br/>
                영어를 잘하는 것은 아니지만 많이 사용해야 익숙해지고 실력향상이 된다는 생각에 자주 쓰려고 하고 있습니다. 영어가 많아도 이해해주세요!
            </p>
            <ul>
                <li><a href="https://github.com/DevMinGeonPark?tab=repositories">
                    Repository</a>
                </li>
            </ul>
        </div>
    );
}
export default Status;