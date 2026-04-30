const burerBtn = document.querySelector(".header__burger");
const nav = document.querySelector(".nav");
const iconOpen = document.querySelector(".header__burger--open");
const iconClose = document.querySelector(".header__burger--close");
const navLinks = document.querySelectorAll(".nav__link");
const header = document.querySelector(".header");
const skillsContainer = document.querySelector(".about__skills");

const skillsData = [
    { name: "HTML5", icon: "html5"},
    { name: "CSS", icon: "css3" },
    { name: "JavaScript", icon: "javascript" },
    { name: "React", icon: "react" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Git", icon: "git" },
    { name: "PhotoShop", icon: "photoshop" },
    { name: "Figma", icon: "figma" },

]

skillsData.forEach((skill) => {
    const skillItem = document.createElement("li");
    const skillIcon = document.createElement("img");
    const cdnURL =  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg`;


    skillItem.classList.add("about__skill");
    skillIcon.classList.add("skill__icon");
    skillIcon.src = cdnURL;
    skillIcon.alt = `Icon for ${skill.name}`;

    skillIcon.onerror = () => {
        console.warn(`Could not load logo ${skill.name} from CDN. Using local image.`);
        skillIcon.src = `./src/assets/icons/${skill.icon}.svg`;
    };

    skillItem.appendChild(skillIcon);
    skillsContainer.appendChild(skillItem);
});

burerBtn.addEventListener("click", () => {
    nav.classList.toggle("nav--hidden");
    iconOpen.classList.toggle("u-hidden");
    iconClose.classList.toggle("u-hidden");

    document.documentElement.classList.toggle("u-no-scroll"); 
    document.body.classList.toggle("u-no-scroll");
});

navLinks.forEach((el) => {
    el.addEventListener("click", () => {
        nav.classList.add("nav--hidden");
        iconClose.classList.add("u-hidden");
        iconOpen.classList.remove("u-hidden");

        document.documentElement.classList.remove("u-no-scroll"); 
        document.body.classList.remove("u-no-scroll");
    });
});

const checkScrollPosition = () => {
    if (window.scrollY > 100) {
        header.classList.add("header--sticky");
    } else {
        header.classList.remove("header--sticky");
    }
};

checkScrollPosition();

window.addEventListener('load', checkScrollPosition);
window.addEventListener("scroll", checkScrollPosition);