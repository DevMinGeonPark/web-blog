import React from 'react';

const CondingConvention: React.FC = () => {
    return (
        <main className="from">
            <div className="maincontent">
                <h2>React Coding Convention</h2>
                <div className="outline">
                    <div className="outline-item">
                        <h3>Introduction</h3>
                        <p>
                            블로그를 개발하던 중 막히는 부분들이 많았다.
                            그런데 그 이유가 기술의 개념적인 부분들을 몰라서 그런 경우도 많지만,
                            coding convention이 정해져 있지않아서 코드가 길어지면서 관리가 힘들어지고
                            오류의 원인을 정확히 파악하지 못한 경우가 많았다.
                            그러다보니 계속 이런식이면 변화가 없다는 생각이 문득 들어 React의 conding Convention을 찾던 중
                            AirBnB에서 Github에 올린 "Airbnb React/JSX Style Guide"를 참고하게되었다. 또한 필요하다고 생각되는 부분만 발췌하였고 내 경우에 맞게 변경하였다.
                            아직 가이드에 맞게 수정하는 중이라 가이드대로 되지 않은 부분들이 많지만 관련된 부분들을 정리해두는게 좋을 것 같아 작성하게되었다. <br />
                            자세한 내용은 https://github.com/airbnb/javascript/tree/master/react에서 참고가능하다.
                        </p>
                    </div>
                    <div className="outline-item">
                        <h3>Main Subject</h3>
                        <ul>
                            <li>
                                Basic Rule
                                <ul>
                                    <li> Only include one React component per file.
                                        <p>However, Multiple Stateless, or Pure, Components are allowed pre file.</p>
                                    </li>
                                    <li> Always use TSX syntax</li>
                                    <li>Do not use React.createElement unless you’re initializing the app from a file that is not JSX.</li>
                                </ul>
                                <li> Do not use mixins. </li>
                                <li>Naming
                                    <ul>
                                        <li>
                                            Extensions:
                                            Use .tsx extension for React component
                                        </li>
                                        <li>
                                            Filename:
                                            Use PascalCase for filenames
                                        </li>
                                        <li>
                                            Reference Naming:
                                            use PascalCase for React component and camelCase for their instances.
                                        </li>
                                        <li>
                                            Component Naming:
                                            Use the filename as the component name.
                                            For example, App.tsx should have a reference name of App.
                                            However, for root components of a directory, use index.jsx as the filename and use the directory name as the component name
                                        </li>
                                        <li>
                                            Higher-order Component Naming:
                                            Use a composite of the higher-order component’s name and the passed-in component’s name as the displayName on the generated component.
                                            For example, the higher-order component withFoo(), when passed a component Bar should produce a component with a displayName of withFoo(Bar).
                                        </li>
                                        <li>
                                            Props Naming: Avoid using DOM component prop names for different purposes.<br/>
                                            ::variant 공부 후 변경하기.
                                        </li>
                                    </ul>
                                </li>
                            </li>
                        </ul>
                        추가예정
                    </div>
                </div>
            </div>
        </main>
    );
}
export default CondingConvention;