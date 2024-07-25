export class Header extends HTMLElement {
    constructor() {
        super()
        this.render()
    }
    async render() {
        this.innerHTML = `
        <style>
            .dashboard-header {
                background-color: #151515;
                display: grid;
                grid-template-columns: 1fr 1fr auto; 
                height: 15vh;
                padding: 0 2rem;
                align-items: center;
                border-bottom: 1px solid #333;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }

            .dashboard-search {
                grid-column: 3 / 4;
                display: flex;
                justify-content: flex-end;
            }

            .input-container {
                display: flex;
                align-items: center;
                position: relative;
                width: 100%;
            }

            .input-container__input {
                width: 300px;
                height: 40px; 
                padding: 0 2.5rem 0 1rem; 
                border-radius: 10px;
                border: 1px solid #ccc;
                font-size: 1rem;
                background-color: #f5f5f5;
                transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
            }

            .input-container__input:focus {
                border-color: #E2CA60;
                outline: none;
                background-color: #fff;
                box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
            }

            .input-container__search-icon {
                position: absolute;
                left: 10px; 
                color: rgb(175, 175, 175);
                font-size: 1.5rem;
            }

            .user-profile {
                display: flex;
                align-items: center;
                gap: 1rem;
                margin-left: 1rem;
            }

            .user-profile .bx {
                color: white;
                font-size: 2rem;
                transform: translateY(2px);
                cursor: pointer;
                transition: color 0.3s ease;
            }

            .user-profile .bx:hover {
                color: #E2CA60;
            }

            .user-profile__img img {
                width: 50px; 
                height: 50px;
                border-radius: 50%; 
                border: 2px solid #fff;
            }

            .user-profile__greeting {
                font-size: 1.2rem;
                color: white;
                user-select: none;
            }
        </style>
        <header class="dashboard-header">
                <div class="user-profile">
                    <div class="user-profile__img">
                        <!-- <img src="" alt=""></div> -->
                        <i class='bx bx-user-circle' ></i>
                    </div>
                    <p class="user-profile__greeting">Bienvenido, Usuario!</p>
                </div>
                <div class="dashboard-search">
                    <div class="input-container">
                        <input class="input-container__input" type="text" placeholder="Buscar">
                    </div>
                </div>
        </header>
        `
    }
}

customElements.define('custom-header', Header);