import "./Products.css";
import antiCaidaImg from "../../assets/products/shampoo-anticaida-dermaraiz.webp";
import antiCaspaImg from "../../assets/products/shampoo-anticaspa-dermaraiz.webp";
import neutroImg from "../../assets/products/shampoo-neutro-dermaraiz.webp";

function Products () {

    const products = [
        {
            name: "Shampoo Anticaída",
            description: 
            "Shampoo de uso frecuente orientado al cuidado del cuero cabelludo y al fortalecimiento capilar.",
            benefit: "Ideal para acompañar rutinas de fortalecimiento capilar.",
            link: "https://www.mercadolibre.com.ar/shampoo-anticaida-dermaraiz-250ml-liquido-hipoalergenico/up/MLAU3755171517?pdp_filters=item_id:MLA1660262753#is_advertising=true&searchVariation=MLAU3755171517&backend_model=search-backend&position=1&search_layout=grid&type=pad&tracking_id=9b2a16bd-0e48-4c9a-92fd-dfffa4584737&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=MTMyMWFkNjUtNGQ5OC00YTRjLTk3MWItYjJjMTJmZTYxMDU0",
            image: antiCaidaImg,
            imageAlt: "Shampoo anticaida Dermaraiz 250 ml para fortalecer el cuidado del cuero cabelludo",
            badge: "Recomendado"
        },
        {
            name: "Shampoo Anticaspa",
            description: 
            "Shampoo formulado para acompañar el tratamiento del cuero cabelludo y mejorar su higiene y equilibrio.",
            benefit: "Pensado para mejorar el equilibrio del cuero cabelludo.",
            link: "https://www.mercadolibre.com.ar/shampoo-anticaspa-dermaraiz-250ml-liquido-magistral/up/MLAU3755227019?pdp_filters=item_id:MLA2814234880#is_advertising=true&searchVariation=MLAU3755227019&backend_model=search-backend&position=2&search_layout=grid&type=pad&tracking_id=5e8ebf77-a447-4a98-ab4c-026b480ae0bf&ad_domain=VQCATCORE_LST&ad_position=2&ad_click_id=YjE0NjhiMWMtMDU4YS00ODNhLWE1YmUtZjY2ODQyYzEzOTg5",
            image: antiCaspaImg,
            imageAlt: "Shampoo anticaspa Dermaraiz 250 ml para higiene y equilibrio del cuero cabelludo",
            badge: "Cuidado diario"
        },
        {
            name: "Shampoo Neutro Dermaraiz",
            description:
            "Limpieza suave y efectiva para todo tipo de cabello. Su formula neutra ayuda a mantener el equilibrio natural del cuero cabelludo.",
            benefit: "Apto para uso frecuente, cuero cabelludo sensible y rutinas de cabello graso.",
            link: "https://www.mercadolibre.com.ar/shampoo-neutro-dermaraiz-profesional-250-ml/up/MLAU4273744360#reco_item_pos=1&reco_backend=item_decorator&reco_backend_type=function&reco_client=home_items-decorator-legacy&reco_id=0c1290d5-dba8-4a42-a623-0c94c87990aa&reco_model=&c_id=/home/navigation-recommendations-seed/element&c_uid=0999359e-6044-4b12-b514-724e27280101&da_id=navigation&da_position=1&id_origin=/home/dynamic_access&da_sort_algorithm=ranker",
            image: neutroImg,
            imageAlt: "Shampoo neutro Dermaraiz profesional 250 ml para todo tipo de cabello y cuero cabelludo sensible",
            badge: "Nuevo"
        },
    ]
    return (
        <section className="products" id="productos">

            <div className="section-header">
                <p className="section-tag">Productos</p>

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
    )
}

export default Products
