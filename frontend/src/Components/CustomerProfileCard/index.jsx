const CustomerProfileCard = ({ customerProfileProps }) => {
  // console.log("Checking Probs", customerProfileProps);
  return (
    <>
      <div className="CustomerProfile">
        <></>
        <div className="CustomerUserName">
          <h3>{"Username: " + customerProfileProps.username}</h3>
        </div>
        <div className="Email">
          {"Email: "}
          <a href={`mailto:${customerProfileProps.email}`}>
            {customerProfileProps.email}
          </a>
        </div>
        <div className="CustomerAge">
          {"Age: " + customerProfileProps.customer_profile.age}
        </div>
        <div className="CustomerFirstname">
          {"Firstname: " + customerProfileProps.customer_profile.firstname}
        </div>
        <div className="CustomerLastname">
          {"Lastname: " + customerProfileProps.customer_profile.lastname}
        </div>
      </div>
    </>
  );
};

export default CustomerProfileCard;
