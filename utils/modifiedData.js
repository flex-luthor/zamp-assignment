import data from "../myntra_fashion_products_free_dataset.json";

const { products, categories, colors, brands, discount, gender } = data;
let minPrice = 1000;
let maxPrice = 0;

const generatePriceRange = (min, max) => {
  const noOfPriceRange = 4;
  const rangeGap = Math.round((max - min) / noOfPriceRange);
  const priceRange = [];
  for (let index = 0; index < noOfPriceRange; index++) {
    const minPrice = min + index * rangeGap;
    const maxPrice = minPrice + rangeGap - 1;
    priceRange.push(`Rs.${minPrice} - Rs.${maxPrice}`);
  }
  return priceRange;
};

const modifiedProducts = products.map((product) => {
  const ratingsAverage = Math.round((Math.random() * 2 + 3) * 10) / 10;
  const ratingsCount = Math.floor(Math.random() * 9001) + 1;
  const discount = Math.floor(Math.random() * 10) * 5;

  const images = product.images.split("~").map((img) => img.trim());
  const category = categories[Math.floor(Math.random() * categories.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];

  if (minPrice > product.price) minPrice = Number(product.price);
  if (maxPrice < product.price) maxPrice = Number(product.price);

  const modifiedProduct = {
    name: product.name,
    brand: product.brand,
    price: product.price,
    gender: product.gender,
    images,
    discount,
    ratings: {
      average: ratingsAverage,
      count: ratingsCount,
    },
    category,
    color,
  };
  return modifiedProduct;
});

const priceRange = generatePriceRange(minPrice, maxPrice);

export {
  modifiedProducts,
  categories,
  colors,
  brands,
  priceRange,
  discount,
  gender,
};
