import React from "react";
import './estilos.css';

export default function Topo() {
    return (
        <header>
            <div className="limita-secao itens-topo">
                <img src="./assets/logo.png" alt="logo" />
                <nav>
                    <a href="#produtos">PRODUTOS</a>
                    <a href="#sobre">SOBRE</a>
                    <a href="#contato">CONTATO</a>
                </nav>
            </div>
        </header>
    );
}