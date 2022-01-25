
import React from 'react';
import WAPOL from '../../Components/assets/projects/WAPOL2.png';
import MOMENTUM from '../../Components/assets/projects/MomentumTrading.png';
import RESISTANCE from '../../Components/assets/projects/Resistance.png';
import Project from '../../Components/Project';

const Projects = () => {
    return (
        <>
            <div className="page" id='Projects'>
                <h1 className="title">Projects</h1>
                <h3 className="subheading" style={{textAlign: "center"}}><a href="https://github.com/JakeLDev" target="_blank">GitHub</a></h3>
                <div className="paragraph">
                    <p className="content" style={{textAlign: "center"}}>Here is a list of projects that I have either completed, or am currently working on. This includes University Projects, Personal Projects, Projects for Clubs, and Jobs undertaken at work.</p>
                </div>
                <div className="Project-container">
                    <hr className="Sub-separator"></hr>
                    <Project title="Crime Data Visualisation for the WA Police Force"
                        image= {WAPOL}
                        desc= "Created an interactive desktop application for the Data Science and Analytics Division of the WA Police Force to visualize crime data trends on an interactive heat map of Western Australia. Developed in a team of six over the course of 3 months. Our implementation involved the rapid analysis of a csv file containing 300,000 lines of time series data before displaying it within an interactive html page displayed locally. I Performed a team leadership role, including ensuring that deliverables were completed on time, and managing my team’s resources and task allocation."
                        tools="Python, Pandas, PyQt5, GIS, SciPy"
                        repo="Private as requested by WAPOL" />

                    <hr className="Sub-separator"></hr>

                    <Project title="Momentum Trading Algorithm"
                        image= {MOMENTUM}
                        desc= "Created a set of algorithms to trade cryptocurrencies, based around the trading strategy of “momentum trading”. The results were then documented in a report. (The Semester 2 Project for QFin UWA’s Trading Team). Worked in a team of 3 people to create a set of Python algorithms with the goal of achieving a positive return when trading on 2020 price data for popular cryptocurrencies. Our algorithm was tested against both the market and the other trading teams’ algorithms. Our algorithm greatly outperformed the market, sometimes returning as good as 8x the return as opposed to buying and holding. We also outperformed the algorithms written by all other teams."
                        tools="Python, Gemini Modules, Numpy, Pandas"
                        repolink="https://github.com/QFinUWA/2021-Momentum-Trading-Buy-Low-Sell-Lower" />

                    <hr className="Sub-separator"></hr>

                    <Project title="“The Resistance” Card Game Artificial Intelligence Agent"
                        image= {RESISTANCE}
                        desc= "Researched and developed a game-playing Artificial Intelligence agent to play the card game “The Resistance” to compete in a tournament at UWA. We created an agent that utilizes Bayes’ Rule for calculating probabilities in a Bayesian, imperfect information game."
                        tools="Python"
                        repolink="https://github.com/JakeLDev/The-Resistance-AI-CITS3001"/>
                </div>
            </div>
            <hr className="Section-separator"></hr>
        </>)};

export default Projects;