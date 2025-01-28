import React from "react";
import { useCartStore } from "@store/useCartStore";
import { CartButton } from "@atoms/CartButton/CartButton";

const products = [
  { id: "1", name: "Produit A", price: 10 },
  { id: "2", name: "Produit B", price: 20 },
  { id: "3", name: "Produit C", price: 30 },
];

export const ProductListPage: React.FC = () => {
  const { cartItems, addItem, removeItem, clearCart } = useCartStore();

  const isInCart = (id: string) => cartItems.some((item) => item.id === id);

  return (
    <div className="p-4">
      <header className="mb-4">
        <h1 className="text-xl font-bold">Liste des Produits</h1>
        <CartButton label="Vider le panier" onClick={clearCart} />
        <p className="mt-2">Articles dans le panier : {cartItems.length}</p>
      </header>
      <div className="grid grid-cols-1 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded shadow flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-gray-700">{product.price} €</p>
            </div>
            {isInCart(product.id) ? (
              <CartButton
                label="Retirer du panier"
                onClick={() => removeItem(product.id)}
              />
            ) : (
              <CartButton
                label="Ajouter au panier"
                onClick={() => addItem(product)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
