import { PrismaClient, ProductSizes, IngredientType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting database seed...");

  // Clear existing data
  await prisma.orderProduct.deleteMany({});
  await prisma.order.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.extra.deleteMany({});
  await prisma.size.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});

  console.log("Cleared existing data");

  // Create categories
  const pizzaCategory = await prisma.category.create({
    data: {
      name: "Pizza",
      order: 1,
    },
  });

  const burgerCategory = await prisma.category.create({
    data: {
      name: "Burgers",
      order: 2,
    },
  });

  const drinkCategory = await prisma.category.create({
    data: {
      name: "Drinks",
      order: 3,
    },
  });

  console.log("Created categories");

  // Create Pizza products
  const margheritaPizza = await prisma.product.create({
    data: {
      name: "Margherita Pizza",
      basePrice: 12.99,
      description:
        "Classic pizza with tomato sauce, mozzarella, and fresh basil",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvrMUFDesl_4h6EMgeRbOBZgnt3gI79nFaqBKNTWjJRnq2lHkAC0YresglegcYaxQjYY&usqp=CAU",
      order: 1,
      categoryId: pizzaCategory.id,
      size: {
        create: [
          { name: ProductSizes.SMALL, price: 0 },
          { name: ProductSizes.MEDIUM, price: 3 },
          { name: ProductSizes.LARGE, price: 6 },
        ],
      },
      extras: {
        create: [
          { name: IngredientType.tomatoes, price: 1.5 },
          { name: IngredientType.olive, price: 2 },
          { name: IngredientType.vegetables, price: 2.5 },
        ],
      },
    },
  });

  const pepperoniPizza = await prisma.product.create({
    data: {
      name: "Pepperoni Pizza",
      basePrice: 14.99,
      description: "Delicious pizza topped with pepperoni and melted cheese",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvrMUFDesl_4h6EMgeRbOBZgnt3gI79nFaqBKNTWjJRnq2lHkAC0YresglegcYaxQjYY&usqp=CAU",
      order: 2,
      categoryId: pizzaCategory.id,
      size: {
        create: [
          { name: ProductSizes.SMALL, price: 0 },
          { name: ProductSizes.MEDIUM, price: 3 },
          { name: ProductSizes.LARGE, price: 6 },
        ],
      },
      extras: {
        create: [
          { name: IngredientType.tomatoes, price: 1.5 },
          { name: IngredientType.olive, price: 2 },
          { name: IngredientType.vegetables, price: 2.5 },
        ],
      },
    },
  });

  const vegetarianPizza = await prisma.product.create({
    data: {
      name: "Vegetarian Pizza",
      basePrice: 13.99,
      description: "Fresh vegetables with mozzarella on a crispy crust",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvrMUFDesl_4h6EMgeRbOBZgnt3gI79nFaqBKNTWjJRnq2lHkAC0YresglegcYaxQjYY&usqp=CAU",
      order: 3,
      categoryId: pizzaCategory.id,
      size: {
        create: [
          { name: ProductSizes.SMALL, price: 0 },
          { name: ProductSizes.MEDIUM, price: 3 },
          { name: ProductSizes.LARGE, price: 6 },
        ],
      },
      extras: {
        create: [
          { name: IngredientType.tomatoes, price: 1.5 },
          { name: IngredientType.olive, price: 2 },
          { name: IngredientType.vegetables, price: 2.5 },
        ],
      },
    },
  });

  console.log("Created pizza products");

  // Create Burger products
  const classicBurger = await prisma.product.create({
    data: {
      name: "Classic Burger",
      basePrice: 9.99,
      description: "Juicy beef patty with lettuce, tomato, and special sauce",
      image:
        "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_960,c_limit/Smashburger-recipe-120219.jpg",
      order: 1,
      categoryId: burgerCategory.id,
      size: {
        create: [
          { name: ProductSizes.SMALL, price: 0 },
          { name: ProductSizes.MEDIUM, price: 2 },
          { name: ProductSizes.LARGE, price: 4 },
        ],
      },
      extras: {
        create: [
          { name: IngredientType.tomatoes, price: 1 },
          { name: IngredientType.vegetables, price: 1.5 },
        ],
      },
    },
  });

  const cheeseBurger = await prisma.product.create({
    data: {
      name: "Cheese Burger",
      basePrice: 10.99,
      description: "Double cheese burger with melted cheddar",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvrMUFDesl_4h6EMgeRbOBZgnt3gI79nFaqBKNTWjJRnq2lHkAC0YresglegcYaxQjYY&usqp=CAU",
      order: 2,
      categoryId: burgerCategory.id,
      size: {
        create: [
          { name: ProductSizes.SMALL, price: 0 },
          { name: ProductSizes.MEDIUM, price: 2 },
          { name: ProductSizes.LARGE, price: 4 },
        ],
      },
      extras: {
        create: [
          { name: IngredientType.tomatoes, price: 1 },
          { name: IngredientType.vegetables, price: 1.5 },
        ],
      },
    },
  });

  console.log("Created burger products");

  // Create Drink products
  const cola = await prisma.product.create({
    data: {
      name: "Cola",
      basePrice: 2.99,
      description: "Refreshing cold cola",
      image:
        "https://www.elsupplier.com/_next/image?url=https%3A%2F%2Fportal.elsupplier.com%2Fbackend%2Fpublic%2Fstorage%2Fproducts%2Fbig21499093303.png&w=640&q=50",
      order: 1,
      categoryId: drinkCategory.id,
      size: {
        create: [
          { name: ProductSizes.SMALL, price: 0 },
          { name: ProductSizes.MEDIUM, price: 1 },
          { name: ProductSizes.LARGE, price: 2 },
        ],
      },
    },
  });

  const orangeJuice = await prisma.product.create({
    data: {
      name: "Orange Juice",
      basePrice: 3.99,
      description: "Fresh squeezed orange juice",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvrMUFDesl_4h6EMgeRbOBZgnt3gI79nFaqBKNTWjJRnq2lHkAC0YresglegcYaxQjYY&usqp=CAU",
      order: 2,
      categoryId: drinkCategory.id,
      size: {
        create: [
          { name: ProductSizes.SMALL, price: 0 },
          { name: ProductSizes.MEDIUM, price: 1 },
          { name: ProductSizes.LARGE, price: 2 },
        ],
      },
    },
  });

  console.log("Created drink products");

  console.log("✅ Database seeded successfully!");
  console.log(`Created ${await prisma.category.count()} categories`);
  console.log(`Created ${await prisma.product.count()} products`);
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
