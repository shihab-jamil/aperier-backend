// import { useRouter } from "vue-router";
// import axios from "axios";
// import Echo from "laravel-echo";
// import Pusher from "pusher-js";
// import Data from "../../Data/Data";


const AppService = {
    isAdmin(){
      return JSON.parse(localStorage.getItem("isAdmin"))
    },
    isLoggedIn(){
        return !!localStorage.getItem("userEmail");
    },

    // layoutGenerator() {
    //     const router = useRouter();
    //     if (router.currentRoute.value.name == 'Login' ||
    //         router.currentRoute.value.name == 'Forgot Password' ||
    //         router.currentRoute.value.name == 'Reset Password') {
    //         return "UnauthenticatedLayout"
    //     }

    //     else {
    //         let user = JSON.parse(localStorage.getItem("user"))
    //         if (user) {
    //             if (user.data.role.title == 'Management') {
    //                 return "AdminLayout"
    //             } else if (user.data.isManager) {
    //                 return "ManagerLayout"
    //             } else {
    //                 return "EmployeeLayout"
    //             }
    //         } else {
    //             return "UnauthenticatedLayout"
    //         }
    //     }
    // },

    // setAxiosToken: () => {
    //     let user = JSON.parse(localStorage.getItem("user"));
    //     if (user) {
    //         axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;

    //         window.Pusher = Pusher
    //         window.Echo = new Echo({
    //             authEndpoint: `${Data.domain}/broadcasting/auth`,
    //             broadcaster: "pusher",
    //             key: '391d1a1a641e3c5ac4d6',
    //             cluster: 'ap1',
    //             wsHost: window.location.hostname,
    //             wsPort: 6001,
    //             forceTLS: false,
    //             disableStats: true,
    //             auth: {
    //                 headers: {
    //                     Authorization: "Bearer " + user.token,
    //                     'Access-Control-Allow-Origin': '*',
    //                     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //                 },
    //             },
    //         });
    //     }
    // },

    addDataTable(id) {
        if (!$.fn.dataTable.isDataTable("#" + id)) {
            $("#" + id)
                .DataTable({
                    paging: true,
                    lengthChange: false,
                    searching: true,
                    ordering: true,
                    info: true,
                    autoWidth: false,
                    responsive: true,
                })
        }
    },
    destroyDataTable(id) {
        $("#" + id).dataTable().fnDestroy();
    }


}

export default AppService
