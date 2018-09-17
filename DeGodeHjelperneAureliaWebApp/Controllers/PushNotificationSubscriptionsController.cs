
using System.Threading.Tasks;
using DeGodeHjelperneAureliaWebApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using WebPush;

namespace DeGodeHjelperneAureliaWebApp.Controllers
{
   
    public class PushNotificationSubscriptionsController : Controller
    {
        private readonly VapidSettings _vapidSettings;
        private static PushSubscription _pushSubscription;
        private static VapidDetails _vapidDetails;

        public PushNotificationSubscriptionsController(IOptions<VapidSettings> vapidSettings)
        {
            _vapidSettings = vapidSettings.Value;
        }

        [HttpPost("api/[controller]")]
        public async Task<IActionResult> Create([FromBody] PushNotificationSubscription subscription)
        {
            var pushSubscription = new PushSubscription(subscription.Endpoint, subscription.Key, subscription.AuthSecret);
            var vapidDetails = new VapidDetails(_vapidSettings.Subject, _vapidSettings.PublicKey, _vapidSettings.PrivateKey);

            var webPushClient = new WebPushClient();
            webPushClient.SetVapidDetails(vapidDetails);

            //TODO; store pushsubscription for later use
            _pushSubscription = pushSubscription;
            _vapidDetails = vapidDetails;
            
            // send notification 
            var payload = new PushNotificationPayload
            {
                Msg = "Thank you for subscribing",
                Icon = "[URL to an image to display in the notification]"
            };

            try
            {
                await webPushClient.SendNotificationAsync(pushSubscription, JsonConvert.SerializeObject(payload), vapidDetails);
            }
            catch (WebPushException exception)
            {
                var statusCode = exception.StatusCode;
                return new StatusCodeResult((int)statusCode);
            }

            return new OkResult();
        }


        [HttpPost("api/[controller]")]
        public async Task<IActionResult> PushTest([FromBody] string testMessage)
        {
            var webPushClient = new WebPushClient();
            webPushClient.SetVapidDetails(_vapidDetails);
            
            // send test notification 
            var payload = new PushNotificationPayload
            {
                Msg = "Aurelia har falt. Vaktsentralen, ta kontakt å sjekk ut situasjon og meld neste aksjon",
                Icon = "[URL to an image to display in the notification]"
            };

            try
            {
                await webPushClient.SendNotificationAsync(_pushSubscription, JsonConvert.SerializeObject(payload), _vapidDetails);
            }
            catch (WebPushException exception)
            {
                var statusCode = exception.StatusCode;
                return new StatusCodeResult((int)statusCode);
            }

            return new OkResult();
        }
    }
}
