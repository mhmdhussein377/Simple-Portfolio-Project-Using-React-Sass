import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from '../components/home/Home';
import About from "../components/about/About";
import Page from "../components/page/Page"
import Sidebar from '../components/sidebar/Sidebar';
import "./../scss/main.scss"
import Header from '../common/Header';

const Pages = () => {
    return ( <> <div className="main-div">
        <div className="side">
            <Sidebar/>
        </div>
        <main>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/page" element={<Page />}/>
            </Routes>
            <About />
        </main>
    </div> </>
  );
}

export default Pages