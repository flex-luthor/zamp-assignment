import { modifiedProducts } from "../../../utils/modifiedData";

const PAGE_LENGTH = 36;

function compareRecommended(a, b) {
  if (a.discount > b.discount) {
    return -1;
  }
  if (a.discount < b.discount) {
    return 1;
  }
  return 0;
}

function compareTrending(a, b) {
  if (a.ratings.count > b.ratings.count) {
    return -1;
  }
  if (a.ratings.count < b.ratings.count) {
    return 1;
  }
  return 0;
}

function comparePopularity(a, b) {
  if (a.ratings.average > b.ratings.average) {
    return -1;
  }
  if (a.ratings.average < b.ratings.average) {
    return 1;
  }
  return 0;
}

export default function handler(req, res) {
  const body = JSON.parse(req.body);

  let result = new Object(modifiedProducts);

  if (body.gender) {
    result = result.filter((product) => {
      return product.gender === body.gender;
    });
  }

  if (body.category) {
    if (body.category !== "all") {
      const categoryArr = body.category.split(",");
      result = result.filter((product) => {
        return categoryArr.includes(product?.category);
      });
    }
  }

  if (body.brand) {
    if (body.brand !== "all") {
      const brandArr = body.brand.split(",");
      result = result.filter((product) => {
        return brandArr.includes(product?.brand);
      });
    }
  }

  if (body.color) {
    if (body.color !== "all") {
      const colorArr = body.color.split(",");
      result = result.filter((product) => {
        return colorArr.includes(product?.color);
      });
    }
  }

  if (body.priceRange) {
    if (body.priceRange !== "all") {
      const priceRangeArr = body.priceRange.split(",");
      let globalMin = Infinity;
      let globalMax = 0;
      priceRangeArr.forEach((priceRange) => {
        const price = priceRange.split("-");
        const min = Number(price[0].trim().slice(3));
        if (min < globalMin) globalMin = min;

        const max = Number(price[1].trim().slice(3));
        if (max > globalMax) globalMax = max;
      });

      result = result.filter((product) => {
        return product.price >= globalMin && product.price <= globalMax;
      });
    }
  }

  if (body.discount) {
    if (body.discount !== "all") {
      result = result.filter((product) => {
        return product.discount >= body.discount;
      });
    }
  }

  if (body.sortBy) {
    switch (body.sortBy) {
      case "recommended":
        result.sort(compareRecommended);
        break;
      case "trending":
        result.sort(compareTrending);
        break;
      case "popularity":
        result.sort(comparePopularity);
        break;
      default:
        break;
    }
  } else result.sort(compareRecommended);

  const count = result.length;

  if (count > PAGE_LENGTH) {
    if (body.page) {
      result = result.slice(
        (Number(body.page) - 1) * PAGE_LENGTH,
        Number(body.page) * PAGE_LENGTH
      );
    } else {
      result = result.slice(0, PAGE_LENGTH);
    }
  }

  res.status(200).json({ products: result, count });
}
