using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PSC3.Models
{
    public class Course
    {
        [Key]
        public int CorsoId { get; set; }
        public string Titolo { get; set; }
        public int DurataAnni { get; set; }
    }
}
