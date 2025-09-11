export class Burger {
    #burgerButton = document.getElementById("burger");
    #headerNav = document.getElementById("headerNav");
    #body = document.querySelector("body");
    #isMenuOpen = false;

    constructor() {
        this.#burgerButton?.addEventListener("click", (event) => {
            event.stopPropagation();
            this.#isMenuOpen = true;
            this.classesToggle();
        });
    }

    classesToggle(): void {
        this.#burgerButton?.classList.toggle("burger--cancel");
        this.#headerNav?.classList.toggle("appear");
        this.#body?.classList.toggle("body__fixed");
    }
}
