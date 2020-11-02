import React from 'react';
import Status from './mainComponent/Status';
import Projects from './mainComponent/Projects';
import Posts from './mainComponent/Posts';

const Main: React.FC = () => {
    return (
        <main className="from">
            <div className="maincontent">
                <Status />
                <Projects />
                <Posts />
                <h1>추가 구현예정</h1>
                <ul>
                    <li>검색 기능</li>
                    <li>반응형 디자인 +) galaxy font 유지보수</li>
                    <li>댓글기능</li>
                    <li>로그인 기능</li>
                    <li>개인 프로필 사이트 만들기</li>
                </ul>
            </div>
        </main>
    );
}
export default Main;