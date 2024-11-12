type Props = {
    label: string
}
export const Button = ({ label }:Props) => {
    return (
      <button className="px-6 py-3 bg-green-700 text-white rounded">{label}</button>  
    )
}