import "./Products.css";
import antiCaidaImg from "../../assets/products/shampoo-anticaida.webp";
import antiCaspaImg from "../../assets/products/shampoo-anticaspa.webp";

function Products () {

    const products = [
        {
            name: "Shampoo Anticaída",
            description: 
            "Shampoo de uso frecuente orientado al cuidado del cuero cabelludo y al fortalecimiento capilar.",
            benefit: "Ideal para acompañar rutinas de fortalecimiento capilar.",
            link: "https://www.mercadolibre.com.ar/shampoo-anticaida-dermaraiz-250ml-liquido-hipoalergenico/up/MLAU3755171517?pdp_filters=item_id:MLA1660262753#is_advertising=true&searchVariation=MLAU3755171517&backend_model=search-backend&position=1&search_layout=grid&type=pad&tracking_id=9b2a16bd-0e48-4c9a-92fd-dfffa4584737&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=MTMyMWFkNjUtNGQ5OC00YTRjLTk3MWItYjJjMTJmZTYxMDU0",
            image: antiCaidaImg,
            badge: "Recomendado"
        },
        {
            name: "Shampoo Anticaspa",
            description: 
            "Shampoo formulado para acompañar el tratamiento del cuero cabelludo y mejorar su higiene y equilibrio.",
            benefit: "Pensado para mejorar el equilibrio del cuero cabelludo.",
            link: "https://www.mercadolibre.com.ar/shampoo-anticaspa-dermaraiz-250ml-liquido-magistral/up/MLAU3755227019?pdp_filters=item_id:MLA2814234880#is_advertising=true&searchVariation=MLAU3755227019&backend_model=search-backend&position=2&search_layout=grid&type=pad&tracking_id=5e8ebf77-a447-4a98-ab4c-026b480ae0bf&ad_domain=VQCATCORE_LST&ad_position=2&ad_click_id=YjE0NjhiMWMtMDU4YS00ODNhLWE1YmUtZjY2ODQyYzEzOTg5",
            image: antiCaspaImg,
            badge: "Cuidado diario"
        },
    ]
    return (
        <section className="products" id="productos">

            <div className="products-header">
                <p>Productos</p>

                <h2>
                    Completá tu tratamiento capilar
                </h2>

                <p className="section-description">
                    Seleccionamos productos pensados para acompañar el cuidado del cuero
                    cabelludo y fortalecer la rutina capilar en casa.
                </p>
            </div>

            <div className="products-grid">
                {products.map((product, index) => (
                    <article className="product-card" key={index}>

                        <span className="product-badge">{product.badge}</span>

                        
                        <div className="product-image-placeholder">
                            <img 
                                src={product.image} 
                                alt={product.name} 
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
                            Ver en MercadoLibre
                        </a>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Products