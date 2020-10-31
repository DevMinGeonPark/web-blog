import React from 'react';
import Status from './MainComponent/Status';
import Projects from './MainComponent/Projects';
import Posts from './MainComponent/Posts';
//import Books from './MainComponent/Book';

const Main: React.FC = () => {
    return (
        <main className="from">
            <div className="maincontent">
                <Status />
                <Projects />
                <Posts />
                {/* <Books /> */}
                <h1>추가 구현예정</h1>
                <ul>
                    <li>검색 기능</li>
                    <li>반응형 디자인</li>
                    <li>댓글기능</li>
                    <li>로그인 기능</li>
                </ul>
            </div>
        </main>
    );
}
export default Main;