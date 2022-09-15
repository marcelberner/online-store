import { useSelector } from "react-redux";

import UserForm from "../../components/Form/UserForm/UserForm";

import "./UserDetail.scss";

const UserDetail = () => {
  const userData = useSelector((state) => state.userData.userData);

  return (
    <>
      {userData && (
        <div className="user-details">
          <div className="user-details__header" style={{ backgroundImage: `url("../images/profile-bg.jpg")` }}>
            {userData.name ? (
              <span className="user-details__title">{`Cześć, ${userData.name}`}</span>
            ) : (
              <span className="user-details__title">{userData.email}</span>
            )}
          </div>
          <div className="user-details__content">
            <UserForm userData={userData}/>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetail;
