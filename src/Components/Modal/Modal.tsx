import classNames from 'classnames';
import './Modal.scss';

type Props = {
  active: boolean,
  setActive: (active: boolean) => void,
};

export const Modal: React.FC<Props> = ({ active, setActive, children }) => {
  return (
    <button
      type="button"
      className={classNames(
        'modal',
        {
          'modal--active': active,
        },
      )}
      onClick={() => setActive(false)}
    >
      <button
        type="button"
        className="modal__content"
        onClick={event => event.stopPropagation()}
      >
        {children}
      </button>
    </button>
  );
};
