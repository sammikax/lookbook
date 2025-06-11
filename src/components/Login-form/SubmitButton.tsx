import React from 'react';
import { useTranslation } from 'react-i18next';

interface SubmitButtonProps {
  text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  const { t } = useTranslation ("login")
  return <button type="submit" className="button">{t(text)}</button>;
};

export default SubmitButton;
