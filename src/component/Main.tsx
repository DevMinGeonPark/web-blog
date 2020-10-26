import React from 'react';
import 'style/Main.scss';

const Main: React.FC = () => {
    return (
        <main className="test">
            <div>
                <h1>
                    임시
                </h1>
                <p>
                    구현할 기능리스트
                </p>
                <ul>
                    <li>사이드 바 기능</li>
                    <li>검색 기능</li>
                    <li>반응형 디자인</li>
                </ul>
            </div>
        </main>
    );
}
export default Main;