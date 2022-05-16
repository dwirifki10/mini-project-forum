import gql from "graphql-tag";

export const POP_POST = gql`
	query popPost($total: Int!) {
		post(limit: $total) {
			PostHasOneCategory {
				category
			}
			PostHasOneUser {
				name
			}
			PostHaveManyStars_aggregate {
				aggregate {
					avg {
						value
					}
				}
			}
			title
			created
		}
	}
`;

export const CTG_POST = gql`
	query categoryPost($category_id: Int!) {
		post(where: { category_id: { _eq: $category_id } }, limit: 20) {
			PostHasOneCategory {
				category
			}
			PostHasOneUser {
				name
			}
			PostHaveManyStars_aggregate {
				aggregate {
					avg {
						value
					}
				}
			}
			id
			title
		}
	}
`;

export const GET_POST = gql`
	query getPosts($total: Int!) {
		post(limit: $total) {
			id
			title
		}
	}
`;
