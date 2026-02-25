



export const products = [
  {
    id: 1,
    name: 'Hiking Shoes',
    price: 200,
    image: 'mountain-shoes',
    description: 'A wonderful hiking shoe',
  },
  {
    id: 2,
    name: 'Ski',
    price: 400,
    image: 'ski',
    description: 'A wonderful hiking shoe',
  },
  {
    id: 3,
    name: 'Socks',
    price: 300,
    image: 'socks',
    description: 'A wonderful hiking shoe',
  },
  {
    id: 4,
    name: 'Hat',
    price: 150,
    image: 'hat',
    description: 'A nice hut',
  },
  {
    id: 5,
    name: 'Running Shoes',
    price: 30,
    image: 'run-shoes',
    description: 'great shoes',
  },
  {
    id: 6,
    name: 'Mountain Bike',
    price: 50,
    image: 'mountain-bike',
    description: 'A wonderful bike',
  },
];
export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}
