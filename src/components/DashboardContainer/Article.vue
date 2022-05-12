<template>
	<div class="mt-4 font-base color-base">
		<h5 class="fw-bold ps-3 color-title">Buat Post</h5>
		<form>
			<div class="row g-0">
				<div class="col-lg-4 ps-3 pe-3 mb-3">
					<input
						type="text"
						class="form-control"
						placeholder="Masukan Judul"
					/>
				</div>
				<div class="col-lg-4 ps-3 pe-3 mb-3">
					<div class="form-group">
						<select class="form-control">
							<option>Entertainment</option>
							<option>Arts</option>
							<option>Technology</option>
							<option>Sport</option>
							<option>Education</option>
						</select>
					</div>
				</div>
				<div class="col-lg-4 ps-3 mb-3 mt-2">
					<div class="form-group w-50">
						<input type="file" class="form-control-file" />
					</div>
				</div>
			</div>
			<div class="form-group ps-3 pe-3 mb-3">
				<ckeditor
					v-model="editorData"
					:config="editorConfig"
				></ckeditor>
			</div>
			<button class="btn bg-base text-white ms-3 mb-3">Buat Post</button>
		</form>
	</div>
</template>
<script>
export default {
	name: "Article",
	data() {
		return {
			editorData: "",
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
};
</script>
