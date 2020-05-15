﻿using System.Web.Mvc;
using System.Web.Routing;

namespace MVC_App_With_React
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            // custom route for the view where the React app will be rendered
            routes.MapRoute(
                name: "react",
                url: "react/{*pathInfo}",
                defaults: new { controller = "React", action = "Index", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
