import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    // console.log('props', props);
    const {cloudinaryImageId, name, cuisines, area, lastMileTravelString,  costForTwoString,  avgRating} = props;

    // console.log('props', props);
    return (
        <div className='card' style={{backgroundColor : "#f0f0f0"}}>
          <img
          src={CDN_URL + cloudinaryImageId}
          />
           <h2>{name}</h2>
           <h4>{cuisines.join(", ")}</h4>
           <h4>{area}</h4>
           <span>
           <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>
            <h4>{lastMileTravelString}</h4>
            <h4>{costForTwoString}</h4>
           </span>
        </div>
    )
}

export default RestaurantCard;