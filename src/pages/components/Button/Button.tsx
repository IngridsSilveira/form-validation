interface ButtonProps {
    onClick:(e: React.MouseEvent<HTMLButtonElement>) => any;
}

export const Button:React.FC<ButtonProps> = ({onClick}) => {
    return (
        <button
          className="bg-blue-700 hover:bg-blue-800 mt-3 py-1 px-2 rounded text-white text-lg"
          onClick={onClick}
        >
          Send
        </button>
    )
}