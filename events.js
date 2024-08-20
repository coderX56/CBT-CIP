/** @format */

let eventArray = JSON.parse(localStorage.getItem("events")) || [];
function display() {
	const eventMain = document.getElementById("events-list");
	eventMain.innerHTML = "";
	eventArray.forEach((event) => {
		const show = document.createElement("div");
		show.className = "event";
		show.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <div class="event-details">
                <h2>${event.title}</h2>
                <p><b>Category:</b> ${event.category}</p>
                <p><b>Sponsored By:</b>${event.sponsered}<p>
                <p><b>Date:</b> ${event.date}<p>
                <p><b>Venue:</b> ${event.venue}<p>
                <p><b>Contact:</b> ${event.contact}<p>
                <p><b>Description:</b>${event.description}<p>
            </div>
        `;
		eventMain.appendChild(show);
	});
}

if (document.getElementById("Form")) {
	document.getElementById("Form").addEventListener("submit", (event) => {
		event.preventDefault();

		const title = document.getElementById("title").value;
		const category = document.getElementById("category").value;
		const sponsered = document.getElementById("sponsered").value;
		const venue = document.getElementById("venue").value;
		const date = document.getElementById("date").value;
		const contact = document.getElementById("contact").value;
		const description = document.getElementById("description").value;
		const image = document.getElementById("image").value;
		const newEvent = {
			title: title,
			category: category,
			sponsered: sponsered,
			venue: venue,
			date: date,
			contact: contact,
			description: description,
			image: image,
		};

		eventArray.push(newEvent);
		localStorage.setItem("events", JSON.stringify(eventArray));
		document.getElementById("Form").reset();
		window.location.href = "index.html";
	});
}

if (document.getElementById("events-list")) {
	display();
}
