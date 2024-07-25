export class Enrollment extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.showSignUpSection();
    }

    connectedCallback() {
        this.classList.add('fade-in');
        const elementsToAnimate = this.querySelectorAll('.rol, .mid-icon');
        elementsToAnimate.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('slide-in');
            }, index * 100); 
        });
    }
    async showSignUpSection() {
        const root = document.querySelector("#root");
        const playerRegisterBtn = document.querySelector("#player-register-btn")
        playerRegisterBtn.addEventListener("click", (e) => {
            root.innerHTML =` <signup-section></signup-section>`
        })
    }
    async render() {
        this.innerHTML = `
        <style>
        .enroll {
            width: 100%;
            height: 100vh;
            background-image: url(storage/imgs/icons/rol-selector-bg.png);
            background-size: cover;
            background-position: center;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            opacity: 1;
            transition: opacity 1s ease-in-out;
        }

        .fade-in {
            opacity: 0;
            animation: fadeIn 1s forwards;
        }

        .fade-out {
            animation: fadeOut 1s forwards;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }

        .slide-in {
            opacity: 0;
            transform: translateY(50px);
            animation: slideIn 1s forwards;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .rol-selector {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;
        }

        .rol {
            height: auto;
            display: grid;
            gap: 1.5rem;
            max-width: 300px;
        }

        .rol:hover {
            cursor: pointer;
        }

        .rol-icon {
            width: 250px;
            justify-self: center;
        }

        .rol-icon img {
            width: 100%;
            height: 100%;
            filter: drop-shadow(5px 5px 5px #222222);
        }

        .rol-title {
            width: 100%;
        }

        .rol-title h2 {
            text-align: center;
            font-size: 2.7rem;
            font-weight: 600;
        }

        .rol-description {
            width: 80%;
            place-self: center;
        }

        .rol-desciption p {
            width: 100%;
            text-align: justify;
        }

        .register-btn {
            width: 100%;
            display: grid;
            margin-bottom: 1rem;
        }

        .register-btn #player-register-btn {
            justify-self: center;
            border: 1.5px solid white;
            border-radius: 15px;
            background-color: transparent;
            padding: 0.5rem 2.24rem;
            font-size: 1rem;
            color: white;
        }

        .register-btn #player-register-btn:hover {
            background-color: rgba(255, 255, 255, 0.115);
            cursor: pointer;
        }

        .mid-icon {
            width: 400px;
        }

        .mid-icon img {
            width: 100%;
            height: 100%;
        }

        #log-in {
            display: none;
        }

        header {
            position: absolute !important;
        }
        </style>
        <nav-bar></nav-bar>
        <section class="enroll">
            <div class="rol-selector">
                <div class="rol">
                    <div class="rol-icon">
                        <img src="storage/imgs/icons/soccer-player.png" alt="No disp.">
                    </div>
                    <div class="rol-title">
                        <h2>Ser jugador</h2>
                    </div>
                    <div class="rol-description">
                        <p>Accede a grandes oportunidades nacionales e internacionales</p>
                    </div>
                    <div class="register-btn">
                        <button id="player-register-btn">Registrarme</button>
                    </div>
                </div>
                <div class="mid-icon">
                    <img src="storage/imgs/icons/mid-icon-rol-selector.png" alt="">
                </div>
                <div class="rol">
                    <div class="rol-icon">
                        <img src="storage/imgs/icons/strategy.png" alt="">
                    </div>
                    <div class="rol-title">
                        <h2>Ser club</h2>
                    </div>
                    <div class="rol-description">
                        <p>Encuentra talentos de talla mundial</p>
                    </div>
                    <div class="register-btn">
                        <button id="player-register-btn">Registrarme</button>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('enrollment-selector', Enrollment);
