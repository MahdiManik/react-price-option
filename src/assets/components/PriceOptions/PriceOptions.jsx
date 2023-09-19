import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {


  const priceOptions = [
    {
      "id": 1,
      "name": "Basic Membership",
      "price": "$30 per month",
      "features": [
        "Access to basic gym equipment",
        "Unlimited access during off-peak hours",
        "Locker room access"
      ]
    },
    {
      "id": 2,
      "name": "Premium Membership",
      "price": "$50 per month",
      "features": [
        "Access to advanced gym equipment",
        "Unlimited 24/7 gym access",
        "Personal trainer consultation once a month",
        "Group fitness classes"
      ]
    },
    {
      "id": 3,
      "name": "VIP Membership",
      "price": "$80 per month",
      "features": [
        "Access to premium gym equipment",
        "Unlimited 24/7 gym access",
        "Personal trainer sessions twice a month",
        "Access to sauna and spa facilities",
        "Nutrition consultation"
      ]
    }
  ]


  return (
    <div className="bg-violet-800 py-12 text-white">
      <h3 className="text-5xl  py-8 font-bold container mx-auto">Best price in the town</h3>
      <div className="container mx-auto grid grid-cols-3 gap-6">
        {
          priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
        }
      </div>
    </div>
  );
};

export default PriceOptions;