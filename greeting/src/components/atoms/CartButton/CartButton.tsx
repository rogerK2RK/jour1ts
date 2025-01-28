import { ICartButtonProps } from "./CartButton.props";


export const CartButton: React.FC<ICartButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
    >
      {label}
    </button>
  );
};
