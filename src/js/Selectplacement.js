
export default function Selectplacement(map) {

    const body = document.querySelector("body");
    const choosePlacementContainer = document.createElement("div");
    choosePlacementContainer.classList.add("nes-container", "is-rounded", "is-dark");
    choosePlacementContainer.id = "choosePlacement";
    const choosePlacementInner = document.createElement("div");
    choosePlacementInner.classList.add("nes-inner");
    const choosePlacementTitle = document.createElement("p");
    choosePlacementTitle.innerHTML = "Drop your Ships";
    const choosePlacementInput = document.createElement("div");
    choosePlacementInput.classList.add("nes-input");
    const startButton = document.createElement("a");
    startButton.classList.add("nes-btn");
    startButton.href = "#";
    startButton.innerHTML = "Start Game";


    body.appendChild(choosePlacementContainer);
    choosePlacementContainer.appendChild(choosePlacementInner);
    choosePlacementInner.appendChild(choosePlacementTitle);
    choosePlacementInner.appendChild(choosePlacementInput);
    choosePlacementInput.appendChild(startButton);



}

