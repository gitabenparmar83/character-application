import { useQuery } from "@apollo/client";
import React from "react";
import { GET_CHARACTERS } from "../services/charactersService/Queries";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  setCharactersList,
  SetPagination,
} from "../../features/Home/homeSlice";
import LoaderComponent from "../components/Loader";
import "../../style.css";
import CardComponent from "../components/Card";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import FooterComponent from "../components/Footer";

const Home = () => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector((state) => state.characters?.characters);
  const info = useAppSelector((state) => state.characters?.info);
  const [page, setPage] = React.useState(1);
  const { loading, data } = useQuery(GET_CHARACTERS, {
    variables: {
      page,
    },
  });
  React.useEffect(() => {
    dispatch(setCharactersList(data?.characters?.results));
    dispatch(SetPagination(data?.characters?.info));
  }, [data]);

  React.useEffect(() => {
    renderPagination();
  }, [info]);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const renderPagination = () => {
    return (
      <div className="pagination">
        <Pagination
          count={info}
          variant="outlined"
          color="primary"
          page={page}
          onChange={handleChange}
        />
      </div>
    );
  };

  const renderLoader = () => {
    if (loading && !data) {
      return (
        <div className="main">
          <LoaderComponent number="20" />
        </div>
      );
    }
  };

  return (
    <div className="main-wraper">
      {renderLoader()}
      Page: {page}
      <Grid container>
        {!loading &&
          characters?.map((item: any) => (
            <CardComponent
              id={item?.id}
              name={item?.name}
              image={item?.image}
              status={item?.status}
            />
          ))}
      </Grid>
      {renderPagination()}
      <div className="footer">
        <FooterComponent />
      </div>
    </div>
  );
};

export default Home;
