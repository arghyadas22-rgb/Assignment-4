const jobCards = document.querySelectorAll(".job-crad")


// count element

const totalCount = document.getElementById("total-count");

const interviewCount = document.getElementById("interview-count");

const rejectedCount = document.getElementById("rejected-count");


totalCount.innerText = jobCards.length;

jobCards.forEach(card => {
    const interviewBtn = card.querySelector(".interview-btn");
    const rejectedBtn = card.querySelector(".reject-btn");
    const statusBtn = card.querySelector(".status-btn");
    const deleteBtn = card.querySelector(".delete-btn");

    interviewBtn.addEventListener("click", () => {
        statusBtn.innerText = "INTERVIEW";
        statusBtn.classList.remove("btn-primary");
        statusBtn.classList.add("btn-success");
        card.dataset.status = "interview";
        updateCounter();
    })

    rejectedBtn.addEventListener("click", () => {
        statusBtn.innerText = "REJECTED";
        statusBtn.classList.remove("btn-primary");
        statusBtn.classList.add("btn-error");
        card.dataset.status = "rejected";
        updateCounter();
    })

    // delete click

    deleteBtn.addEventListener("click" , () => {
        card.remove();
        updateTotal();
        updateCounter();
    })

})

function updateCounter(){
    let interview =0;
    let rejected =0;

    const cards = document.querySelectorAll(".job-crad");

    cards.forEach(card =>{
        if(card.dataset.status === "interview"){
            interview++;
        }

        if(card.dataset.status === "rejected"){
            rejected++;
        }
    })

    interviewCount.innerText = interview;
    rejectedCount.innerText = rejected;
}

// total update

function updateTotal() {
    const cards = document.querySelectorAll(".job-crad");
    totalCount.innerText = cards.length;
}


