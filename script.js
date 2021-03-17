const images = ["./images/desktop/image-deep-earth.jpg", "./images/desktop/image-night-arcade.jpg", "./images/desktop/image-soccer-team.jpg",
"./images/desktop/image-grid.jpg","./images/desktop/image-from-above.jpg", "./images/desktop/image-pocket-borealis.jpg",
"./images/desktop/image-curiosity.jpg", "./images/desktop/image-fisheye.jpg"]

const imgs = Array.prototype.slice.call(document.querySelectorAll("figure img"));
if (window.screen.width > 900){
    for (let i = 0; i < 8; i++) {
        imgs[i].src = images[i];
    }

}
