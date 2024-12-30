import React, {
  ChangeEvent,
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useState
} from 'react';
import cn from 'classnames';
import './Form.scss';

interface Props {
  registration: boolean;
  setRegistration: Dispatch<SetStateAction<boolean>>;
}

export const Form: FC<Props> = ({ registration, setRegistration }) => {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });

  const clearForm = () => {
    setFormData({
      name: '',
      password: ''
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trim()
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    clearForm();
  };

  const handleRegistrChange = () => {
    setRegistration((prev) => !prev);
  };

  return (
    <div className="form">
      <h2 className="form__title">
        {registration ? 'Create your account' : 'Sign in to NICE GADGETS'}
      </h2>

      <form className="form__form" onSubmit={handleSubmit}>
        <label className="form__label">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoFocus
            className={cn('form__input')}
          />
        </label>
        <label className="form__label">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={cn('form__input')}
            required
          />
        </label>
        <button className="form__button" type="submit">
          {registration ? 'Create account' : 'Sign In'}
        </button>

        <button
          type="button"
          className="form__button--switcher"
          onClick={handleRegistrChange}
        >
          {registration ? 'Sign In' : 'Create account'}
        </button>
      </form>
    </div>
  );
};
