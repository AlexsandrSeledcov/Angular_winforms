using System;
using System.Linq;
using System.Data.Entity;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using Angular_winforms.Models;


namespace Angular_winforms.Models
{
    public class ApplicationContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
           : base(options)
        {
            Database.EnsureCreated();
        }
        public Microsoft.EntityFrameworkCore.DbSet<Axial_loads_on_fixed_bearings> Axial_loads_on_fixed_bearings { get; set; }
        public Microsoft.EntityFrameworkCore.DbSet<Compensators_WITH_GROOVLOCK_STAINLESS_STEEL_PIPE> Compensators_WITH_GROOVLOCK_STAINLESS_STEEL_PIPE { get; set; }
        public Microsoft.EntityFrameworkCore.DbSet<Compensators_with_SCREWED_FLANGED_AND_STAINLESS_STEEL_PIPES> Compensators_with_SCREWED_FLANGED_AND_STAINLESS_STEEL_PIPES { get; set; }
        public Microsoft.EntityFrameworkCore.DbSet<Compensators_with_Welding_PIPES> Compensators_with_Welding_PIPES { get; set; }
        public Microsoft.EntityFrameworkCore.DbSet<DEPENDENCE_OF_THE_COEFFICIENT_OF_LINEAR_PIPE_XPANSIONS_DEPENDING_ON_THE_MATERIAL> DEPENDENCE_OF_THE_COEFFICIENT_OF_LINEAR_PIPE_XPANSIONS_DEPENDING_ON_THE_MATERIAL { get; set; }
        public Microsoft.EntityFrameworkCore.DbSet<Support_for_piping_DN50_200> Support_for_piping_DN50_200 { get; set; }
        public Microsoft.EntityFrameworkCore.DbSet<Supports_for_piping_DN15_40> Supports_for_piping_DN15_40 { get; set; }
        public Microsoft.EntityFrameworkCore.DbSet<Supports_for_piping_DN15_100> Supports_for_piping_DN15_100 { get; set; }


        

    }
}
