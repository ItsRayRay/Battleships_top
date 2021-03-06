import player from "./player.js";


export default function Selectplacement(map) {

    const body = document.querySelector("body");
    const choosePlacementContainer = document.createElement("div");
    choosePlacementContainer.classList.add("nes-container", "is-rounded", "is-dark");
    choosePlacementContainer.id = "choosePlacement";
    const choosePlacementInner = document.createElement("div");
    choosePlacementInner.classList.add("nes-inner");
    const choosePlacementTitle = document.createElement("p")
    choosePlacementTitle.id= "dropshiptext";
    choosePlacementTitle.innerHTML = "Drop your Ships! ";
    const choosePlacementInput = document.createElement("div");
    choosePlacementInput.classList.add("nes-input");
    const rotateButton = document.createElement("a");
    const resetButton = document.createElement("a");
    resetButton.innerHTML = "Reset";
    resetButton.classList.add("nes-btn", "is-error");
    rotateButton.innerHTML = "horizontal";
    rotateButton.classList.add("nes-btn", "is-primary");
    rotateButton.id = "rotateButton";
    rotateButton.href = "horizontal";


    const startButton = document.createElement("a");
    startButton.classList.add("nes-btn");
    startButton.id = "startButton2";
    startButton.href = "#";
    startButton.innerHTML = "Start Game";
    choosePlacementInput.appendChild(startButton);





    const seaMapContainer = document.createElement("div");
    seaMapContainer.classList.add("nes-container", "is-rounded", "is-dark");
    seaMapContainer.id = "seaMapContainer";


    const boatSelector = document.createElement("div");
    boatSelector.classList.add("nes-container", "is-rounded", "is-dark");
    boatSelector.id = "boatSelector";


    body.appendChild(choosePlacementContainer);
    choosePlacementContainer.appendChild(choosePlacementInner);
    choosePlacementInner.appendChild(choosePlacementTitle);
    choosePlacementInner.appendChild(choosePlacementInput);
    choosePlacementInput.appendChild(rotateButton);
    choosePlacementInput.appendChild(resetButton);
    choosePlacementContainer.appendChild(boatSelector);



    const wrapperCarrier = document.createElement("div");
    wrapperCarrier.classList.add("wrapper");
    wrapperCarrier.id = "carrier";
    const wrapperBattleship = document.createElement("div");
    
    wrapperBattleship.classList.add("wrapper");
    wrapperBattleship.id = "battleship";
    const wrapperCruiser = document.createElement("div");
    wrapperCruiser.classList.add("wrapper");
    wrapperCruiser.id = "cruiser";
    const wrapperSubmarine = document.createElement("div");
    wrapperSubmarine.classList.add("wrapper");
    wrapperSubmarine.id = "submarine";
    const wrapperDestroyer = document.createElement("div");
    wrapperDestroyer.classList.add("wrapper");


    const carrier = document.createElement("div");
    const battleship = document.createElement("div");
    const cruiser = document.createElement("div");
    const submarine = document.createElement("div");
    const destroyer = document.createElement("div");

    const carrierBlocks = document.createElement("div");
    const battleshipBlocks = document.createElement("div");
    const cruiserBlocks = document.createElement("div");
    const submarineBlocks = document.createElement("div");
    const destroyerBlocks = document.createElement("div");

    carrierBlocks.classList.add("blocks");
    battleshipBlocks.classList.add("blocks");
    cruiserBlocks.classList.add("blocks");
    submarineBlocks.classList.add("blocks");
    destroyerBlocks.classList.add("blocks");

    carrierBlocks.innerHTML = `<span>???</span><span>???</span><span>???</span><span>???</span><span>???</span>`;
    battleshipBlocks.innerHTML= `<span>???</span><span>???</span><span>???</span><span>???</span>`;
    cruiserBlocks.innerHTML = `<span>???</span><span>???</span><span>???</span>`;
    submarineBlocks.innerHTML = `<span>???</span><span>???</span><span>???</span>`;
    destroyerBlocks.innerHTML = `<span>???</span><span>???</span>`;




    carrierBlocks.style.display = "flex";
    battleshipBlocks.style.display = "flex";
    cruiserBlocks.style.display = "flex";
    submarineBlocks.style.display = "flex";
    destroyerBlocks.style.display = "flex";

    

    carrierBlocks.style.flexDirection = "row";
    battleshipBlocks.style.flexDirection = "row";
    cruiserBlocks.style.flexDirection = "row";
    submarineBlocks.style.flexDirection = "row";
    destroyerBlocks.style.flexDirection = "row";


    carrier.innerText = "Carrier ";
    battleship.innerText = "Battleship";
    cruiser.innerText = "Cruiser";
    submarine.innerText = "Submarine";
    destroyer.innerText = "Destroyer";

    carrier.classList.add("boat");
    battleship.classList.add("boat");
    cruiser.classList.add("boat");
    submarine.classList.add("boat");
    destroyer.classList.add("boat");

    boatSelector.appendChild(wrapperCarrier);
    boatSelector.appendChild(wrapperBattleship);
    boatSelector.appendChild(wrapperCruiser);
    boatSelector.appendChild(wrapperSubmarine);
    boatSelector.appendChild(wrapperDestroyer);
    
    wrapperCarrier.appendChild(carrier);
    wrapperBattleship.appendChild(battleship);
    wrapperCruiser.appendChild(cruiser);
    wrapperSubmarine.appendChild(submarine);
    wrapperDestroyer.appendChild(destroyer);

    wrapperCarrier.appendChild(carrierBlocks);
    wrapperBattleship.appendChild(battleshipBlocks);
    wrapperCruiser.appendChild(cruiserBlocks);
    wrapperSubmarine.appendChild(submarineBlocks);
    wrapperDestroyer.appendChild(destroyerBlocks);

    rotateButton.addEventListener("click", () => {

        if (carrierBlocks.style.flexDirection === "row" && battleshipBlocks.style.flexDirection === "row" && cruiserBlocks.style.flexDirection === "row" && submarineBlocks.style.flexDirection === "row" && destroyerBlocks.style.flexDirection === "row") {
        
            carrierBlocks.style.flexDirection = "column";
            battleshipBlocks.style.flexDirection = "column";
            cruiserBlocks.style.flexDirection = "column";
            submarineBlocks.style.flexDirection = "column";
            destroyerBlocks.style.flexDirection = "column";
        }
        else {
            carrierBlocks.style.flexDirection = "row";
            battleshipBlocks.style.flexDirection = "row";
            cruiserBlocks.style.flexDirection = "row";
            submarineBlocks.style.flexDirection = "row";
            destroyerBlocks.style.flexDirection = "row";
        }
        

    })

    resetButton.addEventListener("click", () => {
        location.reload();
    })


}

