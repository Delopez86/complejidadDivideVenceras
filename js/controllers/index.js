import { validateTextArea, validateNumberRepeated, isOrdered } from "../validators/validators.js";
import { stringToNumberArray, mergeSort } from "../algorithms/tools.js";

const textArea = document.querySelector("#input__txtArea");
const binarySearch = document.querySelector("#binary__search");
const mergeSortItem = document.querySelector("#merge__sort");
const displayTextarea = document.querySelector("#display__txtArea");

textArea.addEventListener("blur", function (e) {
    e.preventDefault();
    validateTextArea(textArea);
});

binarySearch.addEventListener("click", function (e) {
    e.preventDefault();
    const textAreaContent = textArea.value.replace(/\s+/g, '');
    if (validateTextArea(textArea)) {
        const array = stringToNumberArray(textAreaContent);
        console.log(array);
        const valid = validateNumberRepeated(array);
        const validArray = isOrdered(array);

        if (valid && validArray){

            //continuo despues de la creacion de la entrada


        }
        /*  validar si hay numeros repetidos, si está ordenado y realizar la búsqueda, los 
        métodos ya están hechos e importados*/
    }
});

mergeSortItem.addEventListener("click", function (e) {
    e.preventDefault();
    const textAreaContent = textArea.value.replace(/\s+/g, '');
    if (validateTextArea(textArea)) {
        const array = stringToNumberArray(textAreaContent);
        console.log(array);
        const resultMerge = mergeSort(array);
        displayTextarea.value = resultMerge;
        /* implementar el mergeSort*/
    }
});
