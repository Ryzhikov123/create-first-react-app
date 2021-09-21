import './styles.scss';

export const UserCard = (props) => {
  return (
    <div className="card-wrapper" onClick={props.onCardClick}>
      {props.avatar && <img src={props.avatar} alt="" />}
      {props.name && <p>Name: {props.name}</p>}
      {props.age && <p>Age: {props.age}</p>}
      {props.phone && <p>Phone: {props.phone}</p>}
    </div>
  );
};
${props.active ? 'is-active' : ''}
