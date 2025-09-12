export class AddToCart {
    constructor(numberBar) {
        for (let i = 0; i < numberBar.length; i++) {
            let actualNum = 0;
            let actualBar = numberBar[i];
            numberBar[i].addEventListener("click", (event) => {
                event.stopPropagation();
                let counter = actualBar?.querySelector('[name="counter"]');
                if (event.target.textContent.toLowerCase() ===
                    "+") {
                    actualNum++;
                    console.log(actualNum);
                }
                else if (event.target.textContent.toLowerCase() ===
                    "-" &&
                    actualNum > 0) {
                    actualNum--;
                    console.log(actualNum);
                }
                counter.innerText =
                    actualNum.toString();
            });
        }
    }
}
