export default function ProductCategoryRow(props) {
    return (
        <tr>
            <th className="p-2 border-b border-b-gray-300" colSpan={2}>{props.category}</th>
        </tr>
    );
}