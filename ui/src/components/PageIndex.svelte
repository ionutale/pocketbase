<script>
    import { replace } from "@/lib/router";
    import ApiClient from "@/utils/ApiClient";

    handler();

    function handler() {
        if (ApiClient.authStore.isValid) {
            replace("/collections");
        } else {
            ApiClient.logout();
        }
    }
</script>
