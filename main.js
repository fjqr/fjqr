const scrollDown = () => {
    let icon = document.querySelector('#icon');
    let main = document.querySelector('.main');
    icon.addEventListener("click", (e) => {
        e.preventDefault();
        window.scroll({
            top: main.clientHeight,
            left: 0,
            behavior: "smooth"
        });

    })

}

scrollDown();

const scrollUp = () => {
    let icon2 = document.querySelector('#icon2');
    let main = document.querySelector('.main');
    icon2.addEventListener("click", (e) => {
        e.preventDefault();
        window.scroll({
            top: -main.clientHeight,
            left: 0,
            behavior: "smooth"
        });

    })

}

scrollUp();