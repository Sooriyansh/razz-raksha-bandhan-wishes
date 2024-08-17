gsap.to("#suriya h1", {
    transform: "translateX(-400%)",
    scrollTrigger: {
        trigger: "#suriya",
        scroller: "body",
        pin: true,
        scrub: 2,
        duration: 7,
        delay: 3,

    }
})
function generateLink() {
    var name = document.getElementById('nameInput').value;
    var message = document.getElementById('messageInput').value;
    var theme = document.getElementById('themeSelector').value;

    if (name && message) {
        var link = window.location.href.split('?')[0] + "?name=" + encodeURIComponent(name) + "&message=" + encodeURIComponent(message) + "&theme=" + theme;
        document.getElementById('wishLink').innerHTML = "Send this link: <a href='" + link + "'>" + link + "</a>";
        previewWish(name, message, theme);
    } else {
        alert("Please fill in your name and message!");
    }
}

function previewWish(name, message, theme) {
    var previewDiv = document.getElementById('preview');
    previewDiv.innerHTML = `<h2>Preview:</h2><h3 style="color: #e63946;">${name} says:</h3><p>${message}</p><p>Theme: ${theme}</p>`;
}

function displayWishPage() {
    var params = new URLSearchParams(window.location.search);
    var name = params.get('name');
    var message = params.get('message');
    var theme = params.get('theme');

    if (name && message) {
        document.getElementById('homePage').style.display = 'none';
        document.getElementById('wishPage').style.display = 'block';
        document.getElementById('wishMessage').textContent = message;
        document.getElementById('wishSender').textContent = name + " is sending you ";


        // Apply theme
        if (theme === 'traditional') {
            document.body.style.backgroundColor = '#f5ebe0';
        } else if (theme === 'modern') {
            document.body.style.backgroundColor = '#e0f7fa';
        } else if (theme === 'floral') {
            document.body.style.backgroundImage = 'url("https://media.istockphoto.com/id/1560030310/photo/happy-young-indian-girl-tying-rakhi-to-brother-hand-during-raksha-bandhan-festival-at-home.jpg?s=612x612&w=0&k=20&c=0QMI8x6AMBhR_gAJT1YaZG1Hht5Bk1zsvCm9ry7kKKY=")';
        }
    }
}


window.onload = function () {
    displayWishPage();
};