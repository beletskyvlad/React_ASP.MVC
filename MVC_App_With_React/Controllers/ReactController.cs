using System.Web.Mvc;

namespace MVC_App_With_React.Controllers
{
    public class ReactController : Controller
    {
        // GET: react
        [Route("react")]
        public ActionResult Index()
        {
            return View("React");
        }
    }
}