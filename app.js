const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("h1").onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("").map((letters, index) => {
        if(incex < iterations) {
            return event.target.dataset.value[index];
        }

        return letter[Math.floor(Math.random() * 26)]
    })
    .join("");
    
    
    if (iterations >= event.target.dataset.value.length) {
        clearInterval(interval);
    }

    iterations += 1 / 3;
    }, 30);
}