import './EmptyNotification.scss';

export const EmptyNotification = () => {
  return (
    <div className="container error">
      <div className="emptyNotification__wrap">
        <p className="emptyNotification__text">
          Right now we do not have any products in the database
        </p>

        <div className="emptyNotification__img" />
      </div>
    </div>
  );
};
