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
			id
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

export const SET_VIEWS = gql`
	mutation setViews($id: Int!, $total: Int!) {
		update_post_by_pk(pk_columns: { id: $id }, _set: { views: $total }) {
			id
			title
		}
	}
`;

export const DTL_POST = gql`
	query getDetailPost($id: Int!) {
		post(where: { id: { _eq: $id } }) {
			id
			title
			slug
			views
			updated
			PostHaveManyStars_aggregate {
				aggregate {
					avg {
						value
					}
				}
			}
			PostHasOneCategory {
				category
			}
			PostHasOneUser {
				name
			}
		}
	}
`;
