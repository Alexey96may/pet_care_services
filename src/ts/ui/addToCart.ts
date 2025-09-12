export class AddToCart {
    constructor(numberBar: any) {
        for (let i = 0; i < numberBar.length; i++) {
            let actualNum = 0;
            let actualBar = numberBar[i];

            numberBar[i].addEventListener("click", (event: Event) => {
                event.stopPropagation();

                let counter = (
                    actualBar as unknown as HTMLDocument
                )?.querySelector('[name="counter"]');

                if (
                    (event.target as HTMLElement).textContent.toLowerCase() ===
                    "+"
                ) {
                    actualNum++;
                } else if (
                    (event.target as HTMLElement).textContent.toLowerCase() ===
                        "-" &&
                    actualNum > 0
                ) {
                    actualNum--;
                }

                (counter as unknown as HTMLElement).innerText =
                    actualNum.toString();
            });
        }
    }
}
