import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaSkeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="135" cy="131" r="129" />
    <rect x="-1" y="275" rx="0" ry="0" width="392" height="27" />
    <rect x="-45" y="320" rx="0" ry="0" width="392" height="80" />
    <rect x="-1" y="421" rx="0" ry="0" width="122" height="27" />
    <rect x="159" y="410" rx="0" ry="0" width="122" height="45" />
  </ContentLoader>
);

export default PizzaSkeleton;
