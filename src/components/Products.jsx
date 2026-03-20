import antiCaidaImg from "../assets/products/shampoo-anticaida.webp"
import antiCaspaImg from "../assets/products/shampoo-anticaspa.webp"

function Products () {

    const products = [
        {
            name: "Shampoo Anticaída",
            description: "Shampoo de uso frecuente orientado al cuidado del cuero cabelludo y al fortalecimiento capilar.",
            link: "https://www.mercadolibre.com.ar/shampoo-anticaida-dermaraiz-250ml-liquido-hipoalergenico/up/MLAU3755171517?pdp_filters=item_id:MLA1660262753#is_advertising=true&searchVariation=MLAU3755171517&backend_model=search-backend&position=1&search_layout=grid&type=pad&tracking_id=9b2a16bd-0e48-4c9a-92fd-dfffa4584737&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=MTMyMWFkNjUtNGQ5OC00YTRjLTk3MWItYjJjMTJmZTYxMDU0",
            image: antiCaidaImg
        },
        {
            name: "Shampoo Anticaspa",
            description: "Shampoo formulado para acompañar el tratamiento del cuero cabelludo y mejorar su higiene y equilibrio.",
            link: "https://www.mercadolibre.com.ar/shampoo-anticaspa-dermaraiz-250ml-liquido-magistral/up/MLAU3755227019?pdp_filters=item_id:MLA2814234880#is_advertising=true&searchVariation=MLAU3755227019&backend_model=search-backend&position=2&search_layout=grid&type=pad&tracking_id=5e8ebf77-a447-4a98-ab4c-026b480ae0bf&ad_domain=VQCATCORE_LST&ad_position=2&ad_click_id=YjE0NjhiMWMtMDU4YS00ODNhLWE1YmUtZjY2ODQyYzEzOTg5",
            image: antiCaspaImg
        },
    ]
    return (
        <section className="products" id="productos">

            <div className="products-header">
                <h2>Productos Capilares</h2>

                <p>
                    Complementá tu tratamiento con productos especialmente
                    seleccionados para el cuidado y fortalecimiento del cabello.
                </p>
            </div>

            <div className="products-grid">
                {products.map((product, index) => (
                    <article className="product-card" key={index}>

                        
                        <div className="product-image-placeholder">
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                className="product-image" 
                            />
                        </div>

                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
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