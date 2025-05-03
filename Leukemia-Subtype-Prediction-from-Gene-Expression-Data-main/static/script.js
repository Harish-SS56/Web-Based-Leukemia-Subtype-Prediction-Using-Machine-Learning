// Map numeric prediction to subtype labels
const subtypeMap = {
    1: "B-CELL_ALL",
    2: "B-CELL_ALL_TCF3-PBX1",
    3: "B-CELL_ALL_HYPERDIP",
    4: "B-CELL_ALL_HYPO",
    5: "B-CELL_ALL_MLL",
    6: "B-CELL_ALL_T-ALL",
    7: "B-CELL_ALL_ETV6-RUNX1"
};

// Detailed explanation for each subtype
const subtypeExplanations = {
    "B-CELL_ALL": {
        name: "B-cell Acute Lymphoblastic Leukemia (B-ALL)",
        description: "A common ALL subtype originating from immature B cells, often found in children. Generally has a favorable prognosis.",
        treatment: "Standard treatment includes induction, consolidation, and maintenance chemotherapy."
    },
    "B-CELL_ALL_TCF3-PBX1": {
        name: "B-ALL with TCF3-PBX1 Fusion",
        description: "Involves a chromosomal translocation (1;19). Seen mostly in children with moderate risk.",
        treatment: "Multi-agent chemotherapy; some cases may need stem cell transplantation."
    },
    "B-CELL_ALL_HYPERDIP": {
        name: "Hyperdiploid B-ALL",
        description: "Has more chromosomes than normal. Seen in children and linked to better outcomes.",
        treatment: "Standard chemotherapy is often effective."
    },
    "B-CELL_ALL_HYPO": {
        name: "Hypodiploid B-ALL",
        description: "Fewer chromosomes than normal; associated with poor prognosis.",
        treatment: "Requires aggressive treatment, possibly stem cell transplant."
    },
    "B-CELL_ALL_MLL": {
        name: "B-ALL with MLL Rearrangement",
        description: "Rare and aggressive form, mostly in infants. Involves MLL/KMT2A gene.",
        treatment: "Intensive chemotherapy; clinical trials may offer better options."
    },
    "B-CELL_ALL_T-ALL": {
        name: "T-cell Acute Lymphoblastic Leukemia (T-ALL)",
        description: "Arises from T cells. Common in adolescents, often with mediastinal mass.",
        treatment: "Chemotherapy with CNS prophylaxis; transplant in high-risk cases."
    },
    "B-CELL_ALL_ETV6-RUNX1": {
        name: "B-ALL with ETV6-RUNX1 Fusion",
        description: "Caused by a 12;21 translocation. Common and has an excellent prognosis.",
        treatment: "Treated with standard chemotherapy. High survival rate with proper care."
    }
};

// Main function to send input and receive prediction
function sendData() {
    const geneValues = document.getElementById("geneInput").value.trim();
    if (!geneValues) return;

    const chatBox = document.getElementById("chatBox");

    // Display user input
    const userMsg = document.createElement("div");
    userMsg.className = "chat-message user";
    userMsg.innerText = geneValues;
    chatBox.appendChild(userMsg);
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear input field
    document.getElementById("geneInput").value = "";

    // Fetch prediction from backend
    fetch("/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "gene_values=" + encodeURIComponent(geneValues)
    })
    .then(response => response.json())
    .then(data => {
        const botMsg = document.createElement("div");
        botMsg.className = "chat-message bot";

        if (data.subtype) {
            const subtypeNumber = parseInt(data.subtype);
            const subtypeKey = subtypeMap[subtypeNumber];

            if (subtypeKey && subtypeExplanations[subtypeKey]) {
                const info = subtypeExplanations[subtypeKey];
                botMsg.innerHTML = `
                    <strong>🧬 Predicted Subtype:</strong> ${info.name} (${subtypeKey})<br><br>
                    <strong>🔍 Explanation:</strong> ${info.description}<br><br>
                    <strong>💊 Treatment:</strong> ${info.treatment}
                `;
            } else {
                botMsg.innerText = `Predicted Subtype Code: ${subtypeNumber} (No explanation found)`;
            }
        } else {
            botMsg.innerText = "❌ Error: " + data.error;
        }

        chatBox.appendChild(botMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch(error => {
        const errorMsg = document.createElement("div");
        errorMsg.className = "chat-message bot";
        errorMsg.innerText = "❌ Server Error: " + error.message;
        chatBox.appendChild(errorMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
    });
}
