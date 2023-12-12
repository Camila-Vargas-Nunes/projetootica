
import React from "react";
import SecaoCapa from '../SecaoCapa';
import SecaoSobre from '../SecaoSobre';
import SecaoProdutos from '../SecaoProdutos';
import SecaoContato from '../SecaoContato';

export default function Conteudo() {
    return (
        <main>
            <SecaoCapa />
            <SecaoSobre />
            <SecaoProdutos />
            <SecaoContato />

        </main>
    )
}