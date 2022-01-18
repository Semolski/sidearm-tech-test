const accordionButtons = document.querySelectorAll(".accordion");

accordionButtons.forEach((accordion) => {
    accordion.onclick = function () {
        close(this);
    };
});

function close(e) {
    e.classList.toggle("is-open");

    let parent = e.parentElement;
    let content = e.nextElementSibling;
    console.log(content);

    parent.classList.toggle("is-active");

    if (content.style.maxHeight) {
        //this is if the accordion is open
        content.style.maxHeight = null;
    } else {
        //if the accordion is currently closed
        content.style.maxHeight = content.scrollHeight + "px";
        console.log(content.style.maxHeight);
    }
}


