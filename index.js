
function slowDown(velocity, printer){
    let deceleration = 20

    while(velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    }

    alert("Nave prada. As comportas podem ser abertas.")
}

let spaceshipVelocity = 150

slowDown(spaceshipVelocity, function(velocity){
    console.log("Velocidade atual: " + velocity)
})

