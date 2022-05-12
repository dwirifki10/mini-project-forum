import gql from "graphql-tag";

export const ADD_USER = gql`
	mutation insertUser(
		$name: String!
		$email: String!
		$password: String!
		$location: String!
		$created: String!
		$updated: String!
	) {
		insert_user(
			objects: [
				{
					name: $name
					email: $email
					password: $password
					location: $location
					created: $created
					updated: $updated
				}
			]
		) {
			returning {
				id
				name
			}
		}
	}
`;

export const AUTH_USER = gql`
	query authUser($email: String!, $password: String!) {
		user(where: { email: { _eq: $email }, password: { _eq: $password } }) {
			id
			name
		}
	}
`;

export const CHECK_EMAIL = gql`
	query checkEmail($email: String!) {
		user(where: { email: { _eq: $email } }) {
			id
		}
	}
`;

export const DETAIL_USER = gql`
	query detailUser($id: Int!) {
		user(where: { id: { _eq: $id } }) {
			UserHaveManyStars_aggregate {
				aggregate {
					avg {
						value
					}
				}
			}
			photo
			name
			location
			status
		}
	}
`;

export const UPDATE_USER = gql`
	mutation updateUser(
		$id: Int!
		$photo: String!
		$name: String!
		$location: String!
		$status: String!
	) {
		update_user(
			where: { id: { _eq: $id } }
			_set: {
				photo: $photo
				name: $name
				location: $location
				status: $status
			}
		) {
			returning {
				id
				name
			}
		}
	}
`;
