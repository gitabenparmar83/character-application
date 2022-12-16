import { useQuery } from "@apollo/client";
import React from "react";
import { GET_FILTER_CHARACTERS } from "../services/charactersService/Queries";
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
import { useParams } from "react-router-dom";

const Search = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = React.useState(1);
  const { filter, value } = useParams();
  const { loading, data } = useQuery(GET_FILTER_CHARACTERS, {
    variables: {
      page,
      name: filter === "name" ? value : "",
      status: filter === "status" ? value : "",
      species: filter === "species" ? value : "",
      type: filter === "type" ? value : "",
      gender: filter === "gender" ? value : "",
    },
  });
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const characters = useAppSelector((state) => state.characters?.characters);

  const info = useAppSelector((state) => state.characters?.info);
  React.useEffect(() => {
    dispatch(setCharactersList(data?.characters?.results));
    dispatch(SetPagination(data?.characters?.info));
  }, [data]);

  React.useEffect(() => {
    renderPagination();
  }, [info]);


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

export default Search;
