import { atom, selector } from 'recoil'
import axios, { all } from 'axios';

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
});

export const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
});

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 12
});

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
});    

// export const totalNotificationSelector = selector({
//     key: "totalNotificationSelector",
//     get: ({get}) => {
//         const networkAtomCount = get(networkAtom);
//         const jobsAtomCount = get(networkAtom);
//         const notificationAtomCount = get(networkAtom);
//         const messagingAtomCount = get(networkAtom);
//         return networkAtomCount + jobsAtomCount + notificationAtomCount + messagingAtomCount;
//     }
// })

//Asynchromous data queries

export const notifications = atom({
    key: "notifiactions",
    default: selector({
        key: "notificationsSelector",
        get: async () => {
            const response = await axios.get("https://sum-server.100xdevs.com/notifications");
            return response.data;
        }
    })
})

//total
export const totalNotificationSelector = selector({
    key: "totalNotification",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + allNotifications.jobs + allNotifications.notifications + allNotifications.messaging 
    }
})