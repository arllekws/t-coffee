import Address from "./Address";
import PaymentComponent from "./PaymentComponent";
import OrderResume from "./OrderResume";

export default function DeliveryDetails() {
  return (
    <div>
      <Address />
      <PaymentComponent />
      <OrderResume />
    </div>
  );
}
