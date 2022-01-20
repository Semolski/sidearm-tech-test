// Desktop dropdown menus
document.querySelectorAll(".dropdown").forEach(dropdownFunction);

// Dropdown open and close function
function dropdownFunction(dropdown) {
    if ( dropdown.classList.contains("dropdown-click") === true ) {

        dropdown.addEventListener("click", function (e) {
            e.preventDefault();

            let parent = this.parentElement;

            if (this.classList.contains("is-open") === true) {
                // Close the clicked dropdown
                parent.classList.remove("is-active");
                this.classList.remove("is-open");

            } else {
                closeDropdown();

                parent.classList.add("is-active");
                this.classList.add("is-open");
            }
        });
    }

    if ( dropdown.classList.contains("dropdown-hover") === true ) {

        dropdown.onmouseover = dropdown.onmouseout = dropdownHover;

        function dropdownHover(e){
            let parent = this.parentElement;

            if( e.type === "mouseover" ){
                closeDropdown();

                parent.classList.add("is-active");
                this.classList.add("is-open");

            }
        }
    }
}

// Listen for clicks on the document
window.addEventListener("click", function (e) {

    // Close the menu if click occurs outside the menu
    if (e.target.closest(".dropdown-container") === null) {
        // Close the opened dropdown
        closeDropdown();
    }

});

// Close opened dropdowns
function closeDropdown() {
    // Remove the is-open and is-active class from other opened dropdown
    document.querySelectorAll(".dropdown-container").forEach(function (container) {
        container.classList.remove("is-active")
    });

    document.querySelectorAll(".dropdown").forEach(function (menu) {
        menu.classList.remove("is-open");
    });
}

// Close dropdown when mouse leaves the dropdown list
// document.querySelectorAll(".dropdown-menu").forEach(function (dropDownList) {
//     // Close the dropdown after user leave the list
//     dropDownList.onmouseleave = closeDropdown;
// });

// Mobile specific toggle
const mobileButtons = document.querySelectorAll(".mobile-toggle");

mobileButtons.forEach((mobileButton) => {
    mobileButton.onclick = function () {
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
