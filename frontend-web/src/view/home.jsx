import "../style/home.css";
import PropTypes from "prop-types";

const PropertyCard = ({ property }) => {
  return (
    <div className="card property-card">
      <div className="image-container">
        <img src={property.image} alt={property.title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{property.title}</h5>
        <p className="card-text">{property.description}</p>
        <p className="card-text">{property.price}</p>
        <button className="card-text">{property.type}</button>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};
const HomePage = () => {
  const properties = [
    {
      id: 1,
      title: "Casa espaciosa en el centro",
      description:
        "Hermosa casa con jardín y terraza en el centro de la ciudad.",
      price: "$250,000",
      type: "Venta",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/casa-campo-paisajista-jesus-moraime-extremadura-jardin-alberca-1598526004.jpg?crop=1.00xw:0.760xh;0,0.186xh&resize=1200:*",
    },
    {
      id: 2,
      title: "Apartamento moderno",
      description:
        "Moderno apartamento con excelente ubicación y vista panorámica.",
      price: "$1,200/mes",
      type: "Alquiler",
      image:
        "https://st4.depositphotos.com/1152281/40771/i/450/depositphotos_407716020-stock-photo-modern-living-room-in-blue.jpg",
    },
    // Agrega más propiedades aquí
  ];

  return (
    <div className="home-page">
      <h1 className="titulo d-flex justify-content-center align-items-center">Bienvenido a la inmobiliaria</h1>
      <h2 className="titulo d-flex justify-content-center align-items-center">Propiedades destacadas</h2>
      <div className="property-list">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="additional-div">Departamentos recomendados en Venta</div>
          </div>
          <div className="col-md-4">
            <div className="additional-div">Casas recomendadas</div>
          </div>
          <div className="col-md-4">
            <div className="additional-div">Departamentos recomendados en Alquiler</div>
          </div>
        </div>
      </div>
    </div>
  );
};
/* function home(){
    const [num, setNum] = useState

    //Estado
    //Ciclo de vida
    return (
        <div className="">
            <h2>Home</h2>
        </div>
    )
} */

export default HomePage;
