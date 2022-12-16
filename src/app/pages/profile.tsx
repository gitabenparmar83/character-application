import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_SINGLE_CHARACTER } from "../services/charactersService/Queries";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { SetRecentlyVisited } from "../../features/Home/homeSlice";
import LoaderComponent from "../components/Loader";

const Profile: React.FC = () => {
  const { cardId } = useParams();
  const dispatch = useAppDispatch();
  const { loading, data } = useQuery(GET_SINGLE_CHARACTER, {
    variables: {
      id: cardId?.split("-")[0],
    },
  });

  useEffect(() => {
    if (data && !loading) {
      dispatch(SetRecentlyVisited(data));
    }
  }, [data]);

  return (
    <div className="profile-page">
      {loading && <LoaderComponent number="1" />}
      <div className="left-side">
        <img
          src={data?.character?.image}
          alt={data?.character?.name}
          loading="lazy"
        />
      </div>
      <div className="right-side">
        <h1>{data?.character?.name}</h1>
        <h3>{data?.character?.species}</h3>
        <h3>{data?.character?.type}</h3>
        <h3>{data?.character?.gender}</h3>
        <h3>{data?.character?.location?.name}</h3>
      </div>
    </div>
  );
};

export default Profile;
