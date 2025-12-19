const question1 = document.querySelector(".quest1")
const question2 = document.querySelector(".quest2")
const question3 = document.querySelector(".quest3")

const reset = () => {
    question1.innerHTML = `
    <div class="quest1">
                <p>Do You Accept All Major Credit Cards
                </p>
                <button class="buttons">+</button>
            </div>
    `
}

question1.addEventListener("click", () => {
    question1.classList.toggle("active")
   if (question1.classList.contains("active")) {
    question1.innerHTML = `<p>Testerino Cappucino</p><img style="height: 50px" src=./images/cappucino.jpg>`
   } else {
    question1.innerHTML = `<p>Do You Accept All Major Credit Cards</p><button class="buttons">+</button>`
   }
})

question2.addEventListener("click", () => {
    question2.classList.toggle("active")
   if (question2.classList.contains("active")) {
    question2.innerHTML = `<p>Cappucino Assassino</p><img style="height: 50px" src=./images/assassino.jpg>`
   } else {
    question2.innerHTML = `<p>Do You Support Local Farmers</p><button class="buttons">+</button>`
   }
})

question3.addEventListener("click", () => {
    question3.classList.toggle("active")
   if (question3.classList.contains("active")) {
    question3.innerHTML = `<p>Ballerina Cappuccina</p><img style="height: 50px" src=./images/ballerinna.png>`
   } else {
    question3.innerHTML = `<p>Do You Use Organic Ingredients</p><button class="buttons">+</button>`
   }
})