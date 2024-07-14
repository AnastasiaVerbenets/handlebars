import { composers } from "./composersData";
import itemsTemplate from "../templates/card.hbs"
import Handlebars from "handlebars";

// const template = Handlebars.compile("Name: {{name}}");
// console.log(template({ name: "Nils" }));

const list = document.querySelector('.composer__list');

const markUp = itemsTemplate(composers);

list.insertAdjacentHTML("beforeend", markUp);