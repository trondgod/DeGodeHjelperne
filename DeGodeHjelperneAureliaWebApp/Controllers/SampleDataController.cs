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
                    Summary = "Måltid"
                },
                new Helper
                {
                    Name = "Åse",
                    Relation = "Hjemmehjelp",
                    NextTimeFormatted = "om 2 timer",
                    Summary = "Stell og dusj"
                },
                new Helper
                {
                    Name = "Espen",
                    Relation = "Sønn",
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
                    Name = "Pål",
                    Relation = "Nabo",
                    NextTimeFormatted = "I morgen ettermiddag",
                    Summary = "Innkjøp og bytte lyspærer. Tar en kaffe"
                },
                new Helper
                {
                    Name = "August",
                    Relation = "Sønn",
                    NextTimeFormatted = "I helgen",
                    Summary = "På besøk lørdag og søndag"
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
