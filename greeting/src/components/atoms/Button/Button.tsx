import { IButtonProps } from "./Button.props";
import './Button.css';

export const Button: React.FC<IButtonProps> = ({ label, disabled, onClick }) => {
    return (
        <button
            className="button"
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </button>
    );
}