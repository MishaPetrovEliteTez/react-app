import React from 'react';

import HelloWorld from "./HelloWorld";
import Header from "./Header";
import Footer from "./Footer";

const Content = () =>
        <div>
            <Header/>
            <div>
                <h1>H1</h1>
                <p>p324231</p>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
                <HelloWorld/>
            </div>
            <Footer/>
        </div>;

export default Content
