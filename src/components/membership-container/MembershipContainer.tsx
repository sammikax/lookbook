import React from "react";
import PlanCard from "./../Plan-card/Plan-card"; 

const MembershipContainer: React.FC = () => {
  const plans = [
    { key: "basic" },
    { key: "professional"},
    { key: "premium" },
  ];

  return (
    <div className="memberContainer">
      <div className="row justify-content-center">
        {plans.map((plan, index) => (
          <PlanCard key={index} planKey={plan.key} />
        ))}
      </div>
    </div>
  );
};

export default MembershipContainer;
