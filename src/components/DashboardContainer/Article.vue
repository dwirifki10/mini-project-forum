<template>
	<div class="mt-4 font-base color-base">
		<h5 class="fw-bold ps-3 color-title">Buat Post</h5>
		<form @submit.prevent="add">
			<div class="row g-0">
				<div class="col-lg-4 ps-3 pe-3 mb-3">
					<input
						type="text"
						class="form-control"
						placeholder="Masukan Judul"
						v-model="form.title"
					/>
				</div>
				<div class="col-lg-4 ps-3 pe-3 mb-3">
					<div class="form-group">
						<select
							class="form-control"
							v-model="form.category_id"
							required
						>
							<option value="1">Entertainment</option>
							<option value="2">Arts</option>
							<option value="3">Technology</option>
							<option value="4">Sport</option>
							<option value="5">Education</option>
						</select>
					</div>
				</div>
				<div class="col-lg-4 ps-3 mb-3 mt-2">
					<div class="form-group w-50">
						<input type="file" class="form-control-file" disabled />
					</div>
				</div>
			</div>
			<div class="form-group ps-3 pe-3 mb-3">
				<ckeditor
					v-model="form.editorData"
					:config="editorConfig"
				></ckeditor>
			</div>
			<button class="btn bg-base text-white ms-3 mb-3">Buat Post</button>
		</form>
	</div>
</template>
<script>
import { ADD_POST } from "@/graph/dashboard.js";
import { getDate } from "@/utils/index.js";

export default {
	name: "Article",
	data() {
		return {
			form: {
				category_id: 1,
				title: "",
				editorData: "",
			},
			editorConfig: {
				toolbarGroups: [
					{
						name: "basicstyles",
						groups: ["basicstyles", "underline"],
					},
					{
						name: "paragraph",
						groups: ["list", "blocks"],
					},
					{
						name: "styles",
						groups: ["styles"],
					},
					{
						name: "links",
						groups: ["links"],
					},
					{
						name: "about",
						groups: ["about"],
					},
					{
						name: "document",
						groups: ["mode"],
					},
				],
			},
		};
	},
	methods: {
		async add() {
			/* save attributes */
			const user_id = Number(this.$store.state.data.name.id);
			const category_id = Number(this.form.category_id);
			const title = this.form.title;
			const slug = this.form.editorData;
			const views = 0;
			const created = getDate();
			const updated = created;
			/* save data */
			await this.$apollo.mutate({
				mutation: ADD_POST,
				variables: {
					user_id,
					category_id,
					title,
					slug,
					views,
					created,
					updated,
				},
			});
			/* get notification */
			await this.$swal({
				toast: true,
				position: "top-end",
				showConfirmButton: false,
				timer: 3000,
				timerProgressBar: true,
				icon: "success",
				title: "Data berhasil ditambahkan",
			});
			window.location.reload();
		},
	},
};
</script>

<style scoped>
.form-control {
	font-family: "Roboto";
	font-size: 16px;
	line-height: 2;
	color: #031b4e !important;
}
input,
input::-webkit-input-placeholder {
	font-family: "Roboto";
	color: #031b4e !important;
	font-size: 16px;
	opacity: 0.75;
	line-height: 2;
}
</style>
