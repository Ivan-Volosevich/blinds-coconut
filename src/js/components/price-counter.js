// const { format } = require("path");

window.addEventListener("DOMContentLoaded", function() {

    function mask(event) {
        let matrix = "+375 (__) ___ __ __",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    };

    const regex = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;

    const input = document.querySelector("#tel");
    input.addEventListener("input", mask, false);

    const form = document.querySelector('#form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        // let error = formValidate(form);

        // if (error !== 0) {
        //     alert('Заполните номер телефона.');
        // }
    }

    // function formValidate(form) {
    //     let error = 0;
    //     let formReq = document.querySelectorAll('._req');

    //     for (let index = 0; index < formReq.length; index++) {
    //         const inpuTel = formReq[index];
    //         formRemoveError(inpuTel);

    //         if (inpuTel.classList.contains('phone')) {
    //             if (regex == false) {
    //                 formAddError(inpuTel);
    //                 error++;
    //             }
    //         } else if (inpuTel.value === "") {
    //             formAddError(inpuTel);
    //             error++;
    //         }
    //     }
    //     return error;
    // }

    // function formAddError(inpuTel) {
    //     inpuTel.parentElement.className.add(' error');
    //     inpuTel.className.add(' error');
    // }

    // function formRemoveError(inpuTel) {
    //     inpuTel.parentElement.className.replace(' error');
    //     inpuTel.className.replace(' error');
    // }
});
    