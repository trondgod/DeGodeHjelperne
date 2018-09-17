using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace DeGodeHjelperneAureliaWebApp.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<Helper> HelpingPeople()
        {
            var helpers = new List<Helper>
            {
                new Helper
                {
                    Name = "Kari",
                    Relation = "Datter",
                    NextTimeFormatted = "om 10 minutter",
                    Summary = "M�ltid"
                },
                new Helper
                {
                    Name = "�se",
                    Relation = "Hjemmehjelp",
                    NextTimeFormatted = "om 2 timer",
                    Summary = "Stell og dusj"
                },
                new Helper
                {
                    Name = "Espen",
                    Relation = "S�nn",
                    NextTimeFormatted = "om 4 timer",
                    Summary = "Lager sveler til kaffen"
                },
                new Helper
                {
                    Name = "Per",
                    Relation = "Vaktsentralen",
                    NextTimeFormatted = "",
                    Summary = "En som alltid er der"
                },
                new Helper
                {
                    Name = "P�l",
                    Relation = "Nabo",
                    NextTimeFormatted = "I morgen ettermiddag",
                    Summary = "Innkj�p og bytte lysp�rer. Tar en kaffe"
                },
                new Helper
                {
                    Name = "August",
                    Relation = "S�nn",
                    NextTimeFormatted = "I helgen",
                    Summary = "P� bes�k l�rdag og s�ndag"
                },
            };

            return helpers;
        }

        public class Helper
        {
            public string Name { get; set; }
            public string Relation { get; set; }
            public int Age { get; set; }
            public string Summary { get; set; }
            public string NextTimeFormatted { get; set; }
        }
    }
}
