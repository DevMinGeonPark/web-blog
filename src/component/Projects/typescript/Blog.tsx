import React from 'react';
import {BsLink45Deg} from 'react-icons/bs';

const Blog: React.FC = () => {
    return (
        <main className="from">
            <div className="maincontent">
                <h2>Project : Blog With Typescript and React and scss</h2>
                <a href="https://github.com/DevMinGeonPark/Blog">Github<BsLink45Deg /></a>
                <h4 className="sub-title">개발동기</h4>
                <p>
                    전역 후 취업이라는 결정을 하고 취업분야들을 살펴봤다. <br />
                    필자는 부산에 살고있기에 부산위주로 알아봤으나 아직 대학 재학 중인 현재 신분으로는 공고들의 대부분을 학력에서 짤린다는걸 꺠달았고 그중에서도 백엔드 분야는 대졸은 기본이라는 걸 알게되었다. 
                    그래서 프론트부터 올라가다는 마인드로 웹 공부를 결심했고, 최근 업계에서 유행한다는 Angular.js, React.js, Vue.js 중 React를 선택하여 SAP 웹을 개발하게되었다.
                </p>

                <h4 className="sub-title">프로그램 설명</h4>
                <p>
                    기본적으로 SAP 형식의 웹을 React로 제작하고자하였고 보통 정적인 타입형식을 채용하는 
                    컴파일러 언어들만 공부했던 터라 프로토타입기반에 인터프리터언어인 자바스크립트보다는 
                    정적인 타입인 TypeScript를 선택하여 진행했다. <br />
                    그리고 처음에는 CSS 기반으로 프로그램을 구현하고있었지만 개발 중 구조적으로 복잡해지니 디자인 관리가 어려워져 SCSS를 사용하기 시작했다.
                    개발 환경은 VSCode + Windows 10 pro로 진행했고 최대한 반응형으로 제작하려고 노력했지만 
                    짧은 기간안에 Top-down 방식이 아닌 테스트위주로 진행하였기에 유지보수 측면이나 반응형 측면에서 아직 미숙한것같다. 차후 계속 개선해나갈 예정이다.
                </p>

                <h4 className="sub-title">후기</h4>
                <p>
                    script 계열의 프로토타입이라는 방식이 너무 생소했고 React자체도 처음이라 검색과 공식문서는 사실상 끼고 살았다. 
                    매일 저녁 점호 전에 React와 ES6 공식문서를 탐독하며 선임이 왜 맨날 공식문서를 시간나면 보라는 지를 이해하는 시간이였다. <br/>
                    기업에서 왜 철저하게 설계하고 디자인분야 기획분야를 따로 나누는지 깨달았다. 처음에 정해놓지 않으니 중간중간에 꼬이는걸 느꼈다.
                    그리고 디자인 능력이 부족한것을 느꼈고.. 무엇보다 정해놓지 않고 시작하니 계속 무언가를 추가했다.
                    일례로 Typescript,scss는 어느정도 개발중에 불편함을 깨달았고 개발환경부터 다시 세팅하여 새로 제작했다. <br/>
                    또 원격으로 개발을 진행했던 터라 CAPSLOCK키와 한영키가 먹히지 않아 너무 불편했고 중간에 클래스 기반으로 구현중인 코드를 Hook 기반으로 재구현하는데 또 시간을 소요했다.
                    그럼에도 나 혼자 노베이스부터 여기까지 혼자 구현했다는거에 의의를 두고싶다.
                </p>
            </div>
        </main>
    );
}
export default Blog;