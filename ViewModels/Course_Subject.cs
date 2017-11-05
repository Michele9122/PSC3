using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PSC3.ViewModels
{
    public class Course_Subject
    {
        public int CorsoId { get; set; }
        public string Titolo { get; set; }
        public int DurataAnni { get; set; }
        public int MateriaId { get; set; }
        public string Nome { get; set; }
        public int Crediti { get; set; }
        public int Semestre { get; set; }
    }
}
