import { useQuery } from "react-query";
import useData from "../../hooks/useData";

import UserForm from "../../components/Form/UserForm/UserForm";

import "./UserDetail.scss";

const UserDetail = () => {
  const { getUserData } = useData();

  const { data } = useQuery({
    queryKey: ["user-data"],
    queryFn: () => getUserData(),
  });

  return (
    <>
      {data && (
        <div className="user-details">
          <div className="user-details__header">
            {data.name ? (
              <span className="user-details__title">{`Cześć, ${data.name}`}</span>
            ) : (
              <span className="user-details__title">{data.email}</span>
            )}
          </div>
          <div className="user-details__content">
            <UserForm userData={data} />
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetail;
