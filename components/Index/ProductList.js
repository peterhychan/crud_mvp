import { Card } from "semantic-ui-react";

function ProductList({ products }) {
  const mapProductsToItems = products => {
    return products.map(el => ({
      header: el.name,
      image: el.mediaUrl,
      meta: `$ ${el.price}`,
      color: "teal",
      fluid: true,
      childKey: el._id,
      href: `/product?_id=${el._id}`
    }));
  };

  return (
    <Card.Group
      stackable
      itemsPerRow="3"
      centered
      items={mapProductsToItems(products)}
    />
  );
}

export default ProductList;
