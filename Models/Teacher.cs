using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PSC3.Models
{
    public class Teacher
    {
        [Key]
        public int InsegnateId { get; set; }
        public string Nome { get; set; }
        public string Cognome { get; set; }
    }
}
