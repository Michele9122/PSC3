using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PSC3.Models;
using PSC3.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace PSC3.Controllers
{
    [Produces("application/json")]
    [Route("api/Course")]
    public class CourseController : Controller
    {
        private readonly UniversityContext _context;

        public CourseController(UniversityContext context)
        {
            _context = context;
        }
        // GET: api/Course  
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            List<Course> course_ = new List<Course>();
            var Course = await (from data in _context.Course
                                select new
                                {
                                    CorsoId = data.CorsoId,
                                    Titolo = data.Titolo,
                                    DurataAnni = data.DurataAnni
                                }).ToListAsync();
            Course.ForEach(x =>
            {
                Course pro = new Course();
                pro.CorsoId = x.CorsoId;
                pro.Titolo = x.Titolo;
                pro.DurataAnni = x.DurataAnni;
                course_.Add(pro);
            });


            return Json(course_);
        }

       /* [HttpGet]
        public async Task<IActionResult> GetSubject()
        {
            List<Course_Subject> ilIst = new List<Course_Subject>();
            var listData = await (from emp in _context.Course
                                  join pro in _context.Subject on emp.CorsoId equals pro.CorsoId
                                  select new
                                  {
                                      emp.CorsoId,
                                      emp.Titolo,
                                      emp.DurataAnni,
                                      pro.MateriaId,
                                      pro.Nome,
                                      pro.Crediti,
                                      pro.Semestre

                                  }
                          ).ToListAsync();
            listData.ForEach(x =>
            {
                Course_Subject Obj = new Course_Subject();
                Obj.CorsoId = x.CorsoId;
                Obj.Titolo = x.Titolo;
                Obj.DurataAnni = x.DurataAnni;
                Obj.MateriaId = x.MateriaId;
                Obj.Nome = x.Nome;
                Obj.Crediti = x.Crediti;
                Obj.Semestre = x.Semestre;
                ilIst.Add(Obj);
            });

            return Json(ilIst);
        } */

        [HttpGet("{empId}")]
        public async Task<IActionResult> CourseDetails(int empId)
        {

            var CrsDetails = await (from emp in _context.Course
                                    join pro in _context.Subject on emp.CorsoId equals pro.CorsoId
                                    where emp.CorsoId == empId
                                    select new
                                    {
                                        emp.CorsoId,
                                        emp.Titolo,
                                        emp.DurataAnni,
                                        pro.MateriaId,
                                        pro.Denominazione,
                                        pro.Crediti,
                                        pro.Semestre

                                    }
                          ).FirstAsync();


            return Json(CrsDetails);
        }

        [HttpDelete]
        public IActionResult RemoveCourseDetails([FromBody]int empId)
        {
            Course Emp;
            Emp = _context.Course.Where(x => x.CorsoId == empId).First();
            _context.Course.Remove(Emp);
            _context.SaveChanges();
            return Json("OK");
        }

        [HttpPost]
        public IActionResult AddCourse([FromBody]Course empObj)
        {
            _context.Course.Add(empObj);
            _context.SaveChanges();
            return Json("OK");


        }

        [HttpPut]
        public IActionResult EditCourse([FromBody]Course empData)
        {
            _context.Entry(empData).State = EntityState.Modified;
            _context.SaveChanges();
            return Json("ok");
        }

    }
}