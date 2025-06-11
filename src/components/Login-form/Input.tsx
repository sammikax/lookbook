import React from 'react';
import { useTranslation } from 'react-i18next';

interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input: React.FC<InputFieldProps> = ({ label, type, id, value, onChange, error }) => {
  const { t } = useTranslation("login")
  return (
    <div className="group">
      <label className="label" htmlFor={id}>{t(label)}</label>
      <input
        id={id}
        type={type}
        className="input"
        value={value}
        onChange={onChange}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Input;
