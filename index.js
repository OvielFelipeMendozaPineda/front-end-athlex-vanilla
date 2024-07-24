import './components/Navbar/Navbar.js'
import './components/Footer/Footer.js'
import './components/HeroSection/HeroSection.js'
import './components/Cards/Cards.js'
import './components/Enrollment/Enrollment.js'
import './components/SignUpForm/PlayerSignUpForm.js'

const root = document.querySelector("#root")
const getStartedBtn = document.querySelector('#get-started')
console.log(getStartedBtn);
getStartedBtn.addEventListener('click', (e) => {
    root.innerHTML = '<enrollment-selector></enrollment-selector>'

})