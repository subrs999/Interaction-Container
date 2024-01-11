const cursor = document.getElementById("cursor");

window.onpointermove = event => {
    const {clientX, clientY } = event;

    cursor.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {duration: 3000, fill:"forwards"});
}