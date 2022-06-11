'use strict';

const resultWrapper = document.querySelector('.container');

function createResult() {
    if (localStorage.formData) {
        const ul = document.createElement('ul');
        resultWrapper.append(ul);

        const parsedData = JSON.parse(localStorage.formData);
        console.log(parsedData);

        for (let key in parsedData) {
            const li = document.createElement('li');
            ul.append(li);
            li.innerHTML = `${key}: ${parsedData[key]}`;
        }
    } else {
        resultWrapper.innerHTML = 'No data.';
    }
}
createResult();