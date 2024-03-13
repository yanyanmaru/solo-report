
type Props = {
    buttonText: string,
    handleClick: () => void
}

export default function Button({buttonText,handleClick}: Props) {
  return (
    <button onClick={handleClick}>
        {buttonText}
    </button>
  )
}
