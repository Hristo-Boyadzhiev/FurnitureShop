export default function PurchasesItem({
    purchase,
    furniture
}) {

    return (
        <tr>
            <td>{furniture.model}</td>
            <td>{furniture.price}</td>
            <td>{purchase.userEmail}</td>
        </tr>
    )
}