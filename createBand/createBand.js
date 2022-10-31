const name$$ = document.querySelector(".name");
const img$$ = document.querySelector(".img");
const genre$$ = document.querySelector(".genre");
const origin$$ = document.querySelector(".origin");
const founded$$ = document.querySelector(".founded");
const currentlyActive$$ = document.querySelector(".currentlyActive");
const members$$ = document.querySelector('members');
const exMembers$$ = document.querySelector('exMembers');

const button$$ = document.querySelector(".send");

const sendForm = async () => {
  
    transform$$.value === "on"
    ? (transform$$.value = true)
    : (transform$$.value = false);

  const data = {
    name: name$$.value,
    img: img$$.value,
    genre: genre$$.value,
    origin: origin$$.value,
    founded: founded$$.value,
    currentlyActive: currentlyActive$$.value,
    members: members$$.value,
    exMembers: exMembers$$.value,
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
    reply$$.textContent = "Se ha creado la banda correctamente";
  } catch (error) {
    reply$$.textContent = "Error al crear la banda";
  }

  document.body.appendChild(reply$$);
};


button$$.addEventListener("click", sendForm);
