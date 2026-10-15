<template>
   <div class="main-container" id="container">

      <MenuAdmin />

      <div id="content" class="main-content headerless-content">
         <div class="layout-px-spacing py-4">
            <router-view></router-view>
         </div>
      </div>

      <transition name="scroll-top">
         <button
            v-show="showScrollToTop"
            type="button"
            class="scroll-to-top"
            aria-label="Lên đầu trang"
            title="Lên đầu trang"
            @click="scrollToTop"
         >
            <svg viewBox="0 0 24 24" aria-hidden="true">
               <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
         </button>
      </transition>
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
   },
   data() {
      return {
         showScrollToTop: false
      }
   },
   mounted() {
      this.handleScroll()
      window.addEventListener("scroll", this.handleScroll, { passive: true })
   },
   beforeUnmount() {
      window.removeEventListener("scroll", this.handleScroll)
   },
   methods: {
      handleScroll() {
         this.showScrollToTop = window.scrollY > 300
      },
      scrollToTop() {
         window.scrollTo({
            top: 0,
            behavior: "smooth"
         })
      }
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

.scroll-to-top {
   position: fixed;
   right: 24px;
   bottom: 24px;
   z-index: 1050;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 48px;
   height: 48px;
   padding: 0;
   color: #ffffff;
   background: linear-gradient(135deg, #4361ee, #304aca);
   border: 0;
   border-radius: 50%;
   box-shadow: 0 10px 24px rgba(48, 74, 202, 0.34);
   cursor: pointer;
   transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.scroll-to-top:hover {
   transform: translateY(-3px);
   box-shadow: 0 14px 28px rgba(48, 74, 202, 0.42);
}

.scroll-to-top:focus-visible {
   outline: 3px solid rgba(67, 97, 238, 0.3);
   outline-offset: 3px;
}

.scroll-to-top svg {
   width: 21px;
   height: 21px;
   fill: none;
   stroke: currentColor;
   stroke-width: 2.4;
   stroke-linecap: round;
   stroke-linejoin: round;
}

.scroll-top-enter-active,
.scroll-top-leave-active {
   transition: opacity 0.2s ease, transform 0.2s ease;
}

.scroll-top-enter-from,
.scroll-top-leave-to {
   opacity: 0;
   transform: translateY(12px);
}

@media (max-width: 991px) {
   #content.headerless-content {
      padding-top: 16px;
   }

   .scroll-to-top {
      right: 16px;
      bottom: 16px;
      width: 44px;
      height: 44px;
   }
}

@media (min-width: 992px) {
   #content.headerless-content {
      margin-top: 64px;
   }
}
</style>
