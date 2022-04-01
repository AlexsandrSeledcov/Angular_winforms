using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular_winforms.Models
{
    public class DEPENDENCE_OF_THE_COEFFICIENT_OF_LINEAR_PIPE_XPANSIONS_DEPENDING_ON_THE_MATERIAL
    {
        public int Id { get; set; }

        public string Material_tube { get; set; } //Материал трубопровода

        public double Thermal_expansion_coefficient { get; set; } //Коэффициент температурного расширения мм
    }
}
