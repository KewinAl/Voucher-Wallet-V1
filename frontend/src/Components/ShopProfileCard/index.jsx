const ShopProfileCard = ({ shopProfile }) => {
  console.log("props", shopProfile);

  return (
    <>
      {/*TODO: 2.Add Next Comp.*/}
      <div className="ShopProfile">
        <></>
        <div className="ShopName">
          <h3>{shopProfile.name}</h3>
        </div>
        <div className="ShopDescription">{shopProfile.description}</div>
        <div className="ShopLink">
          <a href={shopProfile.link}>{shopProfile.link}</a>
        </div>
      </div>
    </>
  );
};

export default ShopProfileCard;
