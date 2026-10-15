<template>
   <div class="topbar-nav header navbar headerless-menu" role="banner">
      <nav id="topbar">

         <ul class="list-unstyled menu-categories" id="topAccordion">

            <li class="menu single-menu" :class="{ active: isActive('/HCM') }">
               <router-link to="/HCM" class="align-items-center text-decoration-none">
                  <div class="d-flex align-items-center">
                     <i class="fa-solid fa-house-chimney me-2 fs-5"></i>
                     <span class="fw-bold">HCM</span>
                  </div>
               </router-link>
            </li>

            <li class="menu single-menu" :class="{ active: isActive('/LSĐ') }">
               <router-link to="/LSĐ" class=" align-items-center text-decoration-none fw-bold">
                  <i class="fa-solid fa-users me-2 fs-5"></i>
                  <span class="fw-bold">LSĐ</span>
               </router-link>
            </li>

            


            <!-- mẫu -->
            <!-- <li class="menu single-menu">
               <a href="#app" data-toggle="collapse" aria-expanded="false"
                  class="dropdown-toggle align-items-center text-decoration-none">
                  <div class="">
                     <span class="fw-bold">Apps</span>
                  </div>

               </a>
               <ul class="collapse submenu list-unstyled" id="app" data-parent="#topAccordion">
                  <li>
                     <a href="apps_chat.html" class="text-decoration-none"> Chat </a>
                  </li>
                  <li>
                     <a href="apps_mailbox.html"> Mailbox </a>
                  </li>

                  <li class="sub-sub-submenu-list">
                        <a href="#appInvoice" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                           Invoice <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round" class="feather feather-chevron-right">
                              <polyline points="9 18 15 12 9 6"></polyline>
                           </svg> </a>
                        <ul class="collapse list-unstyled sub-submenu" id="appInvoice" data-parent="#app">
                           <li>
                              <a href="apps_invoice-list.html"> List </a>
                           </li>
                           <li>
                              <a href="apps_invoice-preview.html"> Preview </a>
                           </li>
                           <li>
                              <a href="apps_invoice-add.html"> Add </a>
                           </li>
                           <li>
                              <a href="apps_invoice-edit.html"> Edit </a>
                           </li>
                        </ul>
                     </li>

               </ul>
            </li> -->



         </ul>
      </nav>
   </div>

</template>
<script>
export default {
   methods: {
      isActive(path) {
         return this.$route.path === path
      }
   }
}
</script>
<style scoped>
.menu a,
.menu span {
   color: #000 !important;
   transition: color 0.1s ease;
}

.menu.active {
   color: #fff;
}

.menu.active a,
.menu.active span {
   color: #122379 !important;
}

@media (min-width: 992px) {
   .headerless-menu.topbar-nav.header {
      top: 0;
   }

   .headerless-menu nav#topbar {
      display: flex;
      justify-content: center;
   }

   .headerless-menu nav#topbar ul.menu-categories {
      justify-content: center;
      margin-left: 0;
   }

   .headerless-menu nav#topbar ul.menu-categories li.menu:last-child > a {
      margin-right: 0;
   }
}
</style>
