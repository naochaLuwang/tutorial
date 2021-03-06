import Navbar from "../Components/Navbar";
import data from "../utils/data";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="columns">
          {data.products.map((product) => (
            <div className="column is-2" key={product.name}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-1by1">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                    />
                  </figure>
                  <div className="card-content">
                    <p className="title is-size-4">{product.name}</p>
                    <p className="subtitle is-size-4">{product.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
