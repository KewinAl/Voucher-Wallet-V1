const ShopProfileCard = ({shopProfileProps}) => {


  return (
      <>
        <div className="ShopProfile">
          <></>
          <div className="ShopName">
            <h3>{shopProfileProps.name}</h3>
          </div>
          <div className="ShopDescription">{shopProfileProps.description}</div>
          <div className="ShopLink">
            <a href={shopProfileProps.link}>{shopProfileProps.link}</a>
          </div>
        </div>
      </>
  );
};

export default ShopProfileCard;
