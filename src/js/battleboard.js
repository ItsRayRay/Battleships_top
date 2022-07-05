export default function renderBattleBoard() {
    const body = document.querySelector("body");
    const battleBoardContainer = document.createElement("div");
    battleBoardContainer.classList.add("nes-container", "is-rounded", "is-dark");
    battleBoardContainer.id = "battleBoardContainer";
    const battleBoardInner = document.createElement("div");
    battleBoardInner.classList.add("nes-inner");
    battleBoardInner.id = "battleBoardInner";
    const battleBoardTitle = document.createElement("p");
    battleBoardTitle.id = "battleBoardTitle";
    battleBoardTitle.innerHTML = "Battle Board";
    const battleBoardInput = document.createElement("div");
    battleBoardInput.classList.add("nes-input");


    const seaMapContainer = document.createElement("div");
    seaMapContainer.classList.add("nes-container", "is-rounded", "is-dark");
    seaMapContainer.id = "seaMapContainer";

    const seaMapContainerComputer = document.createElement("div");
    seaMapContainerComputer.classList.add("nes-container", "is-rounded", "is-dark");
    seaMapContainerComputer.id = "seaMapContainerComputer";



        
    body.appendChild(battleBoardContainer);
    battleBoardContainer.appendChild(battleBoardInner);
    battleBoardInner.appendChild(battleBoardTitle);
    battleBoardInner.appendChild(battleBoardInput);
    battleBoardInput.appendChild(seaMapContainer);
    battleBoardInput.appendChild(seaMapContainerComputer);





    }
    // }