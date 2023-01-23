import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
const plansza = kaboom(
    {
        "debug":"true",
        "fullscreen":"true"
}
);

loadSprite("tlo","tlo.png")

loadSprite("renifer","renifer.png")

loadSound("muzyka","mizerna_cicha.mp3")



add([
    sprite("tlo"),
    pos(0,0)
])

const renifer = add([
    sprite("renifer"),
    pos(180,75)
])


onKeyPress("space", ()=>{
    play("muzyka");
})




 onUpdate(()=>{
        if (renifer.pos.y < 250) renifer.pos.y = renifer.pos.y+1
        if (renifer.pos.x < 270) renifer.pos.x = renifer.pos.x+1

 })

