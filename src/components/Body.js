import RestaurantCard from './RestaurantCard';
import restaurantList from '../utils/mockData';
import {useState, useEffect} from 'react';

const Body = () => {
    // State Variable - Super Powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList)


    // Normal JS variable
    let listOfRestaurantsJS = [
          {
              data: {
                id: "73011",
                name: "KFC",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: ["American", "Snacks", "Biryani"],
                costForTwo: 30000,
                costForTwoString: "₹300 FOR TWO",
                deliveryTime: 31,
                avgRating: "3.5",
              },
          },
          {
              data: {
                id: "73012",
                name: "Domino's Pizza",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: ["American", "Snacks", "Biryani"],
                costForTwo: 30000,
                costForTwoString: "₹300 FOR TWO",
                deliveryTime: 31,
                avgRating: "4.5",
              }
          },
          {
            data: {
              id: "73013",
              name: "MCD",
              cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
              cuisines: ["American", "Snacks", "Biryani"],
              costForTwo: 30000,
              costForTwoString: "₹300 FOR TWO",
              deliveryTime: 31,
              avgRating: "4.1",
            },
        },
    ];

    return (
        <div className='body'>
          <div className='filter'>
            <button className='filter-btn' onClick={() =>{
              // Filter Logic here
              const filteredList = listOfRestaurants.filter(res => res.data.avgRating>=4);
              setListOfRestaurants(filteredList);
              console.log('res', listOfRestaurants);
            }}>
              Top Rated Restaurant
            </button>
          </div>
          <div className='restaurant-list'>
            {listOfRestaurants.map((restaurant)=>{
              return <RestaurantCard key={restaurant.data.id} {...restaurant.data}/>
            })}
          </div>
        </div>  
    )
}

export default Body;