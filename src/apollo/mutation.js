import { gql  } from '@apollo/client';
export const ADD_PEOPLE = gql`
  mutation createPeople($input: PeopleInput!) {
    createPeople(input:$input) {
      id
      nombre
      apellidoMa
      apellido
      telefono
      email
      fecha
    }
  }
`;

/*const EXCHANGE_RATES = gql`
  query getPeople {
    getPeople{
      id
      nombre
    }
  }
`;*/
// const { loading, error, data } = useQuery(EXCHANGE_RATES);