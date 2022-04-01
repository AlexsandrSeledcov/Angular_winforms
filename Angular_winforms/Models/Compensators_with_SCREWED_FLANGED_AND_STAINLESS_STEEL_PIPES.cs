using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular_winforms.Models
{
    public class Compensators_with_SCREWED_FLANGED_AND_STAINLESS_STEEL_PIPES
    {
        public int Id { get; set; }
        public string Application_area { get; set; }    // Область применения
        public string Rated_passage { get; set; } // Номинальный проход
        public int Opeating_environment_temp { get; set; }  // Температура рабочей среды C

        public int Rated_pressure { get; set; } // Номинальное давление PN/MPA

        public string Tension_and_Compression { get; set; } //Растяжение и сжатие
        public int Length_compensator { get; set; }  // Длина компенсатора mm

        public int Length_external_stabilizer_cover { get; set; } //Диаметр внешнего кожуха стабилизатора мм

        public int Diametr_Flanets { get; set; } // Диаметр фланца мм

        public string Connection_type { get; set; } // Тип соединения

        public int Rigidity_of_axial_stroke { get; set; } // Жесткость осевого хода

        public int Effective_area { get; set; } // Эффективная площадь

    }
}
