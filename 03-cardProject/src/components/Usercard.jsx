const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img
        src={user.img}
        alt="User"
        className="user-img"
      />
      <h2 className="user-name">{user.name}</h2>
      <p className="user-desc">{user.desc}</p>
      <div className="user-footer">
        <p className="user-role">{user.role}</p>
        <button className="follow-btn">Follow</button>
      </div>
    </div>
  );
};

export default UserCard;
