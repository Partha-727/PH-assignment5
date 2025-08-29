// Select all hearts
document.querySelectorAll('.heart-icon').forEach(icon => {
    icon.addEventListener('click', function () {
        const heartElement = document.getElementById('heart-number');
        const heart = parseInt(heartElement.innerText) || 0;
        heartElement.innerText = heart + 1;
    });
});


// call functionality
document.addEventListener("DOMContentLoaded", function () {
    const coinElement = document.getElementById("coin-number");
    const historyList = document.getElementById("history-list");

    // Attach Call button functionality
    document.querySelectorAll(".call-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".bg-white");
        const serviceName = card.querySelector("h1").innerText;
        const serviceNumber = card.querySelector(".roboto-font.font-bold").innerText;

        let coins = parseInt(coinElement.innerText) || 0;

        // Check coins
        if (coins < 20) {
            alert("Not enough coins to make this call!");
            return;
        }

        // Deduct 20 coins
        coins -= 20;
        coinElement.innerText = coins;

        // Show alert
        alert(`Calling ${serviceName} (${serviceNumber})`);

        // Get current time
        const now = new Date();
        const timeString = now.toLocaleString("en-GB", {  
            dateStyle: "short",  
            timeStyle: "short"  
        });

        // Add to history
        const li = document.createElement("li");
        li.className = "flex justify-between border-b pb-1";
        li.innerHTML = `
            <div>
                <span class="font-medium block">${serviceName}</span>
                <span class="text-gray-600">${serviceNumber}</span>
            </div>
            <div class="text-sm text-gray-500">${timeString}</div>
        `;
        historyList.prepend(li); 
    });
});


    // Clear history button
    document.getElementById("clear-history").addEventListener("click", () => {
        historyList.innerHTML = "";
    });
});

    const copyElement = document.getElementById("copy-number");

    // Copy button functionality
    document.querySelectorAll(".copy-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const card = btn.closest(".bg-white");
            const serviceName = card.querySelector("h1").innerText;
            const serviceNumber = card.querySelector(".roboto-font.font-bold").innerText;

            // Copy to clipboard
            navigator.clipboard.writeText(serviceNumber);

            // Show alert
            alert(`Copied ${serviceName} Number (${serviceNumber})`);

            // Increase copy count
            const copyCount = parseInt(copyElement.innerText) || 0;
            copyElement.innerText = copyCount + 1;
        });
    });
