using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular_winforms.Models
{
    public class Axial_loads_on_fixed_bearings
    {
        public int  ID { get; set; }

        public int Tension { get; set; } // Давление

        public string Diametr { get; set; } //Диаметр

        public string Loads { get; set; }// Нагрузка
    }
}
