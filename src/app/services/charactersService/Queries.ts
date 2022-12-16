import { gql } from "@apollo/client";

// get first 20 characters

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
      info {
        pages
      }
      results {
        id
        name
        image
        status
      }
    }
  }
`;

// Get single character

export const GET_SINGLE_CHARACTER = gql`
  query GetCharacters($id: ID!) {
    character(id: $id) {
      id
      name
      species
      type
      gender
      image
      location {
        name
      }
    }
  }
`;

// Get Filer characters

export const GET_FILTER_CHARACTERS = gql`
  query GetCharacters(
    $page: Int
    $name: String
    $status: String
    $species: String
    $type: String
    $gender: String
  ) {
    characters(
      page: $page
      filter: {
        name: $name
        status: $status
        species: $species
        type: $type
        gender: $gender
      }
    ) {
      info {
        pages
      }
      results {
        id
        name
        image
        status
      }
    }
  }
`;
