const updateNewBudget = document.querySelector("#budget-update");

const updateBudgetHandler = async (event) => {
    event.preventDefault();
    try {
       
        const sessionResponse = await fetch("/api/session/current");
        console.log(sessionResponse);
        if (sessionResponse.ok) {
            const sessionData = await sessionResponse.json();
            console.log(sessionData);

            
            const response = await fetch(`/api/budget/${sessionData.budget_id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                
            } else {
            }
        } else {

        }
    } catch (err) {
        console.log(err);
    }
};

updateNewBudget.addEventListener("submit", updateBudgetHandler);
