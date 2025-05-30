import React from "react";

interface ButtonSquareProps {
  className?: string; // For additional CSS classes
  style?: React.CSSProperties; // For additional inline styles
  id?: string; // For setting an ID
  href: string; // For dynamic href value
  children?: React.ReactNode; // For dynamic content inside the button
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void; // Add onClick prop
}

const ButtonSquare: React.FC<ButtonSquareProps> = ({
  className,
  style,
  id,
  href,
  children,
  onClick,
}) => {
  return (
    <a
      className={`btn-main square bg-accent-primary ${className}`} // Merge the additional classNames
      style={{
        padding: "10px 25px",
        color: "white",
        fontWeight: 600,
        ...style,
      }} // Merge the inline styles
      href={href}
      id={id} // Assign the ID if provided
      onClick={onClick} // Attach onClick event
    >
      {children}
    </a>
  );
};

export default ButtonSquare;
