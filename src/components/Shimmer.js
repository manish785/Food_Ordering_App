import {shimmer_card_unit}  from '../utils/constants';

// Shimmer card to display with animation
export const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img "></div>
      <div className="shimmer-title "></div>
      <div className="shimmer-tags  "></div>
      <div className="shimmer-details "></div>
    </div>
  );
};

export const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {new Array(shimmer_card_unit).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};
// export default Shimmer;