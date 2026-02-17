const cities = [
    {
        title: "Manila",
        description: "Manila, the capital of the Philippines, is a bustling metropolis blending Spanish colonial history with modern city life. The city is known for its vibrant culture, historic Intramuros district, and the famous Manila Bay sunset.",
        image: "manila_img.jpg",
        imageAlt: "Manila at night",
        recommendations: [
            "Binondo: world's oldest chinatown!",
            "Manila Ocean Park",
            "Venice Grand Canal Mall",
            "Mall of Asia",
            "Bonifacio Global City (BGC)"
        ]
    },
    {
        title: "Cebu",
        description: "Cebu City is the oldest city in the Philippines and the first Spanish settlement. It's a gateway to stunning beaches, diving spots, and the famous Sinulog Festival. It is also a major tradehub, the birthplace of Christianity in the Philippines, and features rich historical sites. ",
        image: "cebu.jpg",
        imageAlt: "Cebu city",
        recommendations: [
            "Magellan's Cross",
            "Basilica del Santo Niño",
            "Taoist Temple",
            "Kawasan Falls",
            "Sinulog Festival"
        ]
    },
    {
        title: "Davao",
        description: "Davao is the largest city in the Philippines by land area. It's known for Mount Apo, the country's highest peak, durian, and the Philippine Eagle Center. It is a great city for nature lovers and those looking to experience the mix of indigenous culture and cuisines in the Philippines.",
        image: "davao.jpg",
        imageAlt: "Davao city",
        recommendations: [
            "Philippine Eagle Center",
            "Mount Apo",
            "Davao Crocodile Park",
            "Eden Nature Park",
            "Bankerohan Market"
        ]
    },
    {
        title: "Boracay Island",
        description: "Boracay is a small island in central Philippines known for its white sandy beaches and crystal clear turquoise waters. It's a tropical paradise perfect for a relaxing vacation with diverse water activities and nightlife.",
        image: "boracay.jpg",
        imageAlt: "Boracay island",
        recommendations: [
            "White Beach",
            "Bulabog Beach",
            "Puka Shell Beach",
            "Ariel's Point",
            "Sunset sailing"
        ]
    }
];

let currentIndex = 0;

function showCity(index) {
    currentIndex = ((index % cities.length) + cities.length) % cities.length;
    const city = cities[currentIndex];
    document.getElementById("city-title").textContent = city.title;
    document.getElementById("city-description").textContent = city.description;
    const img = document.getElementById("city-image");
    img.src = city.image;
    img.alt = city.imageAlt;

    const listEl = document.getElementById("city-recommendations");
    listEl.innerHTML = "";
    (city.recommendations || []).forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        listEl.appendChild(li);
    });
}

const leftButton = document.querySelector(".arrow-left");
leftButton.addEventListener("click", () => {
    console.log("Left button for city clickeD");
    showCity(currentIndex - 1);
});

const rightButton = document.querySelector(".arrow-right")
rightButton.addEventListener("click", () => {
    console.log("Right button for city clicked");
    showCity(currentIndex + 1);
});

const form = document.getElementById("qform");
const questionInput = document.getElementById("question");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = questionInput.value.trim();
    if (value === "") {
        alert("Please enter a question before submitting.");
        return;
    }
    alert("Question submitted. Thank you!");
    form.reset();
});