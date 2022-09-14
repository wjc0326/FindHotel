import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFetch from '../../hooks/useFetch';
import './featuredProperties.css';

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch('hotel?featured=true&limit=4');

  return (
    <div className="fp">
      {loading ? (
        "'Loading... Please wait'"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img src={item.photos[0]} alt="" className="fpImg" />
              <div className="fpNameAndRating">
                <span className="fpName">{item.name}</span>
                {item.rating && (
                  <div className="fpRating">
                    <FontAwesomeIcon classname="fpIcon" icon={faStar} />
                    <span>{item.rating}</span>
                  </div>
                )}
              </div>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                {' '}
                <b>${item.cheapestPrice}</b> night
              </span>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
