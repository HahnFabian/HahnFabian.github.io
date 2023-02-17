const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

document.querySelector("h1").onmouseover = event => {
    let iterations = 0;

    clearInterval(interval);

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map((letters, index) => {
            if(index < iterations) {
                return event.target.dataset.value[index];
            }

            return letter[Math.floor(Math.random() * 26)]
        })
        .join("");
        
        
        if (iterations >= event.target.dataset.value.length){
            clearInterval(interval);
        }

        iterations += 1 / 3;
    }, 30);
}