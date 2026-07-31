import "./Products.css";
import { products } from "../../data/products";

function Products() {
    return (
        <section className="products" id="productos">
            <div className="section-header">
                <p className="section-tag">Productos</p>

                <h2>Completá tu tratamiento capilar</h2>

                <p className="section-description">
                    Seleccionamos productos pensados para acompañar el cuidado del cuero
                    cabelludo y fortalecer la rutina capilar en casa.
                </p>
            </div>

            <div className="products-grid">
                {products.map((product) => (
                    <article className="product-card" key={product.name}>
                        <span className="product-badge">{product.badge}</span>

                        <div className="product-image-placeholder">
                            <img
                                src={product.image}
                                alt={product.imageAlt}
                                className="product-image"
                                loading="lazy"
                            />
                        </div>

                        <div className="product-content">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <span className="product-benefit">{product.benefit}</span>
                        </div>

                        <a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="product-link"
                        >
                            Comprar en MercadoLibre
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Products;
