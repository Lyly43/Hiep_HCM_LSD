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

@media (max-width: 991px) {
   .headerless-menu.topbar-nav.header {
      display: block !important;
      position: sticky;
      top: 0;
      right: auto;
      bottom: auto;
      left: auto;
      z-index: 1030;
      width: 100%;
      height: 56px !important;
      min-height: 56px;
      max-height: 56px;
      flex: 0 0 56px;
      margin: 0;
      padding: 0;
      visibility: visible !important;
      background: #ffffff;
      box-shadow: 0 8px 22px rgba(23, 32, 51, 0.08);
   }

   .headerless-menu nav#topbar {
      display: flex !important;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 56px !important;
      min-height: 56px;
      max-height: 56px;
      padding: 0 14px;
      overflow-x: auto;
      overflow-y: hidden;
      scrollbar-width: none;
   }

   .headerless-menu nav#topbar::-webkit-scrollbar {
      display: none;
   }

   .headerless-menu nav#topbar ul.menu-categories {
      display: flex !important;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: auto;
      height: 56px;
      min-width: max-content;
      min-height: 56px;
      max-height: 56px;
      margin: 0 !important;
      padding: 6px 0;
      overflow: visible !important;
      white-space: nowrap;
   }

   .headerless-menu nav#topbar ul.menu-categories li.menu {
      display: block !important;
      margin: 0;
      padding: 0;
   }

   .headerless-menu nav#topbar ul.menu-categories li.menu > a {
      display: flex !important;
      align-items: center;
      min-height: 42px;
      margin: 0 !important;
      padding: 9px 14px;
      border-radius: 9px;
   }

   .headerless-menu nav#topbar ul.menu-categories li.menu.active > a {
      background: #eef1ff;
   }
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
