const users = [
    {name: 'María', isPremium: false},
    {name: 'Lucía', isPremium: true},
    {name: 'Susana', isPremium: true},
    {name: 'Rocío', isPremium: false},
    {name: 'Inmaculada', isPremium: false},
];

const saludos = users.map(userObject => {
    let result = '';
    if (userObject.isPremium) {
        result = `Bienvenida ${userObject.name}. Gracias por confiar en nosotros.`;
    }
    else {
        result = `Bienvenida ${userObject.name}.`;
    }
    return result;
});

console.log(saludos);