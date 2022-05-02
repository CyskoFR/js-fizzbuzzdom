const list = document.querySelector(".list");

for( let i = 1; i <= 100; i++ ) {
    const element = document.createElement("li");

    element.classList.add("item");
    element.innerText = i;
    list.append(element);
    if (i % 3 === 0 && i % 5 === 0) {
        element.innerText = "FizzBuzz"
        element.style.backgroundColor = "#f0466f"
    }   else if (i % 5 === 0) {
        element.innerText = "Buzz"
        element.style.backgroundColor = "#ffd166"
    }   else if (i % 3 === 0) {
        element.innerText = "Fizz"
        element.style.backgroundColor = "#0bd6a1"
    }
}

