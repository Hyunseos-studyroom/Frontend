type Age = number
type Player = {
    name: string,
    age?: Age,
}

const playerMaker = (name: string) : Player => ({name})
const nico = playerMaker("Nico")
nico.age = 12
