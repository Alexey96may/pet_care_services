export class Burger {
    #burgerButton = document.getElementById("burger");
    #headerNav = document.getElementById("headerNav");
    #isMenuOpen = false;
    constructor() {
        this.#burgerButton?.addEventListener("click", (event) => {
            event.stopPropagation();
            this.#isMenuOpen = true;
            this.classesToggle();
        });
    }
    classesToggle() {
        this.#burgerButton?.classList.toggle("burger--cancel");
        this.#headerNav?.classList.toggle("appear");
    }
}
