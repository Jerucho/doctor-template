const openServicesModal = () => {
  const servicesCards = document.getElementsByClassName("services__card");
  const modal = document.getElementById("services-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalText = {
    as: {
      title: "Analisis de Sangre",
      description:
        "Describe tu servicio aquí. ¿Qué lo hace especial? Usa texto atractivo y original para contar tu oferta y sus beneficios. Agrega más información para despertar la curiosidad de tu audiencia y convencerla de concretar la reserva.",
      table: {
        time: "20 min.",
        price: "$350",
        address: "Av. Fray Antonio Alcalde 10",
      },
    },
    ef: {
      title: "Examen Fisico",
      description:
        "Describe tu servicio aquí. ¿Qué lo hace especial? Usa texto atractivo y original para contar tu oferta y sus beneficios. Agrega más información para despertar la curiosidad de tu audiencia y convencerla de concretar la reserva.",
      table: {
        time: "30 min.",
        price: "$150",
        address: "Av. Fray Antonio Alcalde 10",
      },
    },
    am: {
      title: "Analisis Mental",
      description:
        "Describe tu servicio aquí. ¿Qué lo hace especial? Usa texto atractivo y original para contar tu oferta y sus beneficios. Agrega más información para despertar la curiosidad de tu audiencia y convencerla de concretar la reserva.",
      table: {
        time: "30 min.",
        price: "$150",
        address: "Av. Fray Antonio Alcalde 10",
      },
    },
    pyb: {
      title: "Prevencion y Bienestar",
      description:
        "Describe tu servicio aquí. ¿Qué lo hace especial? Usa texto atractivo y original para contar tu oferta y sus beneficios. Agrega más información para despertar la curiosidad de tu audiencia y convencerla de concretar la reserva.",
      table: {
        time: "30 min.",
        price: "$150",
        address: "Av. Fray Antonio Alcalde 10",
      },
    },
    va: {
      title: "Vacuna Antigripal",
      description:
        "Describe tu servicio aquí. ¿Qué lo hace especial? Usa texto atractivo y original para contar tu oferta y sus beneficios. Agrega más información para despertar la curiosidad de tu audiencia y convencerla de concretar la reserva.",
      table: {
        time: "30 min.",
        price: "$150",
        address: "Av. Fray Antonio Alcalde 10",
      },
    },
    pf: {
      title: "Planificacion Familiar",
      description:
        "Describe tu servicio aquí. ¿Qué lo hace especial? Usa texto atractivo y original para contar tu oferta y sus beneficios. Agrega más información para despertar la curiosidad de tu audiencia y convencerla de concretar la reserva.",
      table: {
        time: "30 min.",
        price: "$150",
        address: "Av. Fray Antonio Alcalde 10",
      },
    },
  };
  const modalTime = document.getElementById("modal-time");
  const modalPrice = document.getElementById("modal-price");
  const modalDescription = document.getElementById("modal-description");
  console.log(typeof servicesCards);
  for (let i = 0; i < servicesCards.length; i++) {
    const element = servicesCards[i];

    element.addEventListener("click", () => {
      console.log(element.id);
      modalTitle.innerHTML = modalText[element.id].title;
      modalTime.innerHTML = modalText[element.id].table.time;
      modalPrice.innerHTML = modalText[element.id].table.price;
      modalDescription.innerHTML = modalText[element.id].description;
      modal.classList.toggle("services-modal-container");
    });
  }
};

const closeServicesModal = () => {
  const modalClose = document.getElementById("modal-close");
  const modal = document.getElementById("services-modal");
  modalClose.addEventListener("click", () => {
    // console.log("asdas");
    modal.classList.remove("services-modal-container");
  });
};

const openResponsiveNavbar = () => {
  const navUl = document.getElementById("nav-ul");
  const navBtn = document.getElementById("nav-btn");
  const navI = document.getElementById("nav-i");
  navBtn.addEventListener("click", () => {
    navUl.classList.toggle("nav__hidden");
    navI.classList.toggle("fa-bars");
    navI.classList.toggle("fa-xmark");

    // console.log("as");
  });
};

const moveResponsiveNav = () => {
  const navHome = document.getElementById("navHome");
  const navAbout = document.getElementById("navAbout");
  const navServices = document.getElementById("navServices");
  const navContact = document.getElementById("navContact");
  const navUl = document.getElementById("nav-ul");
  const navBtn = document.getElementById("nav-btn");
  const navI = document.getElementById("nav-i");
  navHome.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navUl.classList.toggle("nav__hidden");
    navI.classList.toggle("fa-xmark");
    navI.classList.toggle("fa-bars");
  });
  navAbout.addEventListener("click", function () {
    window.scrollTo({
      top: document.getElementById("about").offsetTop - 150,
      behavior: "smooth",
    });
    navUl.classList.toggle("nav__hidden");
    navI.classList.toggle("fa-xmark");
    navI.classList.toggle("fa-bars");
  });
  navServices.addEventListener("click", function () {
    window.scrollTo({
      top: document.getElementById("services").offsetTop - 150,
      behavior: "smooth",
    });
    navUl.classList.toggle("nav__hidden");
    navI.classList.toggle("fa-xmark");
    navI.classList.toggle("fa-bars");
  });
  navContact.addEventListener("click", function () {
    window.scrollTo({
      top: document.getElementById("footer").offsetTop + 200,
      behavior: "smooth",
    });
    navUl.classList.toggle("nav__hidden");
    navI.classList.toggle("fa-xmark");
    navI.classList.toggle("fa-bars");
  });
};
moveResponsiveNav();
openResponsiveNavbar();
closeServicesModal();
openServicesModal();
