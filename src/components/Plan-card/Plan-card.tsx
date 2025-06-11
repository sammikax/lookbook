import "./Plan-card.css"
import React from 'react';
import { useTranslation } from 'react-i18next';
import PriceDisplay from '../PriceDisplay/PriceDisplay';
import './Plan-card.css';

interface PlanCardProps {
  planKey: string;
}

const pricesUSD: Record<string, number> = {
  basic: 2,
  professional: 5,
  premium: 10,
};

const PlanCard: React.FC<PlanCardProps> = ({ planKey }) => {
  const { t } = useTranslation('membership');
  const basePrice = pricesUSD[planKey];

  return (
    <div className="col-sm-3 mb-6 mb-sm-0">
      <div className="card text-center card-plan">
        <div className="card-body plan-card">
          <h3 className="card-title fw-bold text-capitalize">{t(planKey)}</h3>

          <p className="card-text plan-price">
            <PriceDisplay amount={basePrice} />
          </p>
          <p className="plan-price">{t(`description-${planKey}`)}</p>
          <a href="#" className="btn btn-join">
            {t('btn-join')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;

