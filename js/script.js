'use strict';

void function () {
    const submitBtn = document.querySelector('.btn');

    submitBtn.addEventListener('click', function (event) {

            const form = document.getElementById('form');
            const formData = {};
            const inputs = form.querySelectorAll('.form-control, .form-select, .form-check-input');

            event.preventDefault();

            for (let item of inputs) {
                if (item.value === '') continue;
                formData[item.name] = item.value;

                localStorage.setItem('formData', JSON.stringify(formData))
                window.location.href = 'index2.html';
            }
    }
    )
}()



