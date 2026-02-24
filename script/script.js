const jobCards = document.querySelectorAll(".job-crad");


const noJobsMsg = document.getElementById("no-jobs-msg");

let activeFilter = "all";


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
        updateJobsText();
    })

    rejectedBtn.addEventListener("click", () => {
        statusBtn.innerText = "REJECTED";
        statusBtn.classList.remove("btn-primary");
        statusBtn.classList.add("btn-error");
        card.dataset.status = "rejected";
        updateCounter();
        updateJobsText();
    })

    // delete click

    deleteBtn.addEventListener("click" , () => {
        card.remove();
        updateTotal();
        updateCounter();
        updateJobsText();
        applyCurrentFilter();
    })

})


function applyCurrentFilter() {
    const cards = document.querySelectorAll(".job-crad");
    let exists = false;

    cards.forEach(card => {
        if(activeFilter === "all") {
            card.style.display = "block";
            exists = true;
        } else if(card.dataset.status === activeFilter) {
            card.style.display = "block";
            exists = true;
        } else {
            card.style.display = "none";
        }
    });

    if(!exists) {
        noJobsMsg.classList.remove("hidden");
        noJobsMsg.classList.add("flex");
    } else {
        noJobsMsg.classList.add("hidden");
        noJobsMsg.classList.remove("flex");
    }
}



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

function updateJobsText(){
    const cards = document.querySelectorAll(".job-crad");

    let selected = 0;

    cards.forEach (card => {
        if(card.dataset.status === "interview" || card.dataset.status === "rejected"){
            selected++;
        }
    });

    const jobsText =document.getElementById("jobs-text");
    jobsText.innerText = `${selected} of ${cards.length} jobs`;
}

// FILTER SECTION  Some help is needed from different places.

const  filterAll = document.getElementById("filter-all");
const  filterInterview = document.getElementById("filter-interview");
const  filterRejected = document.getElementById("filter-rejected");


filterAll.addEventListener("click", () => {
    activeFilter = "all";
    applyCurrentFilter();
});

filterInterview.addEventListener("click", () => {
    activeFilter = "interview";
    applyCurrentFilter();
});

filterRejected.addEventListener("click", () => {
    activeFilter = "rejected";
    applyCurrentFilter();
});


