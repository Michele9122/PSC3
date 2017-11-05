using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PSC3.Models;
using PSC3.ViewModels;
using Microsoft.EntityFrameworkCore;

//Creaiamo un metodo asincrono per fornire un meccanismo per scrivere il codice in maniera non bloccante
namespace PSC.Controllers
{
    [Produces("application/json")]
    [Route("api/Subject")]
    public class SubjectController : Controller
    {
        private readonly UniversityContext _context;

        public SubjectController(UniversityContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> SubjectList()
        {
            List<Subject_Teacher> ilIst = new List<Subject_Teacher>(); //Creiamo una lista di Materia_Professore
            var listData = await (from emp in _context.Subject
                                  join pro in _context.Teacher on emp.InsegnateId equals pro.InsegnateId
                                  select new
                                  {
                                      emp.MateriaId,
                                      emp.Denominazione,
                                      emp.Crediti,
                                      emp.Semestre,
                                      pro.Nome,
                                      pro.Cognome

                                  }
                          ).ToListAsync();
            listData.ForEach(x =>
            {
                Subject_Teacher Obj = new Subject_Teacher();
                Obj.MateriaId = x.MateriaId;
                Obj.Denominazione = x.Denominazione;
                Obj.Crediti = x.Crediti;
                Obj.Semestre = x.Semestre;
                Obj.Nome = x.Nome;
                Obj.Cognome = x.Cognome;
                ilIst.Add(Obj);
            });

            return Json(ilIst);
        }
    }
}