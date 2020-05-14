using System;
using System.Collections.Generic;
using System.Web.Http;
using MVC_App_With_React.Models;

namespace MVC_App_With_React.Controllers.Api
{
    [RoutePrefix("api")]
    public class FilmBookController: ApiController
    {
        private static readonly IEnumerable<Film> _films = new []
        {
            new Film
            {
                Id = 1,
                Name = "The Avengers",
                ReleasedDate = new DateTime(2012, 5, 3)
            }
        };

        private static readonly IEnumerable<Book> _books = new []
        {
            new Book
            {
                Id = 1,
                Name = "Harry Potter and the Philosopher's Stone",
                ReleasedDate = new DateTime(1997, 6, 26)
            }
        };

        [Route("films")]
        [HttpGet]
        public IHttpActionResult GetFilms()
        {
            return Ok(_films);
        }

        [Route("books")]
        [HttpGet]
        public IHttpActionResult GetBooks()
        {
            return Ok(_books);
        }
    }
}