import React from 'react';

const ImageManger: React.FC = () => {
    return (
        <main className="from">
            <div className="maincontent">
                <h2>Project : ImageManger with python Seleminum</h2>
                <a href="https://github.com/DevMinGeonPark/BlackToonManger">Github</a>
                <h4>개발동기</h4>
                <p>
                    추석 떄 스파르타 코딩클럽이라는 사이트에서 무료로 강의와 코칭을 한다길래 크롤링을 한번도 해본적이 없기에 이번 기회에 해보자는 마인드로 시작했다. <br />
                    강의에서는 python seleminum을 이용해서 다음에 원하는 연예인사진을 자동으로 긁어오는 프로그램을 구현하는데 개인적으로 검색은 다 구글로 해결하는 입장에서 구글로 구현하는게 맞지 않아 싶어서 강의와는 다르게 구글로 구현했다.
                </p>

                <h4>프로그램 설명</h4>
                <p>
                    seleminum을 이용해서 구글에 원하는 이미지를 긁어오는 간단한 프로그램. 단편적으로 구현되어서 검색어를 입력받고 이미지를 다운받게는 구현되어있지 않다. 차후 블랙툰매니저에서는 구현되어있다.
                </p>

                <h4>후기</h4>
                <p>
                    객체지향 프로그램을 해본적이 없다보니 너무 어렵게만 생각한 것 같다. 강의가 너무 간단하게 구성되어있어서 중간에 하차하고 혼자만들었다. 이후 블렉툰 매니저를 만들 자신감을 얻었다.
                </p>
            </div>
        </main>
    );
}
export default ImageManger;