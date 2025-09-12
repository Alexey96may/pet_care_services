import * as flsFunctions from "./modules/functions.js";
import { Burger } from "./ui/burger.js";
import { AddToCart } from "./ui/addToCart.js";
flsFunctions.isWebp();
let numberBar = document.querySelectorAll(".number-bar");
new AddToCart(numberBar);
new Burger();
