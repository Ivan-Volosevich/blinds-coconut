// const { format } = require("path");

window.addEventListener("DOMContentLoaded", function() {

    // function mask(event) {
    //     let matrix = "+375 (__) ___ __ __",
    //         i = 0,
    //         def = matrix.replace(/\D/g, ""),
    //         val = this.value.replace(/\D/g, "");
    //     if (def.length >= val.length) val = def;
    //     this.value = matrix.replace(/./g, function(a) {
    //         return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    //     });
    // };

    const regex = /^(\+375)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;

    // const input = document.querySelector("#tel");
    // input.addEventListener("input", mask, false);
    
    const form = document.querySelector('#form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        if (error !== 0) {
            alert('Заполните номер телефона.');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('phone')) {
                if (regex == false) {
                    formAddError(input);
                    error++;
                }
            } else if (input.value === "") {
                formAddError(input);
                error++;
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.className.add(' error');
        input.className.add(' error');
    }

    function formRemoveError(input) {
        input.parentElement.className.replace(' error');
        input.className.replace(' error');
    }
});
    