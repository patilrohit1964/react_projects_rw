import { Link } from "react-router-dom";

export default function ProductCard({
    brand,
    category,
    price,
    id
}) {
    return (
        <tr data-testid="item">
            <td>{id}</td>
            <td>
                {/* //     add Link here and keep the data-testid="brand" on Link tag       */}
                <Link to={`/singleproduct/${id}`} style={{ color: "#4cae4f", textDecoration: "none" }}>{brand}</Link>
            </td>
            <td data-testid="category">
                {category}
            </td>
            <td data-testid="price">
                {price}
            </td>
        </tr>
    )
}
