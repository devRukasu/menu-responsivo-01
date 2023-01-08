function menuShow () {
    let ul = document.querySelector('.container-menu ul');

    if (ul.classList.contains("open")) {
        ul.classList.remove("open");
        document.querySelector('.container-menu img').src = "img/menu.png";     
    }
    else {
    ul.classList.add("open");
    document.querySelector('.container-menu img').src = "img/close.png";
    }
}