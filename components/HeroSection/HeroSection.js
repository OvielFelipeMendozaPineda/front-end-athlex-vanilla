export class HeroSection extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.renderEnrollment();
    }
    async renderEnrollment() {
        const root = document.querySelector("#root")
        const getStartedBtn = document.querySelector('#get-started')
        getStartedBtn.addEventListener('click', (e) => {
            root.innerHTML = '<enrollment-selector></enrollment-selector>'

        })
    }
    async render() {
        this.innerHTML = `
            <style>
            .hero-section {
            width: 100%;
            height: 60vh;
            background: linear-gradient(to bottom, #ffffff00, #151515);
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(auto-fill, minmax(300, 1fr));
            margin-top: 10rem;
            position: relative;

        }
        body {
            background-image: url('https://media.discordapp.net/attachments/1182006741320335382/1264909868855328778/kickoff-the-football-season-with-comfortable-cleats-6xyoye4hw1zj1cav.jpg?ex=669f969d&is=669e451d&hm=d33dfc894135daea4dad217c4ec646b6c689be0ab7c4acbd6569a91003a13e4d&=&format=webp&width=1007&height=671');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;

        }
        .hero-section .text {
            align-self: self-end;
            padding: 5rem 0;
            padding-left: 17rem;
            color: white;
        }

        .hero-section .text h2 {
            font-size: 3rem;
        }

        .hero-section .text p {
            font-size: 1.5rem;
            font-weight: 400;
        }

        .m2 {
            background-color: #151515;
            margin: 0;
        }


        .hero-section #get-started {
            font-size: 1.4rem;
            background-color: #E2CA60;
            border-radius: 10px;
            padding: 0.5rem 1rem;
            transition: background-color 0.3s;
            font-weight: 600;
            border: none;
        }

        .hero-section #get-started:hover {
            background-color: rgb(249, 227, 131);
            cursor: pointer;
        }
            </style>
            <div class="hero-section">
                <div class="text">
                    <h2>Descubre el Futuro del Fútbol</h2>
                    <p>Sube tus videos y muestra tu talento al mundo</p>
                    <br>
                    <button id="get-started"> Empieza ahora </button>
                </div>
            </div>
        `
    }
}

customElements.define('hero-section', HeroSection);