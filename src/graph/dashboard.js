import gql from "graphql-tag";

export const ADD_POST = gql`
	mutation insertPost(
		$user_id: Int!
		$category_id: Int!
		$title: String!
		$slug: String!
		$views: Int!
		$created: String!
		$updated: String!
	) {
		insert_post(
			objects: [
				{
					user_id: $user_id
					category_id: $category_id
					title: $title
					slug: $slug
					views: $views
					created: $created
					updated: $updated
				}
			]
		) {
			returning {
				id
				title
				views
			}
		}
	}
`;

export const ALL_POST = gql`
	query getAllPost($id: Int!) {
		post(where: { user_id: { _eq: $id } }) {
			id
			title
			views
		}
	}
`;

export const DELETE_POST = gql`
	mutation deletePost($id: Int!) {
		delete_post(where: { id: { _eq: $id } }) {
			returning {
				id
				title
			}
		}
	}
`;
