const cardData = [
    { name: "John Doe", age: 25, image: ""},
    { name: "Jane Smith", age: 30, image: "https://example.com/jane-smith.jpg" },
    { name: "Alex Johnson", age: 28, image: "https://example.com/alex-johnson.jpg" },
    { name: "Emily Brown", age: 32, image: "https://example.com/emily-brown.jpg" }
  ];


  const cardContainer = document.getElementById("card-container");

cardData.forEach(data => {
  const card = document.createElement("div");
  card.className = "card";

  const name = document.createElement("h2");
  name.textContent = data.name;

  const age = document.createElement("p");
  age.textContent = `Age: ${data.age}`;

  const image = document.createElement("img");
  image.src = data.image;
  image.alt = data.name;

  card.appendChild(name);
  card.appendChild(age);
  card.appendChild(image);

  cardContainer.appendChild(card);
});