using System.Collections.Generic;
using System.Web.Mvc;
using MVC_App_With_React.Models;

namespace MVC_App_With_React.Controllers
{
    public class ReactController : Controller
    {
        private IList<CommentModel> _comments => CommentController._comments;

        // GET: react
        [Route("react")]
        public ActionResult Index()
        {
            return View("React", _comments);
        }
    }
}