<template>
   <div class="main-container" id="container">

      <MenuAdmin />

      <div id="content" class="main-content headerless-content">
         <div class="layout-px-spacing py-4">
            <router-view></router-view>
         </div>
      </div>
   </div>
</template>
<script>
import MenuAdmin from "../components/MenuClient.vue";

import "../../assets/assets/js/libs/jquery-3.1.1.min.js";
import "../../assets/bootstrap/js/bootstrap.min.js";
import "../../assets/assets/js/app.js";
import "../../assets/plugins/apex/apexcharts.min.js";
import "../../assets/assets/js/dashboard/dash_1.js";

export default {
   components: {
      MenuAdmin
   }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&display=swap");
@import "../../assets/assets/css/custom-navy.css";
@import "../../assets/assets/css/main.css";
@import "../../assets/bootstrap/css/bootstrap.min.css";
@import "../../assets/assets/css/plugins.css";
@import "../../assets/plugins/apex/apexcharts.css";
@import "../../assets/assets/css/dashboard/dash_1.css";

/* .main-container{
   background-color: #f4f5f7;
} */

@media (max-width: 991px) {
   #content.headerless-content {
      padding-top: 16px;
   }
}

@media (min-width: 992px) {
   #content.headerless-content {
      margin-top: 64px;
   }
}
</style>
