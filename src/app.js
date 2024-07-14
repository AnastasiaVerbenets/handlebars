import { composers } from "./composersData";
import itemsTemplate from "../templates/card.hbs"

const list = document.querySelector('.composer__list');

const markUp = itemsTemplate(composers);

list.insertAdjacentHTML("beforeend", markUp);