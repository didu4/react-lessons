// мок данные

const serverProducts = [
  {
    id: 101,
    title: "gaming mouse logitech",
    price: 100,
    category: "accessories",
    isStock: true,
  },
  {
    id: 102,
    title: "mechanical keyboard razer",
    price: 180,
    category: "accessories",
    isStock: false,
  },
  {
    id: 103,
    title: "4k gaming monitor ASUS",
    price: 500,
    category: "monitors",
    isStock: true,
  },
  {
    id: 104,
    title: "nvidia rtx 4070 gpu",
    price: 700,
    category: "hardware",
    isStock: true,
  },
];

const formattedProducts = serverProducts.map((serverProduct) => {
  const serverProductID = serverProduct.id,
    serverProductTitle = serverProduct.title,
    serverProductPrice = serverProduct.price,
    serverProductStatus = serverProduct.isStock;
  return {
    id: serverProductID,
    name: serverProductTitle,
    price: "$" + serverProductPrice,
    status: serverProductStatus ? "В наличии" : "Под заказ",
  };
});

const rootEl = document.getElementById("root");

const headerEl = document.createElement("h1");
headerEl.append("Витрина");
rootEl.append(headerEl);

const productsEl = document.createElement("ul");

formattedProducts.forEach((formattedProduct) => {
  const productEl = document.createElement("li");
  const productElCard = document.createElement("div");
  productElCard.id = "prod" + "-" + `${formattedProduct.id}`;
  const productElCardName = document.createElement("h3");
  const productElCardPrice = document.createElement("p");
  const productElcardStatus = document.createElement("span");

  productElCardName.append(formattedProduct.name);
  productElCardPrice.append("Цена: " + `${formattedProduct.price}`);
  productElcardStatus.append("Статус: " + `${formattedProduct.status}`);

  productElCard.append(productElCardName);
  productElCard.append(productElCardPrice);
  productElCard.append(productElcardStatus);
  productEl.append(productElCard);
  productsEl.append(productEl);
});

rootEl.append(productsEl);

console.log(serverProducts);
console.log(formattedProducts);
