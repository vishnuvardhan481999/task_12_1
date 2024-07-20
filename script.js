
const menu = [
    { name: 'Latte', price: '$4.99', image: 'https://via.placeholder.com/200' },
    { name: 'Cappuccino', price: '$3.99', image: 'https://via.placeholder.com/200' },
    { name: 'Espresso', price: '$2.99', image: 'https://via.placeholder.com/200' },
    { name: 'Mocha', price: '$5.99', image: 'https://via.placeholder.com/200' },
    { name: 'Americano', price: '$3.49', image: 'https://via.placeholder.com/200' }
  ];
    
    const coffeeMenu = document.getElementById('coffee-menu');
    menu.forEach(item =>{
  const card = document.createElement `div`;
  card.innerHTML = `
  <img src="${item.image}" alt="${item.name}">
  <h3>${item.name}</h3>
  <p>${item.price}</p>
  `
  coffeeMenu.appendChild(card)
  
    })
  
  