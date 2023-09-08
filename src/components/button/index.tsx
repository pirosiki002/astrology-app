// components/Button.tsx

import Link from "next/link";
import classes from "src/components/button/button.module.css";

interface ButtonProps {
  label: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, href, variant = 'primary' }) => {
  if (href) {
    return (
      <Link href={href}>
        <a className={`${classes.button} ${classes[variant]}`}>{label}</a>
      </Link>
    );
  }

  return (
    <button className={`${classes.button} ${classes[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
