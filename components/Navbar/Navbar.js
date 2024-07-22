
export class NavBar extends HTMLElement {
    constructor() {
        super();
        this.render()
    }
    async render() {
        this.innerHTML =  `
        <style rel="stylesheet">     
        header {
            width: 100%;
            position: relative;
            top: 5px; 
            padding: 1.5rem;
            background-color: transparent; 
            transition: .5s
        }
        .sticky {
            position: fixed;
            top: 0;
            padding: .75rem;
            z-index: 1000;
            background-color: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0)) ;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.194);
        }

        .navbar {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 2fr;
        }

        .logo {
            width: 230px;
            align-self: center;
            justify-self: center;
        }

        .logo-link {
            width: 100%;
            height: 100%;
            display: flex;
        }

        .main-logo {
            width: 100%;
        }


        .navlinks {
            width: 100%;
            transform: translateY(3px);
        }

        ul {
            font-size: 1.3rem;
            font-weight: 500;
            list-style: none;
            display: flex;
            flex-direction: row;
            gap: 2rem;
            height: 100%;
            width: 100%;
            justify-content: center;
            align-items: center;
        }

        .navlinks li a {
            color: rgb(255, 255, 255);
            text-decoration: none;
        }

        .navlinks li a:hover {
            border-bottom: 1px solid  #E2CA60 ;
        }

        .navlinks  #get-started {
            font-size: 1.4rem;
            border: 1px solid #E2CA60;
            border-radius: 10px;
            padding: 0.3rem 2rem;
            transition: background-color 0.3s;
            background-color: rgba(255, 255, 255, 0);
            color: #E2CA60;
        }

        .navlinks  #get-started:hover {
            background-color: rgba(249, 227, 131, 0.164);
            cursor: pointer;
        }


        .expanded {
            display: none;
        }
        </style>
        <header>
            <nav class="navbar">
                <div class="logo">
                    <a href="#" class="logo-link">
                        <img src="storage/imgs/icons/athlec nobg.png" alt="Athlex" class="main-logo"/>
                    </a>
                </div>
                <ul class="navlinks">
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#quienes-somos">¿Quiénes somos?</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                    <li id="get-started">Ingresar</li>
                </ul>
                <button class="menu-btn expanded">☰</button>
            </nav>
        </header>
    `;
        this.handleScroll()
    } 
    async handleScroll() {
        window.addEventListener("scroll", () => {
            let header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        })
    }
    }

customElements.define('nav-bar', NavBar);
