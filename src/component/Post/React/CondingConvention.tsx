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
                                    <li>Do not use <code>React.createElement</code> unless you’re initializing the app from a file that is not JSX.</li>
                                </ul>
                                <li> Do not use mixins. </li>
                                <li>Naming
                                    <ul>
                                        <li>
                                            Extensions:
                                            Use <code>.tsx</code> extension for React component
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
                                            For example, <code>App.tsx</code> should have a reference name of <code>App</code>.
                                            However, for root components of a directory, use index.jsx as the filename and use the directory name as the component name
                                        </li>
                                        <li>
                                            Props Naming: Avoid using DOM component prop names for different purposes.<br />
                                            ::variant 공부 후 변경하기.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Alignment: Follow these alignment styles for JSX syntax.
                                        </li>
                                <li>
                                    Quotes: Always use double quotes ("") for JSX attributes, but single quotes ('') for all other JS.
                                        </li>
                                <li>
                                    Spacing:
                                            <ul>
                                        <li>
                                            Always include a single space in your self0closing tag.
                                                </li>
                                        <li> Do not pad Jsx curly braces with spaces.</li>
                                    </ul>
                                </li>
                                <li>
                                    Props:
                                            <ul>
                                        <li>Always use camelCase for props names, or Pascal Case if the prop value is a React component.</li>
                                        <li>Omit the value of the prop when it is explicitly true.</li>
                                        <li>Always inclued an alt prop on <code>&#60;img&#62;</code> tag.
                                                if the image is presentational, alt can be an empty string or the
                                                <code>&#60;img&#62;</code> must have <code>role="presentation"</code></li>
                                        <li>Do not use words like "image", "photo", or "pictrue" in <code>&#60;img&#62;</code> <code>alt</code> props.</li>
                                        <li>Use only valid, non-abstract ARIA roles.</li>
                                        <li>Do not <code>accessKey</code> on elements.</li>
                                        <li>
                                            Avoid using an array index as key prop, prefer a stable ID <br />
                                            We don't recommend using indexes for keys if the order of items may change.
                                        </li>
                                    </ul>
                                </li>
                                <li>Refs:
                                            <ul><li>Always use ref callbacks.</li></ul>
                                </li>
                                <li>Parentheses:
                                            <ul><li>Wrap JSX tags in parentheses when they span more than one line.</li></ul>
                                </li>
                                <li>Tag:
                                    <ul>
                                        <li>Always self-close tag that have no children.</li>
                                        <li>If your component has multiline properties, close tis tag on a new line.</li>
                                    </ul> 
                                </li>
                                <li>Methods:
                                    <ul>
                                        <li>
                                            Use arrow functions to close over loacl variables. it is handy when your need to pass additional data to an event handler.<br/>
                                            Bind event handlers for the render method in the constructor.
                                        </li>
                                        <li>Do not use underscore prefix for internal methods of a React component</li>
                                        <li>Be sure to return a balue in your <code>render</code> methods.</li>
                                    </ul>
                                </li>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default CondingConvention;