export default function discountedPrice(price, discountPercentage) {
    if (!discountPercentage) return price;
    const discountedPrice = (price * (100 - discountPercentage)) / 100;
    return discountedPrice.toFixed(2);
}
