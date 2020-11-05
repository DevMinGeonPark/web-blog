import React from 'react';

const BasicSyntax: React.FC = () => {
    return (
        <main className="from">
            <div className="maincontent">
                <h2>JavaScript Basix Syntax - prototype</h2>
                <div className="outline">
                    <div className="outline-item">
                        <h3 className="sub-title">Introduction</h3>
                        <p>
                            JavaScript는 프로토타입 기반언어로 기존에 공부하던 객체지향언어, 절차지향언어들과는 조금 다른 방식으로 클래스 등을 정의한다
                           이런 개념적인 부분들이 javascript를 아는데 큰 도움이 될꺼라 여겨 정리해두려고한다.<br />
                           이장에서는 가장 중요한 개념인 프로토타입에 대해 다뤄볼려고한다.
                       </p>
                    </div>
                    <div className="outline-item">
                        <h3 className="sub-title">Main Subject</h3>
                        <h4>Object Oriented</h4>
                        <p>
                            프로토타입에 대해 설명하려면 객체지향에 대해 먼저 설명해야 하지 않을까 싶다.<br />
                           '객체지향'은 모든 물체를 '객체'라는 개념적 틀로 바라보는 시각에서 시작된 개념이다.<br />
                            예를들어, 우리가 잘 아는 유명한 게임인 리그오브레전드라는 게임을 개발한다고 가정해보자.<br />
                            리그오브레전드에는 100가지가 넘는 챔피언이 있는데, 먼저 이 챔피언들의 공통적인 부분들을 살펴보자.<br />
                            먼저 챔피언들은 각자의 이름, 외형, 스킬, 데미지 값을 가지고있다. 이부분들은 세부적으로는 다르지만 크게 봤을떄 공통적이다.<br />
                            그럼 우리는 champion 객체, 쉽게말하면 거푸집과같은 틀을 만들 수 있다. <br />
                            이 틀은 이름,외형,스킬,데미지가 들어갈 것이고 객체명은 champion이다.
                            이 champion예제를 조금 더 깊게 들어가서 야스오라는 챔피언으로 예를들면
                            야스오는 패시브스킬, q스킬 w스킬 e스킬 r스킬을 가지고있다.<br />
                            이 스킬이라는 녀석들은 사용자가 눌렀을 떄 그에 대한 반응이 나온다. 이처럼 불러졌을 떄 어떠한 것을 처리하고 반환하기도하는 것을
                            우리는 절차지향에서는 함수라고 불렀다. 이 함수가 객체안에서 사용되며 객체라는 범위를 벗어나지 하는 것(특수한 경우는 제외한다) 메서드라고 보면된다.
                            우리의 예에서 메서드는 유저가 눌렀을 떄 반응하여 필요한 스킬이 사용되는 것이라고 이해하면 될것같다.<br />
                            또 야스오는 외형, 데미지를 가지고있다. 이를 속성이라는 객체지향의 개념으로 정의할 수 있다.
                            지금까지의 설명을 코드화하면 <br />
                        </p>
                        <div className="codebox">
                            <code>
                                class Canmpion :
                                    'private string name = yasuo;' //챔피언의 이름을 정의
                                    'private var appearance = yasuo;' //
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default BasicSyntax;