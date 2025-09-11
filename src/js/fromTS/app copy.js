import * as flsFunctions from "./modules/functions.js";
import { Burger } from "./ui/burger.js";
import { NavFix } from "./ui/navFixed.js";
function my_test(x) {
    var answer = x > 2 ? true : false;
    return answer;
}
my_test(24);
flsFunctions.isWebp();
new Burger();
new NavFix();
