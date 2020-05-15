using System.Collections.Generic;
using System.Web.Http;
using MVC_App_With_React.Models;

namespace MVC_App_With_React.Controllers
{
    public class CommentController: ApiController
    {
        public static readonly IList<CommentModel> _comments;

        static CommentController()
        {
            _comments = new List<CommentModel>
            {
                new CommentModel
                {
                    Id = 1,
                    Author = "Daniel Lo Nigro",
                    Text = "Hello React!"
                },
                new CommentModel
                {
                    Id = 2,
                    Author = "Pete Hunt",
                    Text = "This is one comment"
                },
                new CommentModel
                {
                    Id = 3,
                    Author = "Jordan Walke",
                    Text = "This is *another* comment"
                }
            };
        }

        [HttpGet]
        [Route("api/comments")]
        public IHttpActionResult Comments()
        {
            return Ok(_comments);
        }

        [HttpPost]
        [Route("api/comments/new")]
        public IHttpActionResult AddComment(CommentModel comment)
        {
            // Create a fake ID for this comment
            comment.Id = _comments.Count + 1;
            _comments.Add(comment);
            return Ok("Success :)");
        }
    }
}