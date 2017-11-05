using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PSC3.Models;
using Microsoft.EntityFrameworkCore;

namespace PSC3.Controllers
{
    [Produces("application/json")]
    [Route("api/Teacher")]
    public class TeacherController : Controller
    {
        private readonly UniversityContext _context;

        public TeacherController(UniversityContext context)
        {
            _context = context;
        }
        // GET: api/Teacher  
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            List<Teacher> teacher_ = new List<Teacher>();
            var Teacher = await (from data in _context.Teacher
                                 select new
                                 {
                                     InsegnateId = data.InsegnateId,
                                     Nome = data.Nome,
                                     Cognome = data.Cognome
                                 }).ToListAsync();
            Teacher.ForEach(x =>
            {
                Teacher pro = new Teacher();
                pro.InsegnateId = x.InsegnateId;
                pro.Nome = x.Nome;
                pro.Cognome = x.Cognome;
                teacher_.Add(pro);
            });


            return Json(teacher_);
        }
    }
}