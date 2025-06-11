import React, { useState } from 'react';
import Input from './Input';
import SubmitButton from './SubmitButton';
import "./login.css";
import { addNewUser, isUserRegistered, updateActiveUser } from '../../LocalStorage';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface userData {
    username: string;
    password: string;
    email?: string;
    avatarUrl?: string
}

interface FormErrors {
    username?: string;
    password?: string;
    email?: string;
}


const LoginForm: React.FC = () => {
    const { t: tLogin } = useTranslation("login")
    const { t: tErrors } = useTranslation("errors")
    const [userData, setFormData] = useState<userData>({
        username: '',
        password: '',
        email: '',
    });

    const [message, setMessage] = useState<String>("");
    const [formErrors, setFormErrors] = useState<FormErrors>({});
    const [isLogin, setIsLogin] = useState<boolean>(true);

    const navigate = useNavigate();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = e.target.id;
        const fieldValue = e.target.value;

        setFormData((prevData) => ({
            ...prevData,
            [id]: fieldValue,
        }));

        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [id]: '',
        }));
        setMessage("");
    };

    const validateForm = (): boolean => {
        const errors: FormErrors = {};

        if (!userData.username) {
            errors.username = tErrors('userRequired');
        }

        if (!userData.password) {
            errors.password = tErrors('passwordRequired');
        }

        if (!isLogin && !userData.email) {
            errors.email = tErrors('emailRequired');
        }
        setFormErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateForm()) {
            if (isLogin) {
                if (isUserRegistered(userData.username)) {
                    setMessage('Login successful');
                    updateActiveUser(userData);
                    navigate("/profile");
                } else {
                    setMessage('User not found');
                }
            } else {
                if (isUserRegistered(userData.username)) {
                    setMessage('User already registered.');
                } else {
                    addNewUser(userData);
                    setMessage(tErrors('successfullRegistration'));
                    setFormData({ username: '', password: '', email: '' });
                    navigate("/login");
                }
            }

        }
    };
    
    return (
        <div className="login-wrap">
            <form onSubmit={handleSubmit}>
                <div className="login-html">
                    <div className="tab-container">
                        <button
                            type="button"
                            onClick={() => setIsLogin(true)}
                            className={`tab ${isLogin ? 'active' : ''}`}>
                            {tLogin('signin')} 
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsLogin(false)}
                            className={`tab ${!isLogin ? 'active' : ''}`}>
                            {tLogin('signup')}
                        </button>
                    </div>

                    {/* Formulario de Login */}
                    {isLogin ? (
                        <>
                            <Input
                                label="username"
                                type="text"
                                id="username"
                                value={userData.username}
                                onChange={handleChange}
                                error={formErrors.username}
                            />
                            <Input
                                label="password"
                                type="password"
                                id="password"
                                value={userData.password}
                                onChange={handleChange}
                                error={formErrors.password}
                            />
                        </>
                    ) : (
                        // Formulario de Registro
                        <>
                            <Input
                                label="username"
                                type="text"
                                id="username"
                                value={userData.username}
                                onChange={handleChange}
                                error={formErrors.username}
                            />
                            <Input
                                label="email"
                                type="email"
                                id="email"
                                value={userData.email!}
                                onChange={handleChange}
                                error={formErrors.email}
                            />
                            <Input
                                label="password"
                                type="password"
                                id="password"
                                value={userData.password}
                                onChange={handleChange}
                                error={formErrors.password}
                            />
                        </>
                    )}
                    <div>
                        {message && <p className='successfull-msg'>{message}</p>}
                    </div>
                    <SubmitButton text={isLogin ? 'signin' : 'signup'} />
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
