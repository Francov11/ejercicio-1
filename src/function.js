const user = [{
    name: 'admin',
    admin: true
}];

const oneUser = {
    name: "Franco",
    lastname: "Velazquez",
    email: "franco@nada.com"
}

class product {
    constructor(tacos, pizza, lasagna){
        this.tacos = tacos;
        this.pizza = pizza;
        this.lasagna = lasagna;
    };
};


user.push(oneUser);

console.log(user);

module.exports = {user, product};