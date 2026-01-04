// Produce
import carrot from "../assets/images/products/carrot.png";
import chongak from "../assets/images/products/chongak.png";
import cabbage from "../assets/images/products/cabbage.png";
import redcab from "../assets/images/products/redcab.png";
import ginger from "../assets/images/products/ginger.png";
import pineapple from "../assets/images/products/pin.png";
import watermelon from "../assets/images/products/watermelon.png";

// Meat
import beefRibeye from "../assets/images/products/beef-ribeye.png";
import porkCollar from "../assets/images/products/pork-collar.png";
import porkJowl from "../assets/images/products/pork-jowl.png";
import porkBulgogi from "../assets/images/products/pork-bulgogi.png";
import beefStew from "../assets/images/products/beef-stew.png";
import wagyuFlap from "../assets/images/products/wagyu-flap.png";
import cabSliced from "../assets/images/products/cab-sliced.png";

export const products = [
  // ===== PRODUCE =====
  {
    id: 1,
    name: "Carrot",
    price: 0.3,
    unit: "each",
    category: "Produce",
    image: carrot,
  },
  {
    id: 2,
    name: "Chonggak Young Radish Bunch",
    price: 0.99,
    category: "Produce",
    image: chongak,
  },
  {
    id: 3,
    name: "Taiwanese Cabbage",
    price: 1.99,
    unit: "2 lbs",
    category: "Produce",
    image: cabbage,
  },
  {
    id: 4,
    name: "Red Cabbage",
    price: 1.99,
    unit: "1.5 lbs",
    category: "Produce",
    image: redcab,
  },
  {
    id: 5,
    name: "Ginger",
    price: 1.99,
    unit: "1 lb",
    category: "Produce",
    image: ginger,
  },
  {
    id: 6,
    name: "Pineapple",
    price: 3.99,
    unit: "each",
    category: "Produce",
    image: pineapple,
  },
  {
    id: 7,
    name: "Mini Black Watermelon",
    price: 2.99,
    unit: "each",
    category: "Produce",
    image: watermelon,
  },

  // ===== MEAT =====
  {
    id: 9,
    name: "Beef Thick Sliced Rib Eye",
    price: 11.49,
    unit: "1 lb",
    category: "Meat",
    image: beefRibeye,
  },
  {
    id: 10,
    name: "Fresh Pork Collar Butt Sliced",
    price: 6.99,
    unit: "1 lb",
    category: "Meat",
    image: porkCollar,
  },
  {
    id: 11,
    name: "Pork jowl Sliced",
    price: 12.99,
    unit: "1 lb",
    category: "Meat",
    image: porkJowl,
  },
  {
    id: 12,
    name: "Marinated Pork Bulgogi",
    price: 6.49,
    unit: "1 lb",
    category: "Meat",
    image: porkBulgogi,
  },
  {
    id: 13,
    name: "Fresh Beef Stew Meat",
    price: 5.99,
    unit: "0.5 lb",
    category: "Meat",
    image: beefStew,
  },
  {
    id: 14,
    name: "Wagyu Chunk Flap Meat Steak",
    price: 14.99,
    unit: "0.5 lb",
    category: "Meat",
    image: wagyuFlap,
  },
  {
    id: 15,
    name: "C.A.B. C/F Meat Sliced",
    price: 11.5,
    unit: "0.5 lb",
    category: "Meat",
    image: cabSliced,
  }
]