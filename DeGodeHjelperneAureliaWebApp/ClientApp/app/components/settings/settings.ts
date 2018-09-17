import { HttpClient, json } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';
import { PushNotificationModel } from '../../models/pushnotificationmodel';

@inject(HttpClient)
export class Settings {
    private http: HttpClient;
    usePush: boolean = false;
    pushIsSupported: boolean = 'serviceWorker' in navigator && 'PushManager' in window;
    vapidPublicKey: string = 'BO5icnbJ0VJovahZ0W-uOUbtu-X5NgwopZiXQB16ui0clwBzyjAPOXys7asc0usbP6YoNydpBvP2Xc7ISMSKzAQ';

    constructor(HttpClient: HttpClient) {
        this.http = HttpClient;
    }

    subscribeToPushNotifications() {

        if (!this.pushIsSupported) {
            return;
        }
        
        navigator.serviceWorker.ready
            .then(serviceWorkerRegistration => {
                serviceWorkerRegistration.pushManager.getSubscription()
                    .then(subscription => {

                        if (subscription) {
                            // subscription present, no need to register subscription again
                            return;
                        }

                        return serviceWorkerRegistration.pushManager.subscribe({
                            userVisibleOnly: true,
                            applicationServerKey: this.urlBase64ToUint8Array(this.vapidPublicKey)
                        })
                            .then(subscription => {
                                const rawKey = subscription.getKey ? subscription.getKey('p256dh') : '';
                                const key = rawKey
                                    ? btoa(String.fromCharCode.apply(null, new Uint8Array(rawKey)))
                                    : '';
                                const rawAuthSecret = subscription.getKey ? subscription.getKey('auth') : '';
                                const authSecret = rawAuthSecret
                                    ? btoa(String.fromCharCode.apply(null, new Uint8Array(rawAuthSecret)))
                                    : '';
                                const endpoint = subscription.endpoint;

                                const pushNotificationSubscription =
                                    new PushNotificationModel(key, endpoint, authSecret);

                                this.http.fetch('pushNotificationSubscriptions',
                                    {
                                        method: 'POST',
                                        body: json(pushNotificationSubscription)
                                    }).then(response => {
                                        if (response.ok) {
                                            this.usePush = true;
                                            console.log('Push notification registration created!');
                                        } else {
                                            console.log('Ooops something went wrong');
                                        }
                                    });
                            });
                    });
            });

    }

    private urlBase64ToUint8Array(base64String: string) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');
        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }

        return outputArray;
    }
    
    testPushNotifications() {
        
        this.http.fetch('pushNotificationSubscriptions',
            {
                method: 'POST',
                body: json("Start push test from client")
            }).then(response => {
            if (response.ok) {                
                console.log('Push notification test started!');
            } else {
                console.log('Ooops something went wrong for push test');
            }
        });

    }

}
