import lavaLamp from '../assets/lavalamp.jpg';
import desk from '../assets/desk.jpg';
import gamingChair from '../assets/gamingchair.jpg';
import sofa from '../assets/sofa.jpg';
import coolLavaLamp from '../assets/coollavalamp.jpg';

/*
  Data object for homepage. Inputs the newest item and outputs the oldest item.
  So that the items in homepage are ordered from the newest (top) to the oldest (bottom).
*/

const items = [
  {
    id: 1,
    name: "Lava lamp",
    price: 50,
    description: "This is a lava lamp. A cool lava lamp. You should buy it. Please. Buy it. You won't regret it. Yes? Of course.",
    category: 'Lamp',
    image: lavaLamp,
    contact: 'sc77@calvin.edu',
  },
  {
    id: 2,
    name: "Desk",
    price: 10,
    description: "This is a desk.",
    category: 'Desk',
    image: desk,
    contact: 'heonjaek@gmail.com',
  },
  {
    id: 3,
    name: "Gaming chair",
    price: 40,
    description: "This is a gaming chair.",
    category: "Chair",
    image: gamingChair,
    contact: 'ads38@calvin.edu',
  },
  {
    id: 4,
    name: "sofa",
    price: 10,
    description: "This is a sofa.",
    category: "Sofa",
    image: sofa,
    contact: 'oko2@calvin.edu',
  },
  {
    id: 5,
    name: "cooler lava lamp!!!",
    price: 1000,
    description: "This is a lava lamp.",
    category: "Lamp",
    image: coolLavaLamp,
    contact: 'kvlinden@calvin.edu',
  },
];

export default items;