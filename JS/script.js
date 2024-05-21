// const func = (x) => {
//     if (x <= 1) {
//         return 1;
//     } else {
//         // return func(x - 1) + func(x - 2);
//         return x * func(x - 1);
//     }
// }
// console.log(func(4));


// 1st Accordion
const accordion = document.getElementsByClassName("content-box");

for (i = 0; i < accordion.length; i++) {
    // accordion[i].addEventListener("click", function () {
    //     this.classList.toggle("active");
    //     this.nextElementSibling.classList.toggle("show");
    // });

    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
    })
}


// 2nd Accordion
const faqs = document.querySelectorAll(".faq");

faqs.forEach( (faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});