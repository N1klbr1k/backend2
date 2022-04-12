const houses = require('./db.json')

module.exports = {
    getHouses: (req, res) => res.status(200).send(houses),
    deleteHouse: (req, res) => {
       let index = houses.findIndex(elem => elem.id === +req.params.id)
       houses.splice(index, 1);
       res.status(200).send(houses); 
    } ,
    createHouse: (req, res) => {
        let {address, price, imageURL } = req.body;
        let newHouse = {
            id: houses.length +1,
            address, 
            price,
            imageURL,
        }
        houses.push(newHouse);
        res.status(200).send(houses)

    },
    updateHouse: (req, res) => {
        const {id} = req.params;
        const {type} =req.body;
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        switch(type){
            case 'plus':
                houses[index].price += 10000;
                res.status(200).send(houses);
                break;
            case 'minus':
                houses[index].price -= 10000;
                res.status(200).send(houses);
                break;
            default:
                res.status(400).send('something went wrong')
        }

    } ,
}