import Button from "../ui/Button";
function Purchase() {
  return (
    <section className="purchase">
      {/* <div className="container"></div> */}
      <div className="purchase__wrapper">
        <h2>A Price To Suit Everyone</h2>
        <p className="purchase-text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus
        </p>
        <p className="purchase-price">$40</p>
        <p>UI Design Kit</p>
        <p className="purchase-slogan">See, One price. Simple.</p>
        <Button>Purchase Now</Button>
      </div>
    </section>
  );
}

export default Purchase;
