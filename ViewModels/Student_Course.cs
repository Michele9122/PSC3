using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PSC3.ViewModels
{
    public class Student_Course
    {
        public int StudenteId { get; set; }
        public string Nome { get; set; }
        public string Cognome { get; set; }
        public DateTime DataNascita { get; set; }
        public string CodiceFiscale { get; set; }
        public bool Sesso { get; set; }
        public DateTime AnnoIscrizione { get; set; }
        public string Matricola { get; set; }
        public string Course { get; set; }
    }
}
