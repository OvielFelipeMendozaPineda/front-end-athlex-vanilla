export class Footer extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    
    async render() {
        this.innerHTML =  `
            <style>
                footer {
                    width: 100%;
                    display: flex;
                    height: auto;
                    flex-grow: 1;
                }

                .container {
                    width: 100%;
                    height: 100%;
                    padding: 5rem ;
                    background-color: #151515;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .row {
                    width: 80%;
                    height: 100%;
                    display: grid;
                    /* gap: 2rem; */
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
                }

                .footer-col {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    width: 100%;
                    height: 100%;
                }

                .footer-col h4 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: #fff;
                    cursor: pointer;
                }

                .footer-col ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex ;
                    flex-direction: column;
                    gap: .5rem;
                    font-weight: 300;
                    align-items: start;
                    justify-content: flex-start;
                }

                .footer-col ul a {
                    text-decoration: none;
                    font-size: 1rem;
                    color: #fff;
                }

                .footer-col ul a:hover {
                    color: rgb(204, 204, 204);
                } 

                .footer-col .line {
                    background-color: #e4cd5b;
                    width: 60px;
                    height: 3px;
                }

                .footer-col .title {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    justify-content: flex-start;
                }

                .footer-col .social-links {
                    display: flex;
                    flex-direction: row;
                    gap: 1rem;
                    flex-wrap: wrap;
                }

                .footer-col .social-links .bx {
                    font-size: 1.5rem;
                    color: #000000;
                    border-radius: 100%;
                    background-color: #E2CA60;
                    padding: .5rem;
                    transition: 0.75s ease;
                }

                .footer-col .social-links .bx:hover {
                    background-color: #ffed9d;
                    transition: 0.75s ease;
                    transform: translateY(-5px);
                }

                @media (max-width: 1368px) {
                    .row {
                        gap: 2rem;
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    }
                }
            </style>
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col">
                            <div class="title">
                                <h4>La compañia</h4>
                                <div class="line"></div>
                            </div>
                            <ul>
                                <li><a href="#">Sobre nosotros</a></li>
                                <li><a href="#">Nuestros servicios</a></li>
                                <li><a href="#">Política de privacidad</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <div class="title">
                                <h4>¿Necesitas ayuda?</h4>
                                <div class="line"></div>
                            </div>
                            <ul>
                                <li><a href="#">Ayuda</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <div class="title">
                                <h4>Obtener aplicación móvil</h4>
                                <div class="line"></div>
                            </div>
                            <ul>
                                <li><a href="#">Enlace para descargar</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <div class="title">
                                <h4>Nuestras redes</h4>
                                <div class="line"></div>
                            </div>
                            <ul class="social-links">
                                <li><i class='bx bxl-instagram'></i></li>
                                <li><i class='bx bxl-facebook'></i></li>
                                <li><i class='bx bxl-twitter'></i></li>
                                <li><i class='bx bxl-linkedin'></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', Footer);
