export class SideBarMenu extends HTMLElement {
    constructor() {
        super();
        this.render()
        this.collapseExpand();
    }
    async collapseExpand() {
        const logoutBtn = document.querySelector(".logout");
        const sideNavbar = document.querySelector(".side-navbar")

        logoutBtn.addEventListener("click", (e) => {
            sideNavbar.classList.toggle("collapse");

        })
    }
    async render() {
        this.innerHTML = `
<style>

.side-navbar {
    --sidebar-bg-color: #E2CA60;
    --navlinks-hover-bg-color: #182129;
    --sidebar-width: 280px;
    --sidebar-width-collpase: 100px;
    --icon-size: 24px;
    --text-size: 15px;
    --text-weight: 0;
    --gap-large: 32px;
    --gap-medium: 16px;
    --gap-small: 8px;
    --padding-small: .5rem;
    --padding-medium: 1rem;
    --padding-large: 1.5rem;
}
.side-navbar {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    width: var(--sidebar-width);
    height: 100vh;
    background-color: var(--sidebar-bg-color);
    display: grid;
    grid-template-rows: 20% 65% 15% ;
    grid-template-columns: 1fr;
    padding: var(--gap-small);
    transition: .1s;
    user-select: none;
}
.side-navbar.collapse { 
    width: var(--sidebar-width-collpase);
}
.logo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:  var(--gap-medium);
}
.logo img {
    width: 100%;
    cursor: pointer;
}
.logo img.collapse {
    display: none;
    width: 50px;
    
}
.navbar-links {
    width: 100%;
    
}
.nav-links {
    width: 100%;
    display: flex;
    flex-direction: column;
}
.links {
    display: flex;
    flex-direction: column;
}

.link {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: var(--gap-medium);
    padding: var(--padding-small) var(--padding-medium);
    cursor: pointer;
    transition: .1s;
}
.side-navbar.side-navbar.collapse .link {
    justify-content: center;
}
.links .link:hover{
    background-color: var(--navlinks-hover-bg-color);
    border-radius: 10rem;
    color: white;
    
}
.link .bx {
    font-size: var(--icon-size);
}
.link p {
    font-size: var(--text-size);
    font-weight: var(--text-weight);
    animation: p .1s;
}
.logout {
    margin-bottom: var(--gap-medium);
    cursor: pointer;
    user-select: none;
    transition: .5s;
    align-self: end;
    justify-self: center;
    background-color: #c9b455;
    border-radius: 100rem;
    transition: .1s;
}
.logout:hover {
    transition: .5s;
    transform: scale(1.2);
}
.bx.bx-arrow-from-left {
    display: none;
}
li {
    list-style: none;
}

.side-navbar.side-navbar.collapse .bx.bx-arrow-from-left,
.side-navbar.side-navbar.collapse .logo img.collapse {
    display: block;
}
.side-navbar.side-navbar.collapse .logo img,
.side-navbar.side-navbar.collapse .links p,
.side-navbar.side-navbar.collapse .bx.bxs-arrow-from-right{
    display: none;
    transition: 1s;
}

@keyframes  p {
    0% {
        opacity: 0;
        display: none;
    }
    99% {
        opacity: 0;
        display: none;
    }
    100% {
        opacity: 1;
        display: block;
    }
}

</style>
<nav class="nav">
        <div class="side-navbar">
            <div class="logo">
                <img src="./storage/imgs/sidebar/expanded-icon.png" alt="No img.">
                <img src="./storage/imgs/sidebar/collapse-icon.png" alt="No img." class="collapse">
            </div>
            
            <div class="navbar-links">
                <ul class="links">
                    <li class="link">
                        <div class="icon"><i class='bx bx-user-circle'></i></div>
                        <p>Inicio</p>
                    </li>
                    <br>
                    <li class="link">
                        <div class="icon"><i class='bx bx-user-circle'></i></div>
                        <p>Informacion personal</p>
                    </li>
                    <li class="link">
                        <div class="icon"><i class='bx bx-envelope' ></i></div>
                        <p>Contacto</p>
                    </li>
                    <br>
                    <li class="link">
                        <div class="icon"><i class='bx bxs-graduation' ></i></div>
                        <p>Informacion academica</p>
                    </li>
                    <li class="link">
                        <div class="icon"><i class='bx bx-trending-up'></i></div>
                        <p>Experiencia futbolista</p>
                    </li>
                    <br>
                    <li class="link">
                        <div class="icon"><i class='bx bx-video' ></i></div>
                        <p>Videos</p>
                    </li>
                    <li class="link">
                        <div class="icon"><i class='bx bx-heart' ></i></div>
                        <p> Datos medicos</p>
                    </li>
                </ul>
            </div>
            <div class="logout">
                <ul>
                    <li class="link">
                        <i class='bx bxs-arrow-from-right'></i>
                        <i class='bx bx-arrow-from-left' ></i>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

`
    }
}

customElements.define("sidebar-menu", SideBarMenu);