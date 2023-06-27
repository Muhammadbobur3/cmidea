import { v4 as uuidv4 } from "uuid";

import AirCondition from "../assets/images/1.png";
import Toti from "../assets/images/hero-bg.png";
import Bitovoy from "../assets/images/download.jpeg";
import Kan from "../assets/images/KAN.png";

export const categories = [
  {
    id: uuidv4(),
    title: "Промышленное Midea",
    slug: "Промышленное",
    image: AirCondition,
    isOpen: false,
    subCategory: [
      {
        title: "Модульный Чиллер Midea",
        slug: "Модульный-Чиллер",
        id: uuidv4(),
      },
      {
        title: "Фанкойлы",
        slug: "Фанкойлы",
        id: uuidv4(),
      },
      {
        title: "Чиллер Фанкойл",
        slug: "Чиллер-Фанкойл",
        id: uuidv4(),
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Кондиционер Midea",
    slug: "Кондиционер",
    image: Toti,
    isOpen: false,
    subCategory: [
      {
        title: "Канальный Кондиционер",
        slug: "Канальный-Кондиционер",
        id: uuidv4(),
      },
      {
        title: "Кассетный Кондиционер",
        slug: "Кассетный-Кондиционер",
        id: uuidv4(),
      },
      {
        title: "Колонный Кондиционер",
        slug: "Колонный-Кондиционер",
        id: uuidv4(),
      },
      {
        title: "Мульти сплит",
        slug: "Мульти-сплит",
        id: uuidv4(),
      },
      {
        title: "Настенный Кондиционер",
        slug: "Настенный-Кондиционер",
        id: uuidv4(),
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Бытовая Техника Welkin",
    slug: "Бытовая-Техника",
    image: Bitovoy,
    isOpen: false,
    subCategory: [
      {
        title: "Газовые Котлы",
        slug: "Газовые-Котлы",
        id: uuidv4(),
      },
      {
        title: "Кулер Воды",
        slug: "Кулер-Воды",
        id: uuidv4(),
      },
      {
        title: "Колонный Кондиционер",
        slug: "Колонный-Кондиционер",
        id: uuidv4(),
      },
      // {
      //   title: "ОЛХ Без номеров",
      //   slug: "ОЛХ-Без-номеров",
      //   id: uuidv4(),
      // },
      {
        title: "Осушитель Воздуха",
        slug: "Осушитель-Воздуха",
        id: uuidv4(),
      },

      {
        title: "Очиститель Воды",
        slug: "Очиститель-Воды",
        id: uuidv4(),
      },
      {
        title: "Очиститель Воздуха",
        slug: "Очиститель-Воздуха",
        id: uuidv4(),
      },
      {
        title: "Рекуператор",
        slug: "Рекуператор",
        id: uuidv4(),
      },
      {
        title: "Стабилизаторы",
        slug: "Стабилизаторы",
        id: uuidv4(),
      },
      {
        title: "Тепловая Завеса",
        slug: "Тепловая-Завеса",
        id: uuidv4(),
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Кондиционер Welkin",
    slug: "Кондиционер-Welkin",
    image: Kan,
    subCategory: [],
    isOpen: false,
  },
  // Add more categories as needed
];
