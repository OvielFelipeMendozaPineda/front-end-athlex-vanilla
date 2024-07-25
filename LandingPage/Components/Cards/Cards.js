export class Cards extends HTMLElement {
    constructor() {
        super()
        this.render()
    }
    async render() {
        this.innerHTML = `
            <style>
            .card-section {
                width: 100%;
                height: auto;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                padding: 5rem;
                gap: 3rem;
                background-color: #151515;

            }

            .card {
                background-color: #151515;
                width: 250px;
                min-height: 350px;
                border: 0.5px solid #383838;
                padding: 2rem;
                border-radius: 8px;
                color: white;
                display: grid;
                grid-template-rows: auto auto 1fr;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
                transition: 300ms ease;
            }

            .card:hover {
                transform: translateY(-10px);
                transition: 300ms ease;
                border: 0.5px solid #686868;
                background-color: #292929;
                cursor: pointer;

            }

            .icon {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .icon img {
                width: 100px;
                height: 100px;
                border-radius: 50%;
            }

            .card-title {
                text-align: center;
                font-size: 1.2rem;
                padding-top: 1rem;
                height: 60px;
            }

            .card-description {
                text-align: center;
                font-size: 1rem;
                line-height: 1.5;
                font-weight: 300;
            }
            </style>
            <section class="card-section">
                <div class="card">
                <div class="icon">
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/003/731/316/small_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg" alt="">
                </div>
                <div class="card-title"> <h2>titulo</h2></div>
                <div class="card-description"><p>Soy la descripcion de la tarjeta
                  lo ideas es que no sea tan larga pero puede ser mas y se va ajustando</p></div>
              </div><div class="card">
                <div class="icon">
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/003/731/316/small_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg" alt="">
                </div>
                <div class="card-title"> <h2>titulo</h2></div>
                <div class="card-description"><p>Soy la descripcion de la tarjeta
                  lo ideas es que no sea tan larga pero puede ser mas y se va ajustando</p></div>
              </div><div class="card">
                <div class="icon">
                  <img src="https://static.vecteezy.com/system/resources/thumbnails/003/731/316/small_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg" alt="">
                </div>
                <div class="card-title"> <h2>titulo</h2></div>
                <div class="card-description"><p>Soy la descripcion de la tarjeta
                  lo ideas es que no sea tan larga pero puede ser mas y se va ajustando</p></div>
              </div>
            </section>
        `
    }
}

customElements.define('cards-section', Cards)