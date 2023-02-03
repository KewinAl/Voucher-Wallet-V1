const ShopProfileCard = (props) => {
  console.log('props', props)

  return (
      <>
        {/*TODO: 1.Refractor Component 2.Add Next Comp.*/}
        <div className="ShopProfile">
          <>test</>
          <div className="ShopName">
            <h3>{props.name}</h3>
          </div>
          <div className="ShopDescription">{props.description}</div>
          <div className="ShopLink">
            <a href={props.link}>{props.link}</a>
          </div>
        </div>
      </>
  );
};

export default ShopProfileCard;
