import { projectsData } from "./projectsData";

const burerBtn = document.querySelector(".header__burger");
const nav = document.querySelector(".nav");
const iconOpen = document.querySelector(".header__burger--open");
const iconClose = document.querySelector(".header__burger--close");
const navLinks = document.querySelectorAll(".nav__link");
const header = document.querySelector(".header");
const skillsContainer = document.querySelector(".about__skills");
const projectsGrid = document.querySelector(".projects__grid");
const projectTitles = document.querySelectorAll(".project__item");
const projectContents = document.querySelectorAll(".project__content");

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
    const skillToolTip = document.createElement("span");
    const cdnURL =  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}/${skill.icon}-original.svg`;


    skillItem.classList.add("about__skill");
    skillIcon.classList.add("skill__icon");
    skillToolTip.classList.add("skill__tooltip");
    skillIcon.src = cdnURL;
    skillIcon.alt = `Icon for ${skill.name}`;
    skillToolTip.textContent = skill.name;

    skillIcon.onerror = () => {
        console.warn(`Could not load logo ${skill.name} from CDN. Using local image.`);
        skillIcon.src = `./src/assets/icons/${skill.icon}.svg`;
    };

    skillItem.appendChild(skillIcon);
    skillItem.appendChild(skillToolTip);
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

const renderProjects = () => {
    const projectsHTML = projectsData.map((project) =>`
        <div class="project__item">
            <div class="project__inner">
                <div class="project__title">
                    <div class="project__name">${project.name}</div>
                    <div class="project__tech">${project.tech}</div>  
                </div>
                <div class="project__content">
                    <div class="project__content--inner">
                        <div class="p-links__container">
                            <a href="${project.repoUrl}" target="_blank" class="project__link">Code</a>
                            <a href="${project.liveUrl}" target="_blank" class="project__link">Live</a>
                        </div>
                        <p class="project__desc">${project.desc}</p>
                        <div class="project__images project__images--grid">
                            <img src="${project.image1}" alt="Image for the ${project.name} project" class="project__img project__img--main">
                            <img src="${project.image2}" alt="Image for the ${project.name} project" class="project__img">
                            <img src="${project.image3}" alt="Image for the ${project.name} project" class="project__img">
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    `).join("");
    projectsGrid.insertAdjacentHTML("beforeend", projectsHTML);
};
renderProjects();

projectsGrid.addEventListener("click", (event) => {
    const clickedTitle = event.target.closest(".project__title");
    if (!clickedTitle) return;

    const projectContent = clickedTitle.nextElementSibling;
    const projectItem = clickedTitle.closest(".project__item");
    const projectName = clickedTitle.querySelector(".project__name");
    const projectTech = clickedTitle.querySelector(".project__tech");
    const currentlyOpenContent = projectsGrid.querySelector(".project__content.is-open");

    if (currentlyOpenContent && currentlyOpenContent !== projectContent) {
        const openItem = currentlyOpenContent.closest(".project__item");
        const openName = openItem.querySelector(".project__name");
        const openTech = openItem.querySelector(".project__tech");

        currentlyOpenContent.classList.remove("is-open");
        openItem.classList.remove("project__item--active");
        openName.classList.remove("project__name--open");
        openTech.classList.remove("project__tech--open");
    }

    if (projectContent && projectContent.classList.contains("project__content")) {
        projectContent.classList.toggle("is-open");
        projectName.classList.toggle("project__name--open");
        projectTech.classList.toggle("project__tech--open");
        projectItem.classList.toggle("project__item--active");

        if (projectContent.classList.contains("is-open")) {
            setTimeout(() => {
                projectItem.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 400);
        }
    }
});


window.addEventListener('load', checkScrollPosition);
window.addEventListener("scroll", checkScrollPosition);