import React from "react";
import './menu.css';

export default props => {
    return (
        <nav className="custom-navbar">
            <div className="custom-container">
                <div className="custom-navbar-header">
                    <a className="custom-navbar-brand" href="#">
                        <i className="fa fa-calendar-check-o"></i> TodoApp
                    </a>
                </div>
                <ul className="custom-nav">
                    <li><a href="#/todos">Tarefas</a></li>
                    <li><a href="#/about">Sobre</a></li>
                </ul>
            </div>
        </nav>
    );
}
