const title$$ = document.querySelector(".title");
const img$$ = document.querySelector(".img");
const released$$ = document.querySelector(".released");
const label$$ = document.querySelector(".label");
const producer$$ = document.querySelector(".producer");
const length$$ = document.querySelector(".length");

const button$$ = document.querySelector(".send");

const sendForm = async () => {
  
    transform$$.value === "on"
    ? (transform$$.value = true)
    : (transform$$.value = false);

  const data = {
    title: title$$.value,
    img: img$$.value,
    released: released$$.value,
    label: label$$.value,
    producer: producer$$.value,
    length: length$$.value,
  };

  const sendData = JSON.stringify(data);

  const reply$$ = document.createElement("p");

  try {
    await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: sendData,
    });
    reply$$.textContent = "Se ha creado el album correctamente";
  } catch (error) {
    reply$$.textContent = "Error al crear el album";
  }

  document.body.appendChild(reply$$);
};


button$$.addEventListener("click", sendForm);
