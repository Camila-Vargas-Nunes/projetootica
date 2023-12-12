// import React from "react";
// import './estilos.css';

// export default function SecaoContato() {
//     return (
//         <section id="contato" className="secao-contato">
//             <div className="limita-secao">
//                 <h2>Fale conosco</h2>
//                 <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

//                 <div className="container-cards">
//                     <div className="container-cards2">
//                         <h3>Contato</h3>
//                         <div>
//                             <img src="./assets/local.png" alt="localização" />
//                             <p>Nova Iguaçu, RJ</p>
//                         </div>
//                         <div>
//                             <img src="./assets/telefone.png" alt="número do telefone" />
//                             <p>(21) 9999-9999</p>
//                         </div>
//                         <div>
//                             <img src="./assets/email.png" alt="email" />
//                             <p>contato@oticavida.com</p>
//                         </div>
//                     </div>

//                     <div className="container-cards2">
//                         <h3>Nossas Redes Sociais</h3>
//                         <div>
//                             <img src="./assets/fb.png" alt="facebook" />
//                             <p>/OticaVida</p>
//                         </div>
//                         <div>
//                             <img src="./assets/ig.png" alt="instagram" />
//                             <p>@oticavidarj</p>
//                         </div>
//                         <div>
//                             <img src="./assets/tt.png" alt="twiter" />
//                             <p>@oticavidarj</p>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }

import React from "react";
import './estilos.css';

export default function SecaoContato() {
    return (
        <section id="contato" className="secao-contato">
            <div className="limita-secao">
                <h2>Fale conosco</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

                <div className="container-cards">
                    <div className="container-cards2 contato">
                        <h3>Contato</h3>
                        <div>
                            <img src="./assets/local.png" alt="" />
                            <p>Nova Iguaçu, RJ</p>
                        </div>
                        <div>
                            <img src="./assets/telefone.png" alt="" />
                            <p>(21) 9999-9999</p>
                        </div>
                        <div>
                            <img src="./assets/email.png" alt="" />
                            <p>contato@oticavida.com</p>
                        </div>
                    </div>

                    <div className="container-cards2 redes-sociais" >
                        <h3>Nossas Redes Sociais</h3>
                        <div>
                            <img src="./assets/fb.png" alt="" />
                            <p>/OticaVida</p>
                        </div>
                        <div>
                            <img src="./assets/ig.png" alt="" />
                            <p>@oticavidarj</p>
                        </div>
                        <div>
                            <img src="./assets/tt.png" alt="" />
                            <p>@oticavidarj</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}