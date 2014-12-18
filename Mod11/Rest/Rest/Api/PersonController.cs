using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.InteropServices;
using System.Web.Http;
using Rest.Models;

namespace Rest.Api
{
    public class PersonController : ApiController
    {
        private static List<Person> _people;

        static PersonController()
        {
            _people = new List<Person>()
            {
                new Person()
                {
                    Id = 1,
                    FirstName = "Maurice"
                },
                new Person()
                {
                    Id = 2,
                    FirstName = "Martine"
                },
                new Person()
                {
                    Id = 3,
                    FirstName = "Kai"
                },

            };
        }
        // GET: api/Person
        public IEnumerable<Person> Get()
        {
            return _people;
        }

        // GET: api/Person/5
        public Person Get(int id)
        {
            return new Person()
            {
                Id = id,
                FirstName = "Maurice"
            };
        }

        public Person Get(string personId)
        {
            return new Person()
            {
                Id = 1,
                FirstName = "Maurice"
            };
        }

        // POST: api/Person
        public void Post(Person person)
        {
            _people.Add(person);
        }

        // PUT: api/Person/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Person/5
        public void Delete(int id)
        {
        }
    }
}
