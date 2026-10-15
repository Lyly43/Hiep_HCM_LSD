<template>
   <div class="header-container">
      <header class="header navbar navbar-expand-sm d-flex justify-content-between">
         <div class="nav-logo align-self-center">
            <a class="navbar-brand" href="index.html"><img alt="logo" src="../../../assets/images/Logo_Tomo_dark.png">
               <span class="navbar-brand-name">TOMO</span></a>
         </div>

         <ul class="navbar-item flex-row justify-content-center">
            <li class="nav-item align-self-center search-animated">
               <form class="form-inline search-full form-inline search" role="search">
                  <div class="search-bar">
                     <input type="text" class="form-control search-form-control text-light ml-lg-auto"
                        placeholder="Search...">
                  </div>
               </form>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-search toggle-search">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
               </svg>
            </li>
         </ul>

         <ul class="navbar-item flex-row nav-dropdowns">

            <!-- CHAT -->
            <li class="nav-item dropdown message-dropdown">
               <a href="javascript:void(0);" class="nav-link dropdown-toggle" id="messageDropdown"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     class="feather feather-message-circle">
                     <path
                        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                     </path>
                  </svg><span class="badge badge-success"></span>
               </a>
               <div class="dropdown-menu p-0 position-absolute" aria-labelledby="messageDropdown">
                  <div class="">
                     <a class="dropdown-item">
                        <div class="">

                           <div class="media">
                              <div class="user-img">
                                 <div class="avatar avatar-xl">
                                    <span class="avatar-title rounded-circle">KY</span>
                                 </div>
                              </div>
                              <div class="media-body">
                                 <div class="">
                                    <h5 class="usr-name">Kara Young</h5>
                                    <p class="msg-title">ACCOUNT UPDATE</p>
                                 </div>
                              </div>
                           </div>

                        </div>
                     </a>
                     <a class="dropdown-item">
                        <div class="">
                           <div class="media">
                              <div class="user-img">
                                 <div class="avatar avatar-xl">
                                    <span class="avatar-title rounded-circle">DA</span>
                                 </div>
                              </div>
                              <div class="media-body">
                                 <div class="">
                                    <h5 class="usr-name">Daisy Anderson</h5>
                                    <p class="msg-title">ACCOUNT UPDATE</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </a>
                     <a class="dropdown-item">
                        <div class="">

                           <div class="media">
                              <div class="user-img">
                                 <div class="avatar avatar-xl">
                                    <span class="avatar-title rounded-circle">OG</span>
                                 </div>
                              </div>
                              <div class="media-body">
                                 <div class="">
                                    <h5 class="usr-name">Oscar Garner</h5>
                                    <p class="msg-title">ACCOUNT UPDATE</p>
                                 </div>
                              </div>
                           </div>

                        </div>
                     </a>
                  </div>
               </div>
            </li>
            <!-- THÔNG BÁO -->
            <li class="nav-item dropdown notification-dropdown">
               <a href="javascript:void(0);" class="nav-link dropdown-toggle" id="notificationDropdown"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     class="feather feather-bell">
                     <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                     <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg><span class="badge badge-success"></span>
               </a>
               <div class="dropdown-menu position-absolute" aria-labelledby="notificationDropdown">
                  <div class="notification-scroll">

                     <div class="dropdown-item">
                        <div class="media server-log">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round" class="feather feather-server">
                              <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                              <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                              <line x1="6" y1="6" x2="6" y2="6"></line>
                              <line x1="6" y1="18" x2="6" y2="18"></line>
                           </svg>
                           <div class="media-body">
                              <div class="data-info">
                                 <h6 class="">Server Rebooted</h6>
                                 <p class="">45 min ago</p>
                              </div>

                              <div class="icon-status">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-x">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                 </svg>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="dropdown-item">
                        <div class="media ">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round" class="feather feather-heart">
                              <path
                                 d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                              </path>
                           </svg>
                           <div class="media-body">
                              <div class="data-info">
                                 <h6 class="">Licence Expiring Soon</h6>
                                 <p class="">8 hrs ago</p>
                              </div>

                              <div class="icon-status">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-x">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                 </svg>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="dropdown-item">
                        <div class="media file-upload">
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round" class="feather feather-file-text">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                              <polyline points="14 2 14 8 20 8"></polyline>
                              <line x1="16" y1="13" x2="8" y2="13"></line>
                              <line x1="16" y1="17" x2="8" y2="17"></line>
                              <polyline points="10 9 9 9 8 9"></polyline>
                           </svg>
                           <div class="media-body">
                              <div class="data-info">
                                 <h6 class="">Kelly Portfolio.pdf</h6>
                                 <p class="">670 kb</p>
                              </div>

                              <div class="icon-status">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-check">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                 </svg>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </li>

            <!-- <li class="nav-item dropdown user-profile-dropdown order-lg-0 order-1">
               <a href="javascript:void(0);" class="nav-link dropdown-toggle user" id="user-profile-dropdown"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div class="media ms-3">
                     <div class="media-body align-self-center">
                        <h5 class="text-white">{{ admin.name }}</h5>
                        <p>{{ admin.email }}</p>
                     </div>
                     <img :src="admin.avatar" class="img-fluid border border-2 border-white"
                        style="width: 45px; height: 45px;" alt="admin-profile">
                     <span class="badge badge-success"></span>
                  </div>
               </a>

               <div class="dropdown-menu position-absolute mt-2" aria-labelledby="userProfileDropdown">

                  <div class="dropdown-item ">
                     <router-link to="/admin/profile" class="d-flex align-items-center">
                        <i class="fa-regular fa-user me-3"></i>
                        <p class="text-decoration-none m-0">Profile</p>
                     </router-link>
                  </div>
                  <div class="dropdown-item">
                     <a href="apps_mailbox.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                           class="feather feather-inbox">
                           <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                           <path
                              d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z">
                           </path>
                        </svg> <span> Inbox</span>
                     </a>
                  </div>
                  <div class="dropdown-item">
                     <a href="auth_lockscreen.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                           class="feather feather-lock">
                           <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                           <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg> <span>Lock Screen</span>
                     </a>
                  </div>
                  <div class="dropdown-item">
                     <a href="auth_login.html">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                           class="feather feather-log-out">
                           <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                           <polyline points="16 17 21 12 16 7"></polyline>
                           <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg> <span>Log Out</span>
                     </a>
                  </div>
               </div>
            </li> -->
         </ul>
      </header>
   </div>
</template>
<script>
export default {
//    data() {
//       return {
//          admin: {}
//       }
//    },
//    mounted() {
//       this.admin = {
//          name: localStorage.getItem("name_admin"),
//          email: localStorage.getItem("email_admin"),
//          check: localStorage.getItem("check_admin"),
//          avatar: localStorage.getItem("avatar_admin"),
//       };
//       console.log("Admin data:", this.admin);
//    },
//    methods: {}
}
</script>
<style></style>