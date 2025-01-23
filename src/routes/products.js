import Product from "../components/product";
import products_data from "../data/products";



export default function ProductsPage() {
    return (
         <div className="Products_page">
            {products_data.map((product)=>
            (
                <Product
                 title= {product.title}
                 price= {product.price}
                 descrption= {product.descrption}
                 image= {product.image}
                 />
            ))}

         </div>
    )
}
    