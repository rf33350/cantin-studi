function filter(criterion) {
    const images = document.getElementsByClassName("cont-img");
    if (criterion === "all") {
        Array.from(images).forEach((img) => {
        img.style.display = "block";
        });
    } else {
        Array.from(images).forEach((img) => {
            if (img.classList.contains(criterion)) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
    }
}