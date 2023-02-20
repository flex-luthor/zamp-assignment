import {
  gender,
  brands,
  colors,
  categories,
  priceRange,
  discount,
} from "../../../utils/modifiedData";

const result = { gender, brands, colors, categories, priceRange, discount };

export default function handler(req, res) {
  res.status(200).json(result);
}
