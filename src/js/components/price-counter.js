// const { format } = require("path");
'use strict'


document.addEventListener("DOMContentLoaded", function() {

    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select()
        }
    }

    function mask(event) {
        var matrix = "+375 (__) ___ __ __",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
        if (event.type == "blur") {
            if (this.value.length == 2) this.value = ""
        } else setCursorPosition(this.value.length, this)
    };
        var input = document.querySelector("#tel");
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);


        

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

    // const input = document.querySelector("#tel");
    // input.addEventListener("input", mask, false);

    console.log('i found it in Mask! ', input.value, '-----empty?');
    
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        if (error === 0) {
            alert('Заполните номер телефона.');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        console.log('i found it! ', input.value);

        for (let index = 0; index < formReq.length; index++) {
            const inputTel = formReq[index];

            if (inputTel.classList.contains('error')) {
                formRemoveError(inputTel);
            }

            if (inputTel.classList.contains('phone')) {
                if (phoneTest(inputTel)) {
                    formAddError(inputTel);
                    error++;
                }
            } else {
                if (inputTel.value === '') {
                    formAddError(inputTel);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(inputTel) {
        inputTel.parentElement.classList.add('error');
        inputTel.classList.add('error');
    }

    function formRemoveError(inputTel) {
        inputTel.parentElement.classList.replace('error');
        inputTel.classList.replace('error');
    }

    function phoneTest(inputTel) {
        console.log('error in inputTel', /[\+]375\s[\(]\d{2}[\)]\s\d{3}\s\d{2}\s\d{2}/.test(inputTel.value));
        return /[\+]375\s[\(]\d{2}[\)]\s\d{3}\s\d{2}\s\d{2}/.test(inputTel.value);
        

    }
});


