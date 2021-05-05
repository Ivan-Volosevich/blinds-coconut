// document.addEventListener("DOMContentLoaded", () => {
//     // function setCursorPosition(pos, elem) {
//     //     elem.focus();
//     //     if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
//     //     else if (elem.createTextRange) {
//     //         let range = elem.createTextRange();
//     //         range.collapse(true);
//     //         range.moveEnd("character", pos);
//     //         range.moveStart("character", pos);
//     //         range.select()
//     //     }
//     // }
     
//     function mask(event) {
//         let matrix = "+375 (__) ___ __ __",
//             i = 0,
//             def = matrix.replace(/\D/g, ""),
//             val = this.value.replace(/\D/g, "");
//         if (def.length >= val.length) val = def;
//         this.value = matrix.replace(/./g, function(a) {
//             return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
//         });
//     };

//     let input = document.querySelector("#tel-form");
//     input.addEventListener("input", mask, false);
    
    
    
//     // Get the modal
//     let modal = document.getElementById("price-modal");

//     // Get the button that opens the modal
//     let btnOpenForm = document.querySelectorAll(".btn-cost");

//     // Get the <span> element that closes the modal
//     let spanClose = document.querySelectorAll(".close");

//     // When the user clicks on the button, open the modal
//     btnOpenForm.onclick = function() {
//         console.log('---');
//         modal.style.display = "block";
//     }

//     // When the user clicks on <span> (x), close the modal
//     spanClose.onclick = function() {
//         modal.style.display = "none";
//     }

//     // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
//     }
// });