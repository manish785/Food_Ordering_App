import {shimmer_card_unit}  from '../utils/constants';

// Shimmer card to display with animation
export const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-card stroke animate"></div>
      <div className="shimmer-card stroke animate"></div>
      <div className="shimmer-card stroke animate"></div>
      <div className="shimmer-card stroke animate"></div>
      <div className="shimmer-card stroke animate"></div>
      <div className="shimmer-card stroke animate"></div>
      <div className="shimmer-card stroke animate"></div>
      <div className="shimmer-card stroke animate"></div>
      <div className="shimmer-card stroke animate"></div>
      <div className="shimmer-card stroke animate"></div>
      <div className="shimmer-card stroke animate"></div>
      <div className="shimmer-card stroke animate"></div>
      <div className="shimmer-card stroke animate"></div>
      <div className="shimmer-card stroke animate"></div>
      <div className="shimmer-card stroke animate"></div>
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