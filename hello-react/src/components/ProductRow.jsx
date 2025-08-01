export default function ProductRow(props) {
    return (
        <tr>
            <td className={`p-2 border-b border-b-gray-300 ${props.stocked ? '': 'text-red-500'}`}>{props.name}</td>
            <td className="p-2 border-b border-b-gray-300">{props.price}</td>
        </tr>
    )
}