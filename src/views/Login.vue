<template>
	<div class="container-fluid">
		<Authentication />
	</div>
</template>
<script>
import Authentication from "../components/LoginContainer/Authentication.vue";
export default {
	name: "Login",
	components: { Authentication },
};
</script>
