const snears = document.querySelectorAll(".snear");
const muteBtn = document.querySelector(".mute-btn");
const muteBtns = document.querySelector(".mute");
const circle = document.querySelectorAll(".circle");
const homePage = document.querySelector(".home-page");
const aboutPage = document.querySelector(".about-page");
const skillsPage = document.querySelector(".skills-page");
const projectPage = document.querySelector(".project-page");
const contactPage = document.querySelector(".contact-page");
const homeBtn = document.querySelector(".home");
const aboutBtn = document.querySelector(".about");
const skillsBtn = document.querySelector(".skills");
const projectBtn = document.querySelector(".projects");
const contactBtn = document.querySelector(".contact");
const projectSlider = document.querySelector(".project-slider");
const resumeTag = document.querySelector(".resume-tag");
const muteTag = document.querySelector(".mute-tag");
const musicContainer = document.querySelector(".left-container");

let interaction = false;
let mute = true;

muteBtns.addEventListener("click", () => {
  if (mute == true) {
    mute = false;
    muteBtns.innerHTML =
      'SOUND:<button class="mute-btn" style="color: cyan">ON</button>';
  } else {
    mute = true;
    muteBtns.innerHTML =
      'SOUND:<button class="mute-btn" style="color: red">OFF</button>';
  }
});

const stringA = document.querySelector(".string-a");
const stringB = document.querySelector(".string-b");
const stringC = document.querySelector(".string-c");
const stringD = document.querySelector(".string-d");

const D2 = new Audio("./notes/D2.wav");
const Gb2 = new Audio("./notes/Gb2.wav");
const G2 = new Audio("./notes/G2.wav");
const A2 = new Audio("./notes/A2.wav");
const B2 = new Audio("./notes/B2.wav");
const Db3 = new Audio("./notes/Db3.wav");
const D3 = new Audio("./notes/D3.wav");
const E3 = new Audio("./notes/E3.wav");
const Gb3 = new Audio("./notes/Gb3.wav");
const G3 = new Audio("./notes/G3.wav");
const Ab3 = new Audio("./notes/Ab3.wav");
const A3 = new Audio("./notes/A3.wav");
const B3 = new Audio("./notes/B3.wav");
const Db4 = new Audio("./notes/Db4.wav");
const D4 = new Audio("./notes/D4.wav");
const E4 = new Audio("./notes/E4.wav");
const Gb4 = new Audio("./notes/Gb4.wav");
const G4 = new Audio("./notes/G4.wav");
const A4 = new Audio("./notes/A4.wav");
const B4 = new Audio("./notes/B4.wav");
const Db5 = new Audio("./notes/Db5.wav");
const D5 = new Audio("./notes/D5.wav");
const E5 = new Audio("./notes/E5.wav");
const Gb5 = new Audio("./notes/Gb5.wav");
const G5 = new Audio("./notes/G5.wav");
const A5 = new Audio("./notes/A5.wav");
const B5 = new Audio("./notes/B5.wav");

const canonInDLeft = [
  [D3, 68, Gb3, 60, A3, 54, D4, 44],
  [A2, 78, E3, 64, A3, 54, Db4, 46],
  [B2, 74, D3, 68, Gb3, 60, B3, 50],
  [Gb2, 84, Db3, 70, Gb3, 60, A3, 54],
  [G2, 82, B2, 74, D3, 68, G3, 58],
  [D2, 86, Gb3, 60, A3, 54, D4, 44],
  [G2, 82, E3, 64, B3, 50, D4, 44],
  [A2, 78, E3, 64, A3, 54, Db4, 46],
];

let i = 0;

const playLeft = (str) => {
  if (mute == false) {
    stringA.style.animation = "string .4s ease-out";
    str[i][0].currentTime = 0;
    str[i][0].play();
    setTimeout(() => {
      stringB.style.animation = "string .4s ease-out";
      str[i][2].currentTime = 0;
      str[i][2].play();
    }, 300);
    setTimeout(() => {
      stringC.style.animation = "string .4s ease-out";
      str[i][4].currentTime = 0;
      str[i][4].play();
    }, 600);
    setTimeout(() => {
      stringD.style.animation = "string .4s ease-out";
      str[i][6].currentTime = 0;
      str[i][6].play();
      i++;
      if (i == str.length) {
        i = 0;
      }
      stringA.style.width = `${str[i][1]}%`;
      stringB.style.width = `${str[i][3]}%`;
      stringC.style.width = `${str[i][5]}%`;
      stringD.style.width = `${str[i][7]}%`;
    }, 900);

    setTimeout(() => {
      stringA.style.animation = "";
    }, 600);
    setTimeout(() => {
      stringB.style.animation = "";
    }, 900);
    setTimeout(() => {
      stringC.style.animation = "";
    }, 1200);
    setTimeout(() => {
      stringD.style.animation = "";
    }, 1500);
  }
};

const stringE = document.querySelector(".string-e");
const stringF = document.querySelector(".string-f");
const stringG = document.querySelector(".string-g");
const stringH = document.querySelector(".string-h");
const stringI = document.querySelector(".string-i");
const stringJ = document.querySelector(".string-j");
const stringK = document.querySelector(".string-k");
const stringL = document.querySelector(".string-l");

const canonInDRight = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [Gb5, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [E5, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [D5, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [Db5, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [B4, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [A4, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [B4, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [Db5, 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [D5, 56, 0, 0, 0, 0, 0, 0, Gb5, 48, 0, 0, 0, 0, 0, 0],
  [A5, 40, 0, 0, 0, 0, 0, 0, G5, 44, 0, 0, 0, 0, 0, 0],
  [Gb5, 48, 0, 0, 0, 0, 0, 0, D5, 56, 0, 0, 0, 0, 0, 0],
  [Gb5, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, E5, 52, 0, 0],
  [D5, 56, 0, 0, 0, 0, 0, 0, B4, 64, 0, 0, 0, 0, 0, 0],
  [D5, 56, 0, 0, 0, 0, 0, 0, Gb5, 48, 0, 0, 0, 0, 0, 0],
  [G5, 44, 0, 0, 0, 0, 0, 0, B5, 36, 0, 0, 0, 0, 0, 0],
  [A5, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, G5, 44, 0, 0],
  [D5, 56, 0, 0, Db5, 60, 0, 0, D5, 56, 0, 0, A4, 68, 0, 0],
  [A4, 68, 0, 0, 0, 0, 0, 0, Db5, 60, 0, 0, 0, 0, 0, 0],
  [D5, 56, 0, 0, 0, 0, 0, 0, Gb5, 48, 0, 0, 0, 0, 0, 0],
  [A5, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, B5, 36, 0, 0],
  [G5, 44, 0, 0, Gb5, 48, 0, 0, E5, 52, 0, 0, G5, 44, 0, 0],
  [Gb5, 48, 0, 0, E5, 52, 0, 0, D5, 56, 0, 0, Db5, 60, 0, 0],
  [B4, 64, 0, 0, A4, 68, 0, 0, D5, 56, 0, 0, 0, 0, 0, 0],
  [D5, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, Db5, 60, 0, 0],
  [D5, 56, 0, 0, E5, 52, 0, 0, Gb5, 48, 0, 0, G5, 44, 0, 0],
  [A5, 40, 0, 0, E5, 52, 0, 0, A5, 40, 0, 0, G5, 44, 0, 0],
  [Gb5, 48, 0, 0, B5, 36, 0, 0, A5, 40, 0, 0, G5, 44, 0, 0],
  [A5, 40, 0, 0, G5, 44, 0, 0, Gb5, 48, 0, 0, E5, 52, 0, 0],
  [D5, 56, 0, 0, B4, 64, 0, 0, B4, 64, 0, 0, Db5, 60, 0, 0],
  [D5, 56, 0, 0, Gb5, 48, E5, 52, D5, 56, 0, 0, Gb5, 48, 0, 0],
  [G5, 44, 0, 0, D5, 56, Db5, 60, B4, 64, 0, 0, Db5, 60, 0, 0],
  [D5, 56, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, Db5, 60, 0, 0],
  [A5, 40, 0, 0, Gb5, 48, G5, 44, A5, 40, 0, 0, Gb5, 48, G5, 44],
  [A5, 40, A4, 68, B4, 64, Db5, 60, D5, 56, E5, 52, Gb5, 48, G5, 72],
  [Gb5, 48, 0, 0, D5, 56, E5, 52, Gb5, 48, 0, 0, Gb4, 76, G4, 72],
  [A4, 68, B4, 64, A4, 68, G4, 72, A4, 68, Gb4, 76, G4, 72, A4, 68],
  [G4, 72, 0, 0, B4, 64, A4, 68, G4, 72, 0, 0, Gb4, 76, E4, 80],
  [Gb4, 76, E4, 80, D4, 84, E4, 80, Gb4, 76, G4, 72, A4, 68, B4, 64],
  [G4, 72, 0, 0, B4, 64, A4, 68, B4, 64, 0, 0, Db5, 60, D5, 56],
  [A4, 68, B4, 64, Db5, 60, D5, 56, E5, 52, Gb5, 48, G5, 44, A5, 40],
  [A5, 40, 0, 0, Gb5, 48, G5, 44, A5, 40, 0, 0, Gb5, 48, G5, 44],
  [A5, 40, A4, 68, B4, 64, Db5, 60, D5, 56, E5, 52, Gb5, 48, G5, 72],
  [Gb5, 48, 0, 0, D5, 56, E5, 52, Gb5, 48, 0, 0, Gb4, 76, G4, 72],
  [A4, 68, B4, 64, A4, 68, G4, 72, A4, 68, Gb4, 76, G4, 72, A4, 68],
  [G4, 72, 0, 0, B4, 64, A4, 68, G4, 72, 0, 0, Gb4, 76, E4, 80],
  [Gb4, 76, E4, 80, D4, 84, E4, 80, Gb4, 76, G4, 72, A4, 68, B4, 64],
  [G4, 72, 0, 0, B4, 64, A4, 68, B4, 64, 0, 0, Db5, 60, D5, 56],
  [A4, 68, B4, 64, Db5, 60, D5, 56, E5, 52, Gb5, 48, G5, 44, A5, 40],
  [Gb5, 48, 0, 0, D5, 56, E5, 52, Gb5, 48, 0, 0, E5, 52, D5, 56],
  [E5, 52, Db5, 60, D5, 56, E5, 52, Gb5, 48, E5, 52, D5, 56, Db5, 60],
  [D5, 56, 0, 0, B4, 64, Db5, 60, D5, 56, 0, 0, D5, 56, E5, 52],
  [Gb5, 48, G5, 44, Gb5, 48, E5, 52, Gb5, 48, D5, 56, Db5, 60, D5, 56],
  [B4, 64, 0, 0, D5, 56, Db5, 60, B4, 64, 0, 0, A4, 68, G4, 72],
  [A4, 68, G4, 72, Gb4, 76, G4, 72, A4, 68, B4, 64, Db5, 60, D5, 56],
  [B4, 64, 0, 0, D5, 56, Db5, 60, D5, 56, 0, 0, Db5, 60, B4, 64],
  [Db5, 60, A4, 68, B4, 64, Db5, 60, D5, 56, E5, 52, Gb5, 48, G5, 44],
  [A5, 40, 0, 0, D5, 56, 0, 0, Gb5, 48, 0, 0, A5, 40, 0, 0],
  [A5, 40, 0, 0, B5, 36, 0, 0, A5, 40, 0, 0, G5, 44, 0, 0],
  [Gb5, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, Gb5, 48, 0, 0],
  [Gb5, 48, 0, 0, G5, 44, 0, 0, Gb5, 48, 0, 0, E5, 52, 0, 0],
  [D5, 56, 0, 0, Db5, 60, 0, 0, B4, 64, 0, 0, Db5, 60, 0, 0],
  [D5, 56, 0, 0, 0, 0, 0, 0, A4, 68, 0, 0, 0, 0, A4, 68],
  [D5, 56, 0, 0, Db5, 60, 0, 0, B4, 64, 0, 0, Db5, 60, 0, 0],
  [D5, 56, 0, 0, 0, 0, 0, 0, Db5, 60, 0, 0, 0, 0, 0, 0],
];

let j = 0;

const playRight = (str) => {
  if (mute == false) {
    if (str[j][0] != 0) {
      stringE.style.animation = "stringtwo .4s ease-out";
      str[j][0].currentTime = 0;
      str[j][0].play();
    }
    setTimeout(() => {
      if (str[j][2] != 0) {
        stringF.style.animation = "stringtwo .4s ease-out";
        str[j][2].currentTime = 0;
        str[j][2].play();
      }
    }, 150);
    setTimeout(() => {
      if (str[j][4] != 0) {
        stringG.style.animation = "stringtwo .4s ease-out";
        str[j][4].currentTime = 0;
        str[j][4].play();
      }
    }, 300);
    setTimeout(() => {
      if (str[j][6] != 0) {
        stringH.style.animation = "stringtwo .4s ease-out";
        str[j][6].currentTime = 0;
        str[j][6].play();
      }
    }, 450);
    setTimeout(() => {
      if (str[j][8] != 0) {
        stringI.style.animation = "stringtwo .4s ease-out";
        str[j][8].currentTime = 0;
        str[j][8].play();
      }
    }, 600);
    setTimeout(() => {
      if (str[j][10] != 0) {
        stringJ.style.animation = "stringtwo .4s ease-out";
        str[j][10].currentTime = 0;
        str[j][10].play();
      }
    }, 750);
    setTimeout(() => {
      if (str[j][12] != 0) {
        stringK.style.animation = "stringtwo .4s ease-out";
        str[j][12].currentTime = 0;
        str[j][12].play();
      }
    }, 900);
    setTimeout(() => {
      if (str[j][14] != 0) {
        stringL.style.animation = "stringtwo .4s ease-out";
        str[j][14].currentTime = 0;
        str[j][14].play();
      }

      j++;
      if (j == str.length) {
        j = 8;
      }
      stringE.style.width = `${str[j][1]}%`;
      stringF.style.width = `${str[j][3]}%`;
      stringG.style.width = `${str[j][5]}%`;
      stringH.style.width = `${str[j][7]}%`;
      stringI.style.width = `${str[j][9]}%`;
      stringJ.style.width = `${str[j][11]}%`;
      stringK.style.width = `${str[j][13]}%`;
      stringL.style.width = `${str[j][15]}%`;
    }, 1050);

    setTimeout(() => {
      stringE.style.animation = "";
    }, 600);
    setTimeout(() => {
      stringF.style.animation = "";
    }, 750);
    setTimeout(() => {
      stringG.style.animation = "";
    }, 900);
    setTimeout(() => {
      stringH.style.animation = "";
    }, 1050);
    setTimeout(() => {
      stringI.style.animation = "";
    }, 1200);
    setTimeout(() => {
      stringJ.style.animation = "";
    }, 1350);
    setTimeout(() => {
      stringK.style.animation = "";
    }, 1500);
    setTimeout(() => {
      stringL.style.animation = "";
    }, 1650);
  }
};

setTimeout(() => {
  setInterval(playLeft, 1200, canonInDLeft);
  setInterval(playRight, 1200, canonInDRight);
}, 650);

document.querySelector(".left-container").addEventListener("click", () => {
  if (interaction == false) {
    mute = false;
    document.querySelector(".click-to-play").innerHTML = "";
  }
  interaction = true;
});

let projectArr = [
  [
    {
      color: "to-do.png",
      name: `<div class="name">To-Do List<div class="tools"><i class="fab fa-html5"></i><i class="fab fa-sass"></i><i class="fab fa-js"></i><i class="fas fa-server"></i></div></div>`,
      url: "https://jonkersdev.github.io/To-Do-List/",
    },
    {
      color: "sort.png",
      name: `<div class="name">Sorting Algorithms<div class="tools"><i class="fab fa-html5"></i><i class="fab fa-sass"></i><i class="fab fa-js"></i></div></div>`,
      url: "",
    },
    {
      color: "tree.png",
      name: `<div class="name">Recursive Tree Algorithm<div class="tools"><i class="fab fa-html5"></i><i class="fab fa-sass"></i><i class="fab fa-js"></i></div></div>`,
      url: "https://jonkersdev.github.io/projects/tree.html",
    },
  ],
  [
    {
      color: "path.png",
      name: `<div class="name">Pathfinding Algorithms<div class="tools"><i class="fab fa-html5"></i><i class="fab fa-sass"></i><i class="fab fa-js"></i></div></div>`,
      url: "https://jonkersdev.github.io/pathfinding/",
    },
    {
      color: "recipe.png",
      name: `<div class="name">Recipe App<div class="tools"><i class="fab fa-html5"></i><i class="fab fa-sass"></i><i class="fab fa-js"></i><i class="fas fa-cloud cloud"><div>API</div></i></div></div>`,
      url: "https://jonkersdev.github.io/foodmore/recipe.html",
    },
    {
      color: "ur.png",
      name: `<div class="name">Royal Game of Ur<div class="tools"><i class="fab fa-html5"></i><i class="fab fa-sass"></i><i class="fab fa-js"></i></div></div>`,
      url: "https://jonkersdev.github.io/projects/ur.html",
    },
  ],
  [
    {
      color: "contact.png",
      name: `<div class="name">Contacts App<div class="tools"><i class="fab fa-html5"></i><i class="fab fa-sass"></i><i class="fab fa-js"></i><i class="fas fa-server"></i></div></div>`,
      url: "https://jonkersdev.github.io/projects/contact.html",
    },
    {
      color: "count.png",
      name: `<div class="name">Countdown App<div class="tools"><i class="fab fa-html5"></i><i class="fab fa-css3-alt"></i><i class="fab fa-js"></i></div></div>`,
      url: "https://jonkersdev.github.io/projects/count.html",
    },
    {
      color: "mol.png",
      name: `<div class="name">WIDM Site<div class="tools"><i class="fab fa-html5"></i><i class="fab fa-css3-alt"></i></div></div>`,
      url: "https://jonkersdev.github.io/projects/widm.html",
    },
  ],
  [
    {
      color: "blooger.png",
      name: `<div class="name">Coming Soon</div>`,
      url: "",
    },
    {
      color: "bonsai.png",
      name: `<div class="name">Unofficial Webshop<div class="tools"><i class="fab fa-html5"></i><i class="fab fa-sass"></i><i class="fab fa-js"></i><i class="fas fa-server"></i></div></div>`,
      url: "https://jonkersdev.github.io/bonsai/",
    },
    {
      color: "cotton.png",
      name: `<div class="name">Coming Soon</div>`,
      url: "",
    },
  ],
];

for (l = 0; l < projectArr.length; l++) {
  for (k = 0; k < projectArr[0].length; k++) {
    let block = document.createElement("div");
    block.classList.add(`pro`);
    block.classList.add(`x${k + 1}`);
    block.classList.add(`y${l + 1}`);
    block.style = `background-image: url(./images/${projectArr[l][k].color});`;
    block.innerHTML = projectArr[l][k].name;
    block.url = projectArr[l][k].url;
    block.addEventListener("click", () => {
      window.open(block.url);
    });
    document.querySelector(".project-slider").appendChild(block);
  }
}

const call = () => {
  let dir = Math.floor(Math.random() * 4);

  if (dir == 0) {
    callX();
  } else if (dir == 1) {
    callYy();
  } else if (dir == 2) {
    callXx();
  } else {
    callY();
  }
};

const callX = () => {
  let choise = Math.floor(Math.random() * 4) + 1;

  document.querySelector(".x0").classList.add(`y${choise}`);
  document.querySelector(".x0").classList.remove("y0");
  setTimeout(() => {
    let blocks = document.querySelectorAll(`.y${choise}`);
    blocks.forEach((block) => {
      if (block.classList.contains("x0")) {
        block.classList.add("x1");
        block.classList.remove("x0");
      } else if (block.classList.contains("x1")) {
        block.classList.add("x2");
        block.classList.remove("x1");
      } else if (block.classList.contains("x2")) {
        block.classList.add("x3");
        block.classList.remove("x2");
      } else if (block.classList.contains("x3")) {
        block.classList.add("x4");
        block.classList.remove("x3");
      }
      if (block.classList.contains("x4")) {
        setTimeout(() => {
          block.classList.add("x0", "y0");
          block.classList.remove("x4", "y1", "y2", "y3", "y4");
        }, 600);
      }
    });
  }, 600);
};

const callXx = () => {
  let choise = Math.floor(Math.random() * 4) + 1;

  document.querySelector(".x0").classList.add(`y${choise}`, "x4");
  document.querySelector(".x0").classList.remove("y0", "x0");
  setTimeout(() => {
    let blocks = document.querySelectorAll(`.y${choise}`);
    blocks.forEach((block) => {
      if (block.classList.contains("x4")) {
        block.classList.add("x3");
        block.classList.remove("x4");
      } else if (block.classList.contains("x3")) {
        block.classList.add("x2");
        block.classList.remove("x3");
      } else if (block.classList.contains("x2")) {
        block.classList.add("x1");
        block.classList.remove("x2");
      } else if (block.classList.contains("x1")) {
        block.classList.add("x0");
        block.classList.remove("x1");
      }
      if (block.classList.contains("x0")) {
        setTimeout(() => {
          block.classList.add("y0");
          block.classList.remove("y1", "y2", "y3", "y4");
        }, 600);
      }
    });
  }, 600);
};

const callY = () => {
  let choise = Math.floor(Math.random() * 3) + 1;

  document.querySelector(".x0").classList.add(`x${choise}`);
  document.querySelector(".x0").classList.remove("x0");
  setTimeout(() => {
    let blocks = document.querySelectorAll(`.x${choise}`);
    blocks.forEach((block) => {
      if (block.classList.contains("y0")) {
        block.classList.add("y1");
        block.classList.remove("y0");
      } else if (block.classList.contains("y1")) {
        block.classList.add("y2");
        block.classList.remove("y1");
      } else if (block.classList.contains("y2")) {
        block.classList.add("y3");
        block.classList.remove("y2");
      } else if (block.classList.contains("y3")) {
        block.classList.add("y4");
        block.classList.remove("y3");
      } else if (block.classList.contains("y4")) {
        block.classList.add("y5");
        block.classList.remove("y4");
      }
      if (block.classList.contains("y5")) {
        setTimeout(() => {
          block.classList.add("x0", "y0");
          block.classList.remove("y5", "x1", "x2", "x3");
        }, 600);
      }
    });
  }, 600);
};

const callYy = () => {
  let choise = Math.floor(Math.random() * 3) + 1;

  document.querySelector(".x0").classList.add(`x${choise}`, "y5");
  document.querySelector(".x0").classList.remove("x0", "y0");
  setTimeout(() => {
    let blocks = document.querySelectorAll(`.x${choise}`);
    blocks.forEach((block) => {
      if (block.classList.contains("y5")) {
        block.classList.add("y4");
        block.classList.remove("y5");
      } else if (block.classList.contains("y4")) {
        block.classList.add("y3");
        block.classList.remove("y4");
      } else if (block.classList.contains("y3")) {
        block.classList.add("y2");
        block.classList.remove("y3");
      } else if (block.classList.contains("y2")) {
        block.classList.add("y1");
        block.classList.remove("y2");
      } else if (block.classList.contains("y1")) {
        block.classList.add("y0");
        block.classList.remove("y1");
      }
      if (block.classList.contains("y0")) {
        setTimeout(() => {
          block.classList.add("x0");
          block.classList.remove("x1", "x2", "x3");
        }, 600);
      }
    });
  }, 600);
};

setInterval(call, 2600);

homeBtn.addEventListener("click", () => {
  const activePage = document.querySelector(".active-page");
  const activeBtn = document.querySelector(".active");
  activePage.classList.remove("active-page");
  activeBtn.classList.remove("active");
  musicContainer.style = "";
  setTimeout(() => {
    homePage.classList.add("active-page");
    homeBtn.classList.add("active");
  }, 400);
});

document.querySelector(".logo").addEventListener("click", () => {
  const activePage = document.querySelector(".active-page");
  const activeBtn = document.querySelector(".active");
  activePage.classList.remove("active-page");
  activeBtn.classList.remove("active");
  musicContainer.style = "";
  setTimeout(() => {
    homePage.classList.add("active-page");
    homeBtn.classList.add("active");
  }, 400);
});

aboutBtn.addEventListener("click", () => {
  const activePage = document.querySelector(".active-page");
  const activeBtn = document.querySelector(".active");
  activePage.classList.remove("active-page");
  activeBtn.classList.remove("active");
  musicContainer.style = "";
  setTimeout(() => {
    aboutPage.classList.add("active-page");
    aboutBtn.classList.add("active");
  }, 400);
});

skillsBtn.addEventListener("click", () => {
  const activePage = document.querySelector(".active-page");
  const activeBtn = document.querySelector(".active");
  activePage.classList.remove("active-page");
  activeBtn.classList.remove("active");
  musicContainer.style = "opacity: 0";
  setTimeout(() => {
    skillsPage.classList.add("active-page");
    skillsBtn.classList.add("active");
  }, 800);
});

projectBtn.addEventListener("click", () => {
  const activePage = document.querySelector(".active-page");
  const activeBtn = document.querySelector(".active");
  activePage.classList.remove("active-page");
  activeBtn.classList.remove("active");
  resumeTag.style.display = "none";
  muteTag.style.display = "none";
  musicContainer.style = "opacity: 0";
  setTimeout(() => {
    projectPage.classList.add("active-page");
    projectBtn.classList.add("active");
  }, 800);
});

document.querySelector(".pro-link").addEventListener("click", () => {
  const activePage = document.querySelector(".active-page");
  const activeBtn = document.querySelector(".active");
  activePage.classList.remove("active-page");
  activeBtn.classList.remove("active");
  resumeTag.style.display = "none";
  muteTag.style.display = "none";
  musicContainer.style = "opacity: 0";
  setTimeout(() => {
    projectPage.classList.add("active-page");
    projectBtn.classList.add("active");
  }, 800);
});

contactBtn.addEventListener("click", () => {
  const activePage = document.querySelector(".active-page");
  const activeBtn = document.querySelector(".active");
  activePage.classList.remove("active-page");
  activeBtn.classList.remove("active");
  resumeTag.style.display = "none";
  muteTag.style.display = "none";
  musicContainer.style = "opacity: 0";
  setTimeout(() => {
    contactPage.classList.add("active-page");
    contactBtn.classList.add("active");
  }, 800);
});

document.querySelector(".contact-button").addEventListener("click", () => {
  const activePage = document.querySelector(".active-page");
  const activeBtn = document.querySelector(".active");
  activePage.classList.remove("active-page");
  activeBtn.classList.remove("active");
  resumeTag.style.display = "none";
  muteTag.style.display = "none";
  musicContainer.style = "opacity: 0";
  setTimeout(() => {
    contactPage.classList.add("active-page");
    contactBtn.classList.add("active");
  }, 800);
});

window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("my-form");
  const status = document.getElementById("form-status");
  const inputText = document.querySelector(".input-text");
  const inputEmail = document.querySelector(".input-email");
  const inputSubmit = document.querySelector(".button");
  const inputMessage = document.querySelector(".message");

  function success() {
    form.reset();
    status.innerHTML = "Thanks for your message! I will reply ASAP!";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }

  inputSubmit.addEventListener("click", () => {
    inputText.style = "";
    inputEmail.style = "";
    inputMessage.style = "";
    if (!inputText.checkValidity()) {
      inputText.style.borderBottom = "2px solid red";
    }
    if (!inputEmail.checkValidity()) {
      inputEmail.style.borderBottom = "2px solid red";
    }
    if (!inputMessage.checkValidity()) {
      inputMessage.style.borderBottom = "2px solid red";
    }
  });

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

function ajax(method, url, data, success, error) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
