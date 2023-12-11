// JavaScript for tabbed panel
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// JavaScript for accordion
function toggleAccordion(sectionId) {
    var x = document.getElementById(sectionId);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// JavaScript for mobile menu
function showMenu() {
    document.getElementById("navLinks").classList.add("show-menu");
}

function hideMenu() {
    document.getElementById("navLinks").classList.remove("show-menu");
}

// JavaScript for shopping cart
var cartCount = 0;

function addToCart() {
    cartCount++;
    alert("Item added to cart. Total items in cart: " + cartCount);
}

// JavaScript for commenting form
document.addEventListener("DOMContentLoaded", function () {
    var commentForm = document.querySelector(".comment-form");

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = commentForm.querySelector("input[type='text']").value;
        var email = commentForm.querySelector("input[type='email']").value;
        var comment = commentForm.querySelector("textarea").value;

        // You can handle the submitted data here (e.g., send it to a server, display it on the page, etc.)
        alert("Comment submitted!\nName: " + name + "\nEmail: " + email + "\nComment: " + comment);

        // Clear the form fields
        commentForm.reset();
    });
});
