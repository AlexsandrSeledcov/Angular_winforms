import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Axial_loads_on_fixed_bearings } from '../Models/Axial_loads_on_fixed_bearings';
import { Dependence_of_the_coefficient_of_linear } from '../Models/Dependence_of_the_coefficient_of_linear';

import { Compensators_with_groovlock_stainless_steel_pipe } from '../Models/Compensators_with_groovlock_stainless_steel_pipe';
import { Compensators_with_screwed_flanged_and_staimless_steel_pipes } from '../Models/Compensators_with_screwed_flanged_and_staimless_steel_pipes';
import { Compensators_with_welding_pipes } from '../Models/Compensators_with_welding_pipes';

import { Supports_for_piping_DN50_200 } from '../Models/Supports_for_piping_DN50_200';
import { Supports_for_piping_DN15_100 } from '../Models/Supports_for_piping_DN15_100';
import { Supports_for_piping_DN15_40 } from '../Models/Supports_for_piping_DN15_40';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {

  axial_loads_on_fixed_bearings: Axial_loads_on_fixed_bearings;
  dependence_of_the_coefficient_of_linear: Dependence_of_the_coefficient_of_linear;

  compensators_with_groovlock_stainless_steel_pipe: Compensators_with_groovlock_stainless_steel_pipe;
  compensators_with_screwed_flanged_and_staimless_steel_pipes : Compensators_with_screwed_flanged_and_staimless_steel_pipes;
  compensators_with_welding_pipes: Compensators_with_welding_pipes;

  Supports_for_piping_DN50_200: Supports_for_piping_DN50_200;
  Supports_for_piping_DN15_100: Supports_for_piping_DN15_100;
  Supports_for_piping_DN15_40: Supports_for_piping_DN15_40;

  idx: number[100];
  DN_index: number[100];
  Length: double[100];
  Start_floor: double[100];
  End_floor: double[100];
  Floor_height: double[100];
  Shift: double[100];

  num_calcs: number = 0;
  num_floors: number = 0;

  enable_lower_comp: boolean = false;
  enable_higher_comp: boolean = false;

  lower_length: double = 0;
  higher_length: double = 0;

  lower_extension: double = 0;
  higher_extension: double = 0;

  lower_automatic: number = 0;
  higher_automatic: number = 0;

  j_l: number = 0;
  jj_l: number = 0;

  j_h: number = 0;
  jj_h: number = 0;
  jmax_h: number = 0;

  saved: number = 0;

  lower_floor: double = 0;
  higher_floor: double = 0;

  k: double = 1.05;
  C: double = 0;
  Tmax: double = 95;
  Tmin: double = -10;

  comp_near_hard: boolean = false;

  
  auto_change_C: boolean = false;

  Comp_floors: number[100];
  Hard_floors: number[100];
  Comp_DN: number[100];
  Hard_DN: number[100];
  ActualShift: double[100];
  FloorsIdx: number[100, 2];
  comp_count: number = 0;
  hard_count: number = 0;
  acts_count: number = 0;

  Comp_art_base: string = "";
  Hard_art_base: string = "";
  Connect_type: string = "";

  lic: number = 1;

  name: string = "";

  act: number = 0;

  project_created: boolean = false;

  project_optimized: boolean = false;

  Calculation() {
            dL: double = 0;
            //double l = 0;

            //double Ex = 0;
            //int NumComp = 0;
            errDN: number = 0;
            errType: number = 0;
            errl: number = 0;
            errTmax: number = 0;
            errTmin: number = 0;
            bad_params: number = 0;
            //int use_floors = 0;
            k1: double = 0;
            //double floors_num = 0;
            //double floors_height = 0;


    error_message: string = "успешно!";

    for (var i = 100; i >= 0; i--) {
      if (this.news[i] != undefined) {
        this.news[i];
        if (this.news[i].displayed) {
          this.idFixedNews = i;
        }
        this.countNews++;

        if (this.lic > 0) {

          for (int i = 0; i < 100; i++)
          {
            this.Comp_floors[i] = 0;
            this.Hard_floors[i] = 0;
            this.Comp_DN[i] = 0;
            this.Hard_DN[i] = 0;
            this.ActualShift[i] = 0;
            this.FloorsIdx[i, 0] = 0;
            this.FloorsIdx[i, 1] = 0;
          }
          this.comp_count = 0;
          this.hard_count = 0;
          this.acts_count = 0;

          if (this.textBox13.Text == "") {
            this.bad_params++;
            this.errl = 1;
          }

          try { k1 = double.Parse(textBox13.Text, System.Globalization.CultureInfo.InvariantCulture); }
          catch { this.bad_params++; this.errl = 1; }

          if (this.name == "") {
            this.k = 0;
          }

          this.k = (this.k1 / 100) + 1;

          if (this.textBox3.Text == "") { this.errTmin = 1; }
          if (this.textBox3.Text.Contains(",")) { this.bad_params++; this.errTmin = 1; }
          try { this.Tmin = double.Parse(this.textBox3.Text, System.Globalization.CultureInfo.InvariantCulture); }
          catch { this.bad_params++; this.errTmin = 1; }


          // dL = C * l * (Tmax - Tmin) * k ;

          // dL += C * floors_height * (Tmax - Tmin) * k; // запас против неудачного числа этажей


          // check Type
          if (this.comboBox2.SelectedItem == null) {
            this.errType = 1;
          }
          switch (this.comboBox2.SelectedItem) {
            case ("Отопление, сварное соединение"):
              this.Comp_art_base = "АЛЬТЕЗА.А.X.1.6.";
              this.Hard_art_base = "АЛЬТЕЗА.A.Н.О-";
              this.Connect_type = "Сварка";
              break;

            case ("Водоснабжение, резьбовое соединение"):
              this.Comp_art_base = "АЛЬТЕЗА.B.X.1.6.";
              this.Hard_art_base = "АЛЬТЕЗА.B.Н.О-";
              this.Connect_type = "Резьба/Фланец";
              break;

            case ("Водоснабжение, грувлок соединение"):
              this.Comp_art_base = "АЛЬТЕЗА.B.X.1.6.";
              this.Hard_art_base = "АЛЬТЕЗА.B.Н.О-";
              this.Connect_type = "Грувлок";
              break;
          }


          if ((this.errDN + this.errType + this.errl + this.errTmax + this.errTmin == 0) | (this.num_calcs > 0)) {


            select_place: number = 0;
            fix_start_floor: number = 0;
            start_floor: number = 0;

            this.dL = 0;


            if (this.comp_near_hard) {
              if (this.enable_lower_comp) {
                this.Hard_floors[this.hard_count] = Convert.ToInt32(this.lower_floor);
                this.hard_count++;
              }

              for (int i = 0; i < num_calcs; i++)
              {
                max_ext: number;

                if (Shift[i] > 32) {
                  if (this.DN_index[i] < 8)
                    this.max_ext = 33;
                  else
                    this.max_ext = 35;
                }
                else
                  this.max_ext = Shift[i];



                for (int j = Convert.ToInt32(this.Start_floor[i]); j <= Convert.ToInt32(this.End_floor[i]); j++)
                {
                  cur: double = C * this.Floor_height[i] * (this.Tmax - this.Tmin) * this.k;
                  dL += cur;

                  if (this.fix_start_floor == 0) {
                    this.fix_start_floor = 1;
                    this.start_floor = Convert.ToInt32(this.Start_floor[i]);
                    this.FloorsIdx[0, 0] = this.start_floor;

                  }

                  if (this.dL > this.max_ext) {
                    j--;

                    this.Comp_floors[comp_count] = j;
                    this.Comp_DN[comp_count] = DN_index[i];

                    this.Hard_DN[hard_count] = DN_index[i];

                    this.Hard_floors[hard_count] = j + 1;
                    this.ActualShift[acts_count] = dL - cur;
                    this.FloorsIdx[acts_count + 1, 0] = j + 1;
                    this.FloorsIdx[acts_count, 1] = j;
                    this.comp_count++;
                    this.hard_count++;
                    this.acts_count++;
                    this.dL = 0;
                  }
                }
              }

              if (this.dL > 0) {
                this.Comp_floors[comp_count] = Convert.ToInt32(this.End_floor[this.num_calcs - 1]);
                shis.Comp_DN[comp_count] = this.DN_index[num_calcs - 1];
                if (this.enable_higher_comp)
                  this.Hard_floors[hard_count] = Convert.ToInt32(this.higher_floor);
                else
                  this.Hard_floors[hard_count] = Convert.ToInt32(this.End_floor[num_calcs - 1]) + 1;
                this.Hard_DN[hard_count] = DN_index[num_calcs - 1];
                this.ActualShift[acts_count] = dL;
                if (this.enable_higher_comp)
                  this.FloorsIdx[acts_count, 1] = Convert.ToInt32(this.higher_floor) - 1;
                else
                  this.FloorsIdx[acts_count, 1] = Convert.ToInt32(this..End_floor[num_calcs - 1]);
                this.comp_count++;
                this.hard_count++;
                this.acts_count++;
                this.dL = 0;
              }
            }
            else {
              op_mode: number = 0;

              if (this.enable_lower_comp) {
                this.Hard_DN[hard_count] = DN_index[0];
                this.Hard_floors[hard_count] = Convert.ToInt32(lower_floor);
                this.hard_count++;
              }

              for (int i = 0; i < num_calcs; i++)
              {

                max_ext: double;
                prev_op_mode: number = 0;
                prev_checkval: double = 0;

                this.prev_op_mode = op_mode;

                if (this.Shift[i] > 32) {
                  this.op_mode = 0;
                  if (this.DN_index[i] < 8)
                    this.max_ext = 33;
                  else
                    this.max_ext = 35;
                }
                else {
                  this.max_ext = Shift[i];
                  this.op_mode = 1;
                }

                for (int j = Convert.ToInt32(this.Start_floor[i]); j <= Convert.ToInt32(this.End_floor[i]); j++)
                {
                  cur: double = C * Floor_height[i] * (Tmax - Tmin) * k;

                  this.dL += cur;


                  if (this.fix_start_floor == 0) {
                    this.fix_start_floor = 1;
                    this.start_floor = Convert.ToInt32(this.Start_floor[i]);
                    this.FloorsIdx[0, 0] = start_floor;
                  }

                  switch (this.op_mode) {
                    case (0):
                      if (this.dL > max_ext) {
                        j--;
                        this.Comp_floors[comp_count] = j;
                        this.Comp_DN[comp_count] = DN_index[i];
                        this.Hard_DN[hard_count] = DN_index[i];
                        this.Hard_floors[hard_count] = j + 1;
                        this.ActualShift[acts_count] = dL - cur;
                        this.FloorsIdx[acts_count + 1, 0] = j + 1;
                        this.FloorsIdx[acts_count, 1] = j;
                        this.comp_count++;
                        this.hard_count++;
                        this.acts_count++;
                        this.dL = 0;
                      }
                      break;

                    case (1):
                      if (this.select_place == 0) {
                        checkval: double;

                        this.checkval = max_ext;
                        this.prev_checkval = checkval;

                        if (this.dL > checkval) {
                          j--;
                          this.Comp_floors[comp_count] = j;
                          this.Comp_DN[comp_count] = DN_index[i];
                          this.dL -= cur;
                          this.ActualShift[acts_count] = dL;
                          this.FloorsIdx[acts_count + 1, 0] = j + 1;
                          this.FloorsIdx[acts_count, 1] = j;
                          if (this.Comp_DN[comp_count] > 4) {
                            this.Hard_DN[hard_count] = DN_index[i];
                            this.Hard_floors[hard_count] = j + 1;
                            this.select_place = 0;
                            this.hard_count++;
                            this.dL = 0;
                          }
                          else {
                            this.select_place = 1;
                          }
                          this.comp_count++;
                          this.acts_count++;


                        }
                      }
                      else {
                        checkval: double;

                        if (((this.max_ext * 2) > 33) | ((this.prev_checkval + this.max_ext) > 33))
                          this.checkval = 33;
                        else
                          this.checkval = max_ext * 2;

                        this.prev_checkval = 0;
                        if (this.dL > checkval) {
                          this.Hard_DN[hard_count] = DN_index[i];
                          this.Hard_floors[hard_count] = j;
                          this.ActualShift[acts_count] = dL - cur - ActualShift[acts_count - 1];
                          this.FloorsIdx[acts_count + 1, 0] = j;
                          this.FloorsIdx[acts_count, 1] = j - 1;
                          this.hard_count++;
                          this.acts_count++;
                          this.dL = 0;
                          j--;
                          this.select_place = 0;
                        }
                      }
                      break;

                    case (2):
                      break;

                  }
                }
              }

              if (this.dL > 0) {
                if (this.select_place == 0) {
                  this.Comp_floors[comp_count] = Convert.ToInt32(End_floor[num_calcs - 1]);
                  this.Comp_DN[comp_count] = DN_index[num_calcs - 1];
                  this.comp_count++;
                  this.ActualShift[acts_count] = dL;
                }
                else {
                  this.ActualShift[acts_count] = dL - ActualShift[acts_count - 1];
                }

                if (this.enable_higher_comp)
                  this.Hard_floors[hard_count] = Convert.ToInt32(higher_floor);
                else
                  this.Hard_floors[hard_count] = Convert.ToInt32(End_floor[num_calcs - 1]) + 1;

                this.Hard_DN[hard_count] = DN_index[num_calcs - 1];

                if (this.enable_higher_comp)
                  this.FloorsIdx[acts_count, 1] = Convert.ToInt32(this.higher_floor) - 1;
                else
                  this.FloorsIdx[acts_count, 1] = Convert.ToInt32(End_floor[num_calcs - 1]);
                this.hard_count++;
                this.acts_count++;
                this.dL = 0;
              }
            }

          }

          if ((this.errType + this.errl + this.errTmax + this.errTmin == 0) | (this.num_calcs > 0)) {
            this.error_message = "успешно!";
          }
          else {
            this.error_message = "ошибка! Введите корректные параметры трубопровода.";
          }

          this.textBox7.Text = error_message;

        }
      }

      button2_Click(object sender, EventArgs e) 
      {
        this.textBox2.Text = "95";
        this.textBox3.Text = "-10";
        this.comboBox2.SelectedIndex = -1;
        this.comboBox3.SelectedIndex = -1;
        this.textBox7.Text = "";
        this.textBox15.Text = "";
        this.textBox13.Text = "5";

        this.num_calcs = 0;
        this.num_floors = 0;

        this.enable_lower_comp = false;
        this.enable_higher_comp = false;

        this.lower_length = 0;
        this.higher_length = 0;

        this.lower_extension = 0;
        this.higher_extension = 0;

        this.lower_floor = 0;
        this.higher_floor = 0;

        this.k = 1.05;
        this.C = 0;
        this.Tmax = 95;
        this.Tmin = -10;

        this.comp_near_hard = false;
        this.auto_change_C = false;
        this.comp_count = 0;
        this.hard_count = 0;
        this.acts_count = 0;

        this.Comp_art_base = "";
        this.Hard_art_base = "";
        this.Connect_type = "";

        this.j_l = 0;
        this.jj_l = 0;

        this.j_h = 0;
        this.jj_h = 0;
        this.jmax_h = 0;

        this.saved = 0;

}
      Plot_Graphics() {
        fontsize: float = 9;
        cur_floor: number = 0;

        floor_save: number = 0;

        if (this.lic > 0) {
          this.Controls.Add(this.pictureBox1);

                flag = Bitmap: = flag(420, 519);
                flagGraphics = Graphics.FromImage(flag);
                floor: number = 0;

                this.step: number = Convert.ToInt32(Math.Round(500 / Convert.ToDouble(num_floors)));
                this.delta: number = Convert.ToInt32(Math.Round((Convert.ToDouble(step) / 2)) - 5);

          this.flagGraphics.TextRenderingHint = System.Drawing.Text.TextRenderingHint.AntiAlias;

          if (this.step < 12)
            this.fontsize = Convert.ToSingle(step - 3);

                skyBluePen = Pen: (Brushes.DeepSkyBlue);
          flagGraphics.DrawLine(skyBluePen, 123, 0, 123, 519);// //DrawImageUnscaled(Soft, 120, floor - (step / 2) - 2);

          this.floor += 10;


          this.cur_floor = num_floors;

          this.flagGraphics.FillRectangle(Brushes.Black, 78, floor, 100, 2);
                drawFont = Font = drawFont("Segoe UI", fontsize);
          drawFormat = StringFormat: StringFormat();

         this.flagGraphics.DrawString(String.Concat(cur_floor.ToString(), " эт"), drawFont, Brushes.Black, 20, floor, drawFormat);

          this.floor += step;
          this.cur_floor--;

          for (int i = 0; i < num_floors; i++)
          {

            flagGraphics.FillRectangle(Brushes.Black, 78, floor, 100, 2);
            if (this.cur_floor > 0)
              flagGraphics.DrawString(String.Concat(cur_floor.ToString(), " эт"), drawFont, Brushes.Black, 20, floor, drawFormat);

            this.floor += step;

            this.cur_floor--;

          }

          thiz.floor_save = floor;

          if (this.name == "") {
            this.floor = floor_save;
          }


          for (int i = 0; i < comp_count; i++)
          {
            this.floor = Convert.ToInt32(this.floor_save - Convert.ToDouble(this.step) * Comp_floors[i]);
                    Image Soft = Image.FromFile("Soft.png");
            flagGraphics.DrawImageUnscaled(Soft, 120, floor - (step / 2) - 2);
          }

          for (int i = 0; i < hard_count; i++)
          {
            this.floor = Convert.ToInt32(floor_save - Convert.ToDouble(step) * Hard_floors[i]);
                    Image Hard = Image.FromFile("Hard.png");
            this.flagGraphics.DrawImageUnscaled(Hard, 120, floor - 2);
          }


          this.pictureBox1.Image = flag;




        }


      }

      button3_Click(object sender, EventArgs e) {
        Calculation();

        Plot_Graphics();

            Form4 f = new Form4();
        f.Owner = this;
        Results(f);
        //f.Show();

        if ((this.comp_count > 0) & (this.hard_count > 0))
          this.project_created = true;

      }

      button5_Click(object sender, EventArgs e) {
  Form2 f = new Form2();
        f.Show();
      }

      button4_Click(object sender, EventArgs e) {
        
            Form3 f = new Form3();
        f.Owner = this;
        f.Show();

        if (this.num_calcs > 0) {
          for (int i = 0; i < num_calcs; i++)
          {
                     dn: string = "";

            switch (DN_index[i]) {
              case (0):
                this.dn = "DN15";
                break;

              case (1):
                this.dn = "DN20";
                break;

              case (2):
                this.dn = "DN25";
                break;

              case (3):
               this.dn = "DN32";
                break;

              case (4):
                this.dn = "DN40";
                break;

              case (5):
                this.dn = "DN50";
                break;

              case (6):
                this.dn = "DN65";
                break;

              case (7):
                this.dn = "DN80";
                break;

              case (8):
                this.dn = "DN100";
                break;

              case (9):
                this.dn = "DN125";
                break;

              case (10):
                this.dn = "DN150";
                break;

              case (11):
                this.dn = "DN200";
                break;
            }

            f.dataGridView1.Rows.Add();
            f.dataGridView1[0, i].Value = idx[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
            f.dataGridView1[1, i].Value = dn;
            f.dataGridView1[2, i].Value = Length[i].ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
            f.dataGridView1[3, i].Value = Start_floor[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
            f.dataGridView1[4, i].Value = End_floor[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
            f.dataGridView1[5, i].Value = Floor_height[i].ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
            f.dataGridView1[6, i].Value = Shift[i].ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
          }

          if (this.enable_lower_comp) {
            if (this.lower_automatic < 1)
              f.checkBox1.Checked = true;

            f.textBox1.Text = lower_length.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
            f.textBox5.Text = lower_floor.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
            f.textBox3.Text = lower_extension.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
          }

          if (this.enable_higher_comp) {
            if (this.higher_automatic < 1)
              f.checkBox2.Checked = true;

            f.textBox2.Text = higher_length.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
            f.textBox6.Text = higher_floor.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
            f.textBox4.Text = higher_extension.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
          }

          f.textBox8.Text = num_floors.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
        }

      }

      Results(Form4 f) {
      c: number = 0;

        if (this.enable_lower_comp) {
          f.dataGridView1.Rows.Add();
          f.dataGridView1[0, c].Value = "0";
          f.dataGridView1[1, c].Value = (lower_floor - 1).ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
          f.dataGridView1[2, c].Value = "-";
          f.dataGridView1[3, c].Value = lower_extension.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
          this.c++;
        }

        for (int i = 0; i < acts_count; i++)
        {
                cur_shift: string = "";
                prev_shift: double = 0;

          for (int j = FloorsIdx[i, 0]; j <= FloorsIdx[i, 1]; j++)
          {
            for (int q = 0; q < num_calcs; q++)
            {
              if ((j >= Start_floor[q]) & (j <= End_floor[q])) {
                if (this.prev_shift != Shift[q]) {
                  if (this.cur_shift == "")
                    this.cur_shift = Shift[q].ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
                  else
                    this.cur_shift = String.Concat(cur_shift, ",", Shift[q].ToString("F0", System.Globalization.CultureInfo.InvariantCulture));
                }
                this.prev_shift = Shift[q];
              }
            }
          }



          f.dataGridView1.Rows.Add();
          f.dataGridView1[0, c].Value = FloorsIdx[i, 0].ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
          f.dataGridView1[1, c].Value = FloorsIdx[i, 1].ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
          f.dataGridView1[2, c].Value = cur_shift;
          f.dataGridView1[3, c].Value = ActualShift[i].ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
          this.c++;
        }

        if (this.enable_higher_comp) {
          f.dataGridView1.Rows.Add();
          f.dataGridView1[0, c].Value = higher_floor.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
          f.dataGridView1[1, c].Value = num_floors.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
          f.dataGridView1[2, c].Value = "-";
          f.dataGridView1[3, c].Value = higher_extension.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
        }

        for (int i = 0; i < comp_count; i++)
        {
                dn: string = "";

          f.dataGridView2.Rows.Add();

          switch (Comp_DN[i]) {
            case (0):
              this.dn = "33/10.15";
              break;

            case (1):
              dn = "33/10.20";
              break;

            case (2):
              this.dn = "33/10.25";
              break;

            case (3):
              this.dn = "33/10.32";
              break;

            case (4):
              dn = "33/10.40";
              break;

            case (5):
              this.dn = "33/10.50";
              break;

            case (6):
              this.dn = "33/10.65";
              break;

            case (7):
              this.dn = "33/10.80";
              break;

            case (8):
              this.dn = "35/17.100";
              break;

            case (9):
              this.dn = "35/17.125";
              break;

            case (10):
              this.dn = "35/17.150";
              break;

            case (11):
              this.dn = "35/17.200";
              break;

          }

          f.dataGridView2[0, i].Value = Comp_floors[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
          f.dataGridView2[1, i].Value = String.Concat(Comp_art_base, dn);
        }

        for (int i = 0; i < hard_count; i++)
        {
                 dn: string = "";

          f.dataGridView3.Rows.Add();

          switch (Hard_DN[i]) {
            case (0):
              this.dn = "15";
              break;

            case (1):
              this.dn = "20";
              break;

            case (2):
              dn = "25";
              break;

            case (3):
              this.dn = "32";
              break;

            case (4):
              this.dn = "40";
              break;

            case (5):
              this.dn = "50";
              break;

            case (6):
              this.dn = "65";
              break;

            case (7):
              this.dn = "80";
              break;

            case (8):
              this.dn = "100";
              break;

            case (9):
              this.dn = "125";
              break;

            case (10):
              this.dn = "150";
              break;

            case (11):
              this.dn = "200";
              break;

          }

          f.dataGridView3[0, i].Value = Hard_floors[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
          f.dataGridView3[1, i].Value = String.Concat(Hard_art_base, dn);
        }

        f.Recalc();
      }

      button6_Click(object sender, EventArgs e) {
        Form4 f = new Form4();
        f.Owner = this;
        f.Show();
        Results(f);
      }

      comboBox3_SelectedIndexChanged(object sender, EventArgs e) {
            cur_idx: number = comboBox3.SelectedIndex;
            errTmax: numnber = 0;
            bad_params: number = 0;

        if (this.lic > 0) {
          if (this.errTmax == 0) {
            switch (this.comboBox3.SelectedIndex) {
              case (0):
                if (this.textBox15.Text == "")
                  this.bad_params++;
                if (this.textBox15.Text.Contains(","))
                  this.bad_params++;
                try { C = double.Parse(textBox15.Text, System.Globalization.CultureInfo.InvariantCulture); }
                catch { this.bad_params++; }
                break;

              case (1):
                C = (0.006214 * Tmax + 11.24) / 1000; // Группа 1
                this.auto_change_C = true;
                this.textBox15.Text = C.ToString("F4", System.Globalization.CultureInfo.InvariantCulture);
                this.auto_change_C = false;
                break;

              case (2):
                C = (0.004571 * Tmax + 9.843) / 1000; // Группа 2
                this.auto_change_C = true;
                this.textBox15.Text = C.ToString("F4", System.Globalization.CultureInfo.InvariantCulture);
                this.auto_change_C = false;
                break;

              case (3):
                C = (0.004000 * Tmax + 16.2) / 1000; // Группа 3
                this.auto_change_C = true;
                this.textBox15.Text = C.ToString("F4", System.Globalization.CultureInfo.InvariantCulture);
                this.auto_change_C = false;
                break;
            }
          }

          if (this.comboBox3.SelectedIndex == -1) {
            if (this.textBox15.Text == "") {
              this.bad_params++;
            }
          }



          if (this.bad_params > 0)
            this.textBox7.Text = "ошибка задания ТКЛР!";
          else
            this.textBox7.Text = "";

        }
      }

      textBox15_TextChanged(object sender, EventArgs e)
      {
        bad_params: number = 0;
        if (this.!auto_change_C) {
          this.comboBox3.SelectedIndex = 0;

          if (this.textBox15.Text == "")
            this.bad_params++;
          if (this.textBox15.Text.Contains(","))
            this.bad_params++;
          try { C = double.Parse(textBox15.Text, System.Globalization.CultureInfo.InvariantCulture); }
          catch { this.bad_params++; }

          if (this.bad_params > 0)
            this.textBox7.Text = "ошибка задания ТКЛР!";
          else
            this.textBox7.Text = "";
        }
}
      checkBox1_CheckedChanged(object sender, EventArgs e) {
        this.comp_near_hard = checkBox1.Checked;
      }

      textBox13_TextChanged(object sender, EventArgs e) {
            k1: double = 0;
            bad_params: number = 0;

        if (this.textBox13.Text == "")
          this.bad_params++;
        if (this.textBox13.Text.Contains(","))
          this.bad_params++;
        try { k1 = double.Parse(textBox13.Text, System.Globalization.CultureInfo.InvariantCulture); }
        catch { this.bad_params++; }

        k = (k1 / 100) + 1;

        if (this.bad_params > 0)
          this.textBox7.Text = "ошибка задания коэффициента запаса!";
        else
          this.textBox7.Text = "";
}

      textBox2_TextChanged(object sender, EventArgs e) {
        bad_params: number = 0;

        if (this.textBox2.Text == "")
          this.bad_params++;
        if (this.textBox2.Text.Contains(","))
          this.bad_params++;
        try { Tmax = double.Parse(textBox2.Text, System.Globalization.CultureInfo.InvariantCulture); }
        catch { this.bad_params++; }


        if (this.bad_params > 0)
          this.textBox7.Text = "ошибка задания максимальной температуры!";
        else {
          this.textBox7.Text = "";
          this.comboBox3_SelectedIndexChanged(sender, e);
        }
      }

      textBox3_TextChanged(object sender, EventArgs e) {
            bad_params: number = 0;

    if (this.textBox3.Text == "")
      this.bad_params++;
    if (this.textBox3.Text.Contains(","))
      this.bad_params++;
    try { Tmin = double.Parse(textBox3.Text, System.Globalization.CultureInfo.InvariantCulture); }
    catch { this.bad_params++; }

    this.name = "";

    if (this.bad_params > 0)
      this.textBox7.Text = "ошибка задания минимальной температуры!";
    else
      this.textBox7.Text = "";
      }

    конфигурациюToolStripMenuItem1_Click(object sender, EventArgs e) {
            string text = "";

    if (this.num_calcs > 0) {
                SaveFileDialog saveFileDialog1 = new SaveFileDialog();

      saveFileDialog1.Filter = "altezza configuration files (*.alt)|*.alt";//|All files (*.*)|*.*";
      saveFileDialog1.FilterIndex = 2;
      saveFileDialog1.RestoreDirectory = true;

      if (saveFileDialog1.ShowDialog() == DialogResult.OK) {
        try {
          using(StreamWriter sw = new StreamWriter(saveFileDialog1.FileName, false, System.Text.Encoding.Default))
          {
            this.text = String.Concat(comboBox2.SelectedIndex.ToString("F0", System.Globalization.CultureInfo.InvariantCulture), ",");
            this.text = String.Concat(text, comboBox3.SelectedIndex.ToString("F0", System.Globalization.CultureInfo.InvariantCulture), ",");
            this.text = String.Concat(text, k.ToString("F2", System.Globalization.CultureInfo.InvariantCulture), ",");
            this.text = String.Concat(text, C.ToString("F4", System.Globalization.CultureInfo.InvariantCulture), ",");
            this.text = String.Concat(text, Tmax.ToString("F0", System.Globalization.CultureInfo.InvariantCulture), ",");
            this.text = String.Concat(text, Tmin.ToString("F0", System.Globalization.CultureInfo.InvariantCulture), ",");
            this.text = String.Concat(text, num_floors.ToString("F0", System.Globalization.CultureInfo.InvariantCulture));

            await sw.WriteLineAsync(text);

            for (int i = 0; i < num_calcs; i++)
            {
              this.text = String.Concat(idx[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture), ",");
              this.text = String.Concat(text, DN_index[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture), ",");
              this.text = String.Concat(text, Length[i].ToString("F2", System.Globalization.CultureInfo.InvariantCulture), ",");
              this.text = String.Concat(text, Start_floor[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture), ",");
              this.text = String.Concat(text, End_floor[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture), ",");
              this.text = String.Concat(text, Floor_height[i].ToString("F2", System.Globalization.CultureInfo.InvariantCulture), ",");
              this.text = String.Concat(text, Shift[i].ToString("F2", System.Globalization.CultureInfo.InvariantCulture));

              await sw.WriteLineAsync(text);
            }

            if (this.enable_lower_comp) {
              this.text = String.Concat("1,", lower_length.ToString("F2", System.Globalization.CultureInfo.InvariantCulture), ",");
              this.text = String.Concat(text, lower_floor.ToString("F0", System.Globalization.CultureInfo.InvariantCulture), ",");
              this.text = String.Concat(text, lower_extension.ToString("F2", System.Globalization.CultureInfo.InvariantCulture));

              await sw.WriteLineAsync(text);
            }
            else {
              await sw.WriteLineAsync("0,0.00,0,0.00");
            }

            if (this.enable_higher_comp) {
              this.text = String.Concat("1,", higher_length.ToString("F2", System.Globalization.CultureInfo.InvariantCulture), ",");
              this.text = String.Concat(text, higher_floor.ToString("F0", System.Globalization.CultureInfo.InvariantCulture), ",");
              this.text = String.Concat(text, higher_extension.ToString("F2", System.Globalization.CultureInfo.InvariantCulture));

              await sw.WriteLineAsync(text);
            }
            else {
              await sw.WriteLineAsync("0,0.00,0,0.00");
            }

          }

          this.textBox7.Text = "Конфигурация сохранена!";
        }
        catch (Exception err)
        {
          this.textBox7.Text = err.Message;
        }

      }
    }
    else {
      this.textBox7.Text = "Конфигурация отсутствует!";
    }
      }

       конфигурациюToolStripMenuItem_Click(object sender, EventArgs e) {
            string[] line = new string[30];
            count: number = 0;
            bad_params: number = 0;
            j: number = 0;

       button2_Click(sender, e);

       OpenFileDialog openFileDialog1 = new OpenFileDialog();

       openFileDialog1.Filter = "altezza configuration files (*.alt)|*.alt";//|All files (*.*)|*.*";
       openFileDialog1.FilterIndex = 2;
       openFileDialog1.RestoreDirectory = true;

    if (openFileDialog1.ShowDialog() == DialogResult.OK) {

      try {
        using(StreamReader sr = new StreamReader(openFileDialog1.FileName, System.Text.Encoding.Default))
        {

                        read: number = 0;

          if (this.name == "") {
            this.read = 0;
          }

          while (this.read == 0) {

            line[count] = sr.ReadLine();
            if (line[count] == null)
              this.read = 1;

            count++;
          }
        }

        count--;


        for (int i = 0; i < count; i++)
        {

          if (i == 0) {
            string[] vals = line[i].Split(",");

            try {
              k = double.Parse(vals[2], System.Globalization.CultureInfo.InvariantCulture);
              Tmax = double.Parse(vals[4], System.Globalization.CultureInfo.InvariantCulture);
              Tmin = double.Parse(vals[5], System.Globalization.CultureInfo.InvariantCulture);
              comboBox2.SelectedIndex = int.Parse(vals[0]);
              comboBox3.SelectedIndex = int.Parse(vals[1]);
              if (comboBox3.SelectedIndex == 0)
                C = double.Parse(vals[3], System.Globalization.CultureInfo.InvariantCulture);

              num_floors = int.Parse(vals[6], System.Globalization.CultureInfo.InvariantCulture);

              textBox2.Text = Tmax.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
              textBox3.Text = Tmin.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
              textBox13.Text = ((k - 1) * 100).ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
            }
            catch
            { bad_params++; }
          }

          if ((i > 0) & (i < (count - 2))) {
            string[] vals = line[i].Split(",");

            try {
              idx[j] = int.Parse(vals[0], System.Globalization.CultureInfo.InvariantCulture);
              DN_index[j] = int.Parse(vals[1], System.Globalization.CultureInfo.InvariantCulture);
              Length[j] = double.Parse(vals[2], System.Globalization.CultureInfo.InvariantCulture);
              Start_floor[j] = double.Parse(vals[3], System.Globalization.CultureInfo.InvariantCulture);
              End_floor[j] = double.Parse(vals[4], System.Globalization.CultureInfo.InvariantCulture);
              Floor_height[j] = double.Parse(vals[5], System.Globalization.CultureInfo.InvariantCulture);
              Shift[j] = double.Parse(vals[6], System.Globalization.CultureInfo.InvariantCulture);
              j++;
              num_calcs = j;
            }
            catch
            { bad_params++; }
          }

          num_calcs = j;

          if (i == (count - 2)) {
            string[] vals = line[i].Split(",");

            try {
                                int enable = int.Parse(vals[0], System.Globalization.CultureInfo.InvariantCulture);

              if (this.enable > 0) {
                this.enable_lower_comp = true;
                this.lower_length = double.Parse(vals[1], System.Globalization.CultureInfo.InvariantCulture);
                this.lower_floor = double.Parse(vals[2], System.Globalization.CultureInfo.InvariantCulture);
                this.lower_extension = double.Parse(vals[3], System.Globalization.CultureInfo.InvariantCulture);
              }
            }
            catch
            { this.bad_params++; }
          }

          if (i == (count - 1)) {
            string[] vals = line[i].Split(",");

            try {
                                enable: number = int.Parse(vals[0], System.Globalization.CultureInfo.InvariantCulture);

              if (this.enable > 0) {
                this.enable_higher_comp = true;
                this.higher_length = double.Parse(vals[1], System.Globalization.CultureInfo.InvariantCulture);
                this.higher_floor = double.Parse(vals[2], System.Globalization.CultureInfo.InvariantCulture);
                this.higher_extension = double.Parse(vals[3], System.Globalization.CultureInfo.InvariantCulture);
              }
            }
            catch
            { this.bad_params++; }
          }
        }

        this.textBox7.Text = String.Concat("Конфигурация загружена! ", bad_params.ToString(), " errors.");
      }
      catch (Exception err)
      {
        this.textBox7.Text = err.Message;
      }
    }
    else {
      this.textBox7.Text = String.Concat("Некорректный файл конфигурации!");
    }
      }


      button1_Click(object sender, EventArgs e) {

        Plot_Graphics();
      }

public void click() {
            nic_count: number = 0;
            correct_nic: boolean = false;

    string[] macAddr;


            string writePath = @"nics_found.txt";

    using(StreamWriter sw = new StreamWriter(writePath, false, System.Text.Encoding.Default))
    {
      NetworkInterface[] nics = NetworkInterface.GetAllNetworkInterfaces();

                k: number = nics.Length;
      this.nic_count = 0;
      this.macAddr = new string[k];
                String sMacAddress = string.Empty;
      foreach(NetworkInterface adapter in nics)
      {
        this.sMacAddress = adapter.GetPhysicalAddress().ToString();
        sw.WriteLine(sMacAddress);

        this.macAddr[nic_count] = sMacAddress;
        this.nic_count++;

      }
    }

    this.lic = 0;


            /*
            XmlDocument document = new XmlDocument();

            // Load an XML file into the XmlDocument object.
            document.PreserveWhitespace = true;
            document.Load("license.xml");

            XmlElement signature;

            try
            {
                RSACryptoServiceProvider rsa = new RSACryptoServiceProvider(2048);

                FileInfo fi = new FileInfo("license.xml");
                //if (fi.DirectoryName == null) return -7;
                string keyFile = Path.Combine(fi.DirectoryName, "signature.key");
                using (StreamWriter writer = new StreamWriter(keyFile))
                        writer.Write(rsa.ToXmlString(true));


                SignedXml signedXml = new SignedXml(document) { SigningKey = rsa };
                KeyInfo info = new KeyInfo();
                info.AddClause(new RSAKeyValue(rsa));
                signedXml.KeyInfo = info;

                Reference reference = new Reference { Uri = "" };

                reference.AddTransform(new XmlDsigEnvelopedSignatureTransform());
                reference.AddTransform(new XmlDsigC14NTransform());

                signedXml.AddReference(reference);
                signedXml.ComputeSignature();

                signature = signedXml.GetXml();

                if (document.DocumentElement == null)
                {
                    Console.WriteLine("Document has no document element.");

                }
                if (signature != null)
                    document.DocumentElement.AppendChild(document.ImportNode(signature, true));

                document.Save("license.xml");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error signing XML file: {0}.", ex.Message);

            }

            */

            XmlDocument document = new XmlDocument();
            this.document.PreserveWhitespace = true;
            this.document.Load("license.xml");

    if (this.document == null) throw new ArgumentNullException(nameof(document), "XML document is null.");

            SignedXml signed = new SignedXml(document);
            XmlNodeList list = document.GetElementsByTagName("Signature");
    if (this.list == null)
      throw new CryptographicException($"The XML document has no signature.");
    if (this.list.Count > 1)
      throw new CryptographicException($"The XML document has more than one signature.");

    signed.LoadXml((XmlElement)list[0]);

            RSA rsa = null;
    foreach(this.KeyInfoClause clause in signed.KeyInfo)
    {
                RSAKeyValue value = clause as RSAKeyValue;
      if (this.value == null) continue;
                RSAKeyValue key = value;
      rsa = key.Key;
    }

            check: boolean = (rsa != null && signed.CheckSignature(rsa));

    if (this.check) {
                XmlNodeList number = document.GetElementsByTagName("number");

                StringBuilder lic_id_str = new StringBuilder();

      //Iterates through your String appending the available Names
      foreach(XmlNode node in number)
      {
        lic_id_str.Append(node.InnerText + ",");
      }

                //Variable for your final string (replaces the trailing comma with a period)
                string lic_id = lic_id_str.Remove(lic_id_str.Length - 1, 1).ToString() + ".";

      this.lic_id = lic_id.Replace("-", string.Empty);
      this.lic_id = lic_id.Replace(".", string.Empty);


      for (int i = 0; i < nic_count; i++)
      {
        if (this.lic_id == macAddr[i]) {
          this.correct_nic = true;
        }
      }

      if (this.correct_nic) {

                    XmlNodeList expiry = document.GetElementsByTagName("expiry");

                    StringBuilder lic_exp_str = new StringBuilder();

        //Iterates through your String appending the available Names
        foreach(XmlNode node in expiry)
        {
          lic_exp_str.Append(node.InnerText + ",");
        }

                    //Variable for your final string (replaces the trailing comma with a period)
                    string lic_exp = lic_exp_str.Remove(lic_exp_str.Length - 1, 1).ToString() + ".";


        string[] date = lic_exp.Split("/");

                    DateTime now = DateTime.Now;

        date[2] = date[2].Replace(".", string.Empty);

                    lic_month: number = Convert.ToInt32(date[0]);
                    lic_day: number = Convert.ToInt32(date[1]);
                    lic_year: number = Convert.ToInt32(date[2]);

        if (this.lic_year > now.Year) {
          this.lic = 1;
        }
        else {
          if (this.lic_year == now.Year) {
            if (this.lic_month > now.Month) {
              this.lic = 1;
            }
            else {
              if (this.lic_month == now.Month) {
                if (this.lic_day >= now.Day) {
                  this.lic = 1;
                }
              }
            }
          }
        }

        if (this.lic == 0) {
          this.textBox7.Text = "Ошибка лицензии!";
        }
        else {
          this.textBox7.Text = String.Concat("Лицензия подтверждена до ",
            this.lic_day.ToString().PadLeft(2, '0'), ".",
            this.lic_month.ToString().PadLeft(2, '0'), ".",
            this.lic_year.ToString().PadLeft(4, '0'), "!");
        }

      }
      else {
        this.textBox7.Text = "Ошибка лицензии!";
      }


    }
    else {
      this.textBox7.Text = "Ошибка лицензии!";
    }



    /* /// OLD KEY CHECK PROCEDURES
    // Sign Code
    try
    {
        // Create a new CspParameters object to specify
        // a key container.
        CspParameters cspParams = new CspParameters();
        cspParams.KeyContainerName = "XML_DSIG_RSA_KEY";

        // Create a new RSA signing key and save it in the container.
        RSACryptoServiceProvider rsaKey = new RSACryptoServiceProvider(cspParams);

        // Create a new XML document.
        XmlDocument xmlDoc = new XmlDocument();

        // Load an XML file into the XmlDocument object.
        xmlDoc.PreserveWhitespace = true;
        xmlDoc.Load("license.xml");

        // Sign the XML document.
        SignXml(xmlDoc, rsaKey);

        textBox7.Text = "XML file signed.";

        // Save the document.
        xmlDoc.Save("license.xml");
    }
    catch (Exception e)
    {
        textBox7.Text = e.Message;
    }
    */

    /*
    // Check Sign Code
    try
    {
        // Create a new CspParameters object to specify
        // a key container.
        CspParameters cspParams = new CspParameters();
        cspParams.KeyContainerName = "XML_DSIG_RSA_KEY";

        // Create a new RSA signing key and save it in the container.
        RSACryptoServiceProvider rsaKey = new RSACryptoServiceProvider(cspParams);

        // Create a new XML document.
        XmlDocument xmlDoc = new XmlDocument();

        // Load an XML file into the XmlDocument object.
        xmlDoc.PreserveWhitespace = true;
        xmlDoc.Load("license.xml");

        // Verify the signature of the signed XML.
        textBox7.Text = "Проверка лицензии...";
        bool result = VerifyXml(xmlDoc, rsaKey);

        // Display the results of the signature verification to
        // the console.
        if (result)
        {
            

            XmlNodeList number = xmlDoc.GetElementsByTagName("number");

            StringBuilder lic_id_str = new StringBuilder();

            //Iterates through your String appending the available Names
            foreach (XmlNode node in number)
            {
                lic_id_str.Append(node.InnerText + ",");
            }

            //Variable for your final string (replaces the trailing comma with a period)
            string lic_id = lic_id_str.Remove(lic_id_str.Length - 1, 1).ToString() + ".";

            lic_id = lic_id.Replace("-", string.Empty);


            XmlNodeList expiry = xmlDoc.GetElementsByTagName("expiry");

            StringBuilder lic_exp_str = new StringBuilder();

            //Iterates through your String appending the available Names
            foreach (XmlNode node in expiry)
            {
                lic_exp_str.Append(node.InnerText + ",");
            }

            //Variable for your final string (replaces the trailing comma with a period)
            string lic_exp = lic_exp_str.Remove(lic_exp_str.Length - 1, 1).ToString() + ".";


            string[] date = lic_exp.Split("/");

            DateTime now = DateTime.Now;

            date[2] = date[2].Replace(".", string.Empty);

            int lic_month = Convert.ToInt32(date[0]);
            int lic_day = Convert.ToInt32(date[1]);
            int lic_year = Convert.ToInt32(date[2]);

            if (lic_year > now.Year)
            {
                lic = 1;
            }
            else
            {
                if (lic_year == now.Year)
                {
                    if (lic_month > now.Month)
                    {
                        lic = 1;
                    }
                    else
                    {
                        if (lic_month == now.Month)
                        {
                            if (lic_day >= now.Day)
                            {
                                lic = 1;
                            }
                        }
                    }
                }
            }

            if (lic == 0)
            {
                textBox7.Text = "Ошибка лицензии!";
            }
            else
            {
                textBox7.Text = String.Concat("Лицензия подтверждена до ",lic_day.ToString(),".",lic_month.ToString(),".",lic_year.ToString(),"!");
            }
            
        }
        else
        {
            textBox7.Text = "Ошибка лицензии!";
        }
    }
    catch (Exception e)
    {
        textBox7.Text = e.Message;
    }
    

    */


  }

   button7_Click(object sender, EventArgs e) {
    if ((this.comp_count > 0) & (this.hard_count > 0)) {
                use_GOST_pipes: boolean = true;

      // Задать доп. параметры:
      // Допустимая несоосность b [см]
      // double b = 0;

      // Для всех диаметров используемых труб:
      // Внешний диаметр трубы [мм]
      // double Dn = 0;
      // Толщина стенки [мм]
      // double Dt = 0;
      // Масса погонного метра трубы [кг/м)
      // double Mt1 = 0;
      // Модуль упругости стали [МПа]
      // double E = 0;

      int[] dn_arr = new int[num_floors];
      double[] Dn = new double[num_floors];
      double[] Dt = new double[num_floors];
      double[] Mt = new double[num_floors];
      double[] Sv = new double[num_floors];
      double[] Fh = new double[num_floors];
      double[] Jx = new double[num_floors];

      for (int i = Hard_floors[0]; i < num_floors; i++)
      {
                    q: number = 0;

        while (q < num_calcs) {
          if ((i >= Start_floor[q]) & (i <= End_floor[q])) {
            this.Fh[i] = Floor_height[q];
            if (this.use_GOST_pipes) // Используя ГОСТ 3262-75 и ГОСТ 10704-91 для Ду200
            {
              dn_arr[i] = DN_index[q];
              switch (DN_index[q]) {
                case (0):
                  //dn = "DN15";
                  this.Dn[i] = 21.3;
                  this.Dt[i] = 2.35;
                  this.Mt[i] = 1.1;
                  break;

                case (1):
                  //dn = "DN20";
                  this.Dn[i] = 26.8;
                  this.Dt[i] = 2.5;
                  this.Mt[i] = 1.66;
                  break;

                case (2):
                  //dn = "DN25";
                  this.Dn[i] = 33.5;
                  this.Dt[i] = 3.2;
                  this.Mt[i] = 2.39;
                  break;

                case (3):
                  //dn = "DN32";
                  this.Dn[i] = 42.3;
                  this.Dt[i] = 3.2;
                  this.Mt[i] = 3.09;
                  break;

                case (4):
                  //dn = "DN40";
                  this.Dn[i] = 48;
                  this.Dt[i] = 3.5;
                  this.Mt[i] = 3.84;
                  break;

                case (5):
                  //dn = "DN50";
                  this.Dn[i] = 60;
                  this.Dt[i] = 3.5;
                  this.Mt[i] = 4.88;
                  break;

                case (6):
                  //dn = "DN65";
                  this.Dn[i] = 75.5;
                  this.Dt[i] = 4;
                  this.Mt[i] = 7.05;
                  break;

                case (7):
                  //dn = "DN80";
                  this.Dn[i] = 88.5;
                  this.Dt[i] = 4;
                  this.Mt[i] = 8.34;
                  break;

                case (8):
                  //dn = "DN100";
                  this.Dn[i] = 114;
                  this.Dt[i] = 4.5;
                  this.Mt[i] = 12.15;
                  break;

                case (9):
                  //dn = "DN125";
                  this.Dn[i] = 140;
                  this.Dt[i] = 4.5;
                  this.Mt[i] = 15.04;
                  break;

                case (10):
                  //dn = "DN150";
                  this.Dn[i] = 165;
                  this.Dt[i] = 4.5;
                  this.Mt[i] = 17.81;
                  break;

                case (11):
                  //dn = "DN200";
                  this.Dn[i] = 219;
                  this.Dt[i] = 5;
                  this.Mt[i] = 26.39;
                  break;
              }
                                tmp: double = (Dn[i] * 0.001 / 2 - Dt[i] * 0.001);
              this.Sv[i] = 3.1415926535 * tmp * tmp;

                                t1: double = Dn[i] * 0.01;
                                t2: double = (Dn[i] - (Dt[i] * 2)) * 0.01;

              this.Jx[i] = 3.1415926535 * ((t1 * t1 * t1 * t1) - (t2 * t2 * t2 * t2)) / 64;
            }
            this.q = num_calcs;
          }
          q++;
        }
      }

      double[] F_pipe = new double[hard_count];
      int[] nst = new int[hard_count];
                double F_water = 0;
      double[] Overall_Shift = new double[hard_count];

      for (int i = 0; i < (hard_count - 1); i++)
      {
                    int qq = 0;
        this.F_pipe[i] = 0;
        this.Overall_Shift[i] = 0;
        for (int j = Hard_floors[i]; j < Hard_floors[i + 1]; j++)
        {
          qq++;
          this.F_pipe[i] += Mt[j];

          this.F_water += Sv[j] * 1000 * Fh[j];

          this.Overall_Shift[i] += C * Fh[j] * (Tmax - Tmin) * k;

        }
        nst[i] = qq;
      }

      if (enable_higher_comp) {
        this.F_water += Sv[Hard_floors[hard_count - 1] - 1] * 1000 * higher_length;
      }




                // Из характеристик сильфона по артикулу прога сама подставляет:
                // Эффективная площадь Sef [см2]
                // Жесткость осевого хода Lbd [кН/м]
                // Длина сильфона a [мм]
                double PN = 16.3155; // [кгс/см2]

      double[] Sef = new double[comp_count];
      double[] Lbd = new double[comp_count];
      double[] a = new double[comp_count];

      double[] F_Comp = new double[comp_count];

                type: number = -1;
      switch (comboBox2.SelectedItem) {
        case ("Отопление, сварное соединение"):
          this.type = 0;
          break;

        case ("Водоснабжение, резьбовое соединение"):
          this.type = 1;
          break;

        case ("Водоснабжение, грувлок соединение"):
          this.type = 2;
          break;
      }
      for (int i = 0; i < comp_count; i++)
      {
        switch (type) {
          case 0:
            switch (Comp_DN[i]) {
              case (0):
                this.Sef[i] = 8;
                this.Lbd[i] = 21;
                this.a[i] = 237;
                break;

              case (1):
                this.Sef[i] = 8;
                this.Lbd[i] = 21;
                this.a[i] = 237;
                break;

              case (2):
                this.Sef[i] = 12;
                this.Lbd[i] = 22;
                this.a[i] = 243;
                break;

              case (3):
                this.Sef[i] = 18;
                this.Lbd[i] = 23;
                this.a[i] = 245;
                break;

              case (4):
                this.Sef[i] = 23;
                this.Lbd[i] = 24;
                this.a[i] = 245;
                break;

              case (5):
                this.Sef[i] = 32;
                this.Lbd[i] = 38;
                this.a[i] = 235;
                break;

              case (6):
                this.Sef[i] = 55;
                this.Lbd[i] = 42;
                this.a[i] = 235;
                break;

              case (7):
                this.Sef[i] = 75;
                this.Lbd[i] = 47;
                this.a[i] = 262;
                break;

              case (8):
                this.Sef[i] = 122;
                this.Lbd[i] = 64;
                this.a[i] = 330;
                break;

              case (9):
                this.Sef[i] = 173;
                this.Lbd[i] = 127;
                this.a[i] = 345;
                break;

              case (10):
                this.Sef[i] = 245;
                this.Lbd[i] = 129;
                this.a[i] = 360;
                break;

              case (11):
                this,Sef[i] = 434;
                this.Lbd[i] = 157;
                this.a[i] = 390;
                break;

            }
            break;

          case 1:
            switch (Comp_DN[i]) {
              case (0):
                this.Sef[i] = 8;
                this.Lbd[i] = 21;
                this.a[i] = 255;
                break;

              case (1):
                this.Sef[i] = 8;
                this.Lbd[i] = 21;
                this.a[i] = 255;
                break;

              case (2):
                this.Sef[i] = 12;
                this.Lbd[i] = 22;
                this.a[i] = 265;
                break;

              case (3):
                this.Sef[i] = 18;
                this.Lbd[i] = 23;
                this.a[i] = 280;
                break;

              case (4):
                this.Sef[i] = 23;
                this.Lbd[i] = 24;
                this.a[i] = 285;
                break;

              case (5):
                this.Sef[i] = 32;
                this.Lbd[i] = 38;
                this.a[i] = 285;
                break;

              case (6):
                this.Sef[i] = 55;
                this.Lbd[i] = 42;
                this.a[i] = 320;
                break;

              case (7):
                this.Sef[i] = 75;
                this.Lbd[i] = 47;
                this.a[i] = 347;
                break;

              case (8):
                this.Sef[i] = 122;
                this.Lbd[i] = 64;
                this.a[i] = 400;
                break;

              case (9):
                this.Sef[i] = 173;
                this.Lbd[i] = 127;
                this.a[i] = 420;
                break;

              case (10):
                this.Sef[i] = 245;
                this.Lbd[i] = 129;
                this.a[i] = 440;
                break;

              case (11):
                this.Sef[i] = 434;
                this.Lbd[i] = 157;
                this.a[i] = 475;
                break;

            }
            break;

          case 2:
            switch (Comp_DN[i]) {
              case (0):
                this.Sef[i] = 0;
                this.Lbd[i] = 0;
                this.a[i] = 0;
                break;

              case (1):
                this.Sef[i] = 0;
                this.Lbd[i] = 0;
                this.a[i] = 0;
                break;

              case (2):
                this.Sef[i] = 12;
                this.Lbd[i] = 22;
                this.a[i] = 315;
                break;

              case (3):
                this.Sef[i] = 18;
                this.Lbd[i] = 23;
                this.a[i] = 320;
                break;

              case (4):
                this.Sef[i] = 23;
                this.Lbd[i] = 24;
                this.a[i] = 320;
                break;

              case (5):
                this.Sef[i] = 32;
                this.Lbd[i] = 38;
                this.a[i] = 305;
                break;

              case (6):
                this.Sef[i] = 55;
                this.Lbd[i] = 42;
                this.a[i] = 305;
                break;

              case (7):
                this.Sef[i] = 75;
                this.Lbd[i] = 47;
                this.a[i] = 335;
                break;

              case (8):
                this.Sef[i] = 122;
                this.Lbd[i] = 64;
                this.a[i] = 385;
                break;

              case (9):
                this.Sef[i] = 0;
                this.Lbd[i] = 0;
                this.a[i] = 0;
                break;

              case (10):
                this.Sef[i] = 0;
                this.Lbd[i] = 0;
                this.a[i] = 0;
                break;

              case (11):
                this.Sef[i] = 0;
                this.Lbd[i] = 0;
                this.a[i] = 0;
                break;

            }
            break;
        }

        F_Comp[i] = 1.5 * PN * Sef[i] + 101.972 * Lbd[i] * Overall_Shift[i] * 0.001;

      }

      double[] F = new double[hard_count];
      for (int i = 0; i < (hard_count - 1); i++)
      {
        if (i == 0)
          this.F[i] = F_pipe[i] + F_water + F_Comp[i];
        else
          this.F[i] = F_pipe[i] + F_Comp[i];
      }


                Form5 f = new Form5();
      f.Owner = this;
      f.Show();

      for (int i = 0; i < (hard_count - 1); i++)
      {
        f.dataGridView1.Rows.Add();
        f.dataGridView1[0, i].Value = i.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
        f.dataGridView1[1, i].Value = F[i].ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
      }

      for (int i = 0; i < comp_count; i++)
      {
        f.dataGridView2.Rows.Add();
        f.dataGridView2[0, i].Value = i.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
        f.dataGridView2[1, i].Value = Overall_Shift[i].ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
      }

      // реальный осевой ход компенсов берем из расчета

      // Расчет для каждого диаметра труб:
      // Площадь внутреннего сечения трубы S = pi * (0.060/2 - 0.003)^2 [м]
      // Моммент инерции сечения трубы J = pi * ( 6^4 - (6 - 0.3*2)^4 ) / 64 [см^2]
      // Масса
      // Рассчитываем общий вес воды

      // Определяем участки между НО
      // Для каждого участка считаем массу труб, вес сильфона, вес арматуры и изоляции(?). Для первой НО добавляем вес воды




      // Для каждого участка между НО считаем устойчивость


    }
  }

   проектToolStripMenuItem1_Click(object sender, EventArgs e) {
            text: string = "";

    if (this.project_created) {
      if (this.num_calcs > 0) {
                    SaveFileDialog saveFileDialog1 = new SaveFileDialog();

        saveFileDialog1.Filter = "altezza project files (*.altp)|*.altp";
        saveFileDialog1.FilterIndex = 2;
        saveFileDialog1.RestoreDirectory = true;

        if (saveFileDialog1.ShowDialog() == DialogResult.OK) {
          try {
            using(StreamWriter sw = new StreamWriter(saveFileDialog1.FileName, false, System.Text.Encoding.Default))
            {
              this.text = String.Concat(comboBox2.SelectedIndex.ToString("F0", System.Globalization.CultureInfo.InvariantCulture), ",");
              this.text = String.Concat(text, comboBox3.SelectedIndex.ToString("F0", System.Globalization.CultureInfo.InvariantCulture), ",");
              this.text = String.Concat(text, k.ToString("F2", System.Globalization.CultureInfo.InvariantCulture), ",");
              this.text = String.Concat(text, C.ToString("F4", System.Globalization.CultureInfo.InvariantCulture), ",");
              this.text = String.Concat(text, Tmax.ToString("F0", System.Globalization.CultureInfo.InvariantCulture), ",");
              this.text = String.Concat(text, Tmin.ToString("F0", System.Globalization.CultureInfo.InvariantCulture), ",");
              this.text = String.Concat(text, num_floors.ToString("F0", System.Globalization.CultureInfo.InvariantCulture));

              await sw.WriteLineAsync(text);

              for (int i = 0; i < num_calcs; i++)
              {
                this.text = String.Concat(idx[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture), ",");
                this.text = String.Concat(text, DN_index[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture), ",");
                this.text = String.Concat(text, Length[i].ToString("F2", System.Globalization.CultureInfo.InvariantCulture), ",");
                this.text = String.Concat(text, Start_floor[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture), ",");
                this.text = String.Concat(text, End_floor[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture), ",");
                this.text = String.Concat(text, Floor_height[i].ToString("F2", System.Globalization.CultureInfo.InvariantCulture), ",");
                this.text = String.Concat(text, Shift[i].ToString("F2", System.Globalization.CultureInfo.InvariantCulture));

                await sw.WriteLineAsync(text);
              }

              if (this.enable_lower_comp) {
                this.text = String.Concat("1,", lower_length.ToString("F2", System.Globalization.CultureInfo.InvariantCulture), ",");
                this.text = String.Concat(text, lower_floor.ToString("F0", System.Globalization.CultureInfo.InvariantCulture), ",");
                this.text = String.Concat(text, lower_extension.ToString("F2", System.Globalization.CultureInfo.InvariantCulture));

                await sw.WriteLineAsync(text);
              }
              else {
                await sw.WriteLineAsync("0,0.00,0,0.00");
              }

              if (this.enable_higher_comp) {
                this.text = String.Concat("1,", higher_length.ToString("F2", System.Globalization.CultureInfo.InvariantCulture), ",");
                this.text = String.Concat(text, higher_floor.ToString("F0", System.Globalization.CultureInfo.InvariantCulture), ",");
                this.text = String.Concat(text, higher_extension.ToString("F2", System.Globalization.CultureInfo.InvariantCulture));

                await sw.WriteLineAsync(text);
              }
              else {
                await sw.WriteLineAsync("0,0.00,0,0.00");
              }

              this.text = comp_count.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
              for (int i = 0; i < comp_count; i++)
              {
                this.text = String.Concat(text, ",", Comp_floors[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture));
                this.text = String.Concat(text, ",", Comp_DN[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture));
              }
              await sw.WriteLineAsync(text);

              this.text = hard_count.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
              for (int i = 0; i < hard_count; i++)
              {
                this.text = String.Concat(text, ",", Hard_floors[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture));
                this.text = String.Concat(text, ",", Hard_DN[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture));
              }
              await sw.WriteLineAsync(text);

              this.text = acts_count.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
              for (int i = 0; i < acts_count; i++)
              {
                this.text = String.Concat(text, ",", FloorsIdx[i, 0].ToString("F0", System.Globalization.CultureInfo.InvariantCulture));
                this.text = String.Concat(text, ",", FloorsIdx[i, 1].ToString("F0", System.Globalization.CultureInfo.InvariantCulture));
                this.text = String.Concat(text, ",", ActualShift[i].ToString("F2", System.Globalization.CultureInfo.InvariantCulture));
              }
              await sw.WriteLineAsync(text);

            }

            this.textBox7.Text = "Проект сохранен!";
          }
          catch (Exception err)
          {
            this.textBox7.Text = err.Message;
          }

        }
      }
      else {
        this.textBox7.Text = "Проект отсутствует!";
      }
    }
    else {
      this.textBox7.Text = "Проект отсутствует!";
    }
  }

  проектToolStripMenuItem_Click(object sender, EventArgs e) {
    string[] line = new string[30];
            count: number = 0;
            bad_params: number = 0;
            j: number = 0;

    button2_Click(sender, e);

            OpenFileDialog openFileDialog1 = new OpenFileDialog();

    openFileDialog1.Filter = "altezza project files (*.altp)|*.altp";//|All files (*.*)|*.*";
    openFileDialog1.FilterIndex = 2;
    openFileDialog1.RestoreDirectory = true;

    if (openFileDialog1.ShowDialog() == DialogResult.OK) {

      try {
        using(StreamReader sr = new StreamReader(openFileDialog1.FileName, System.Text.Encoding.Default))
        {

                         read: number = 0;

          if (this.name == "") {
            this.read = 0;
          }

          while (read == 0) {

            line[count] = sr.ReadLine();
            if (line[count] == null)
              this.read = 1;

            count++;
          }
        }

        count--;


        for (int i = 0; i < count; i++)
        {

          if (i == 0) {
            string[] vals = line[i].Split(",");

            try {
              this.k = double.Parse(vals[2], System.Globalization.CultureInfo.InvariantCulture);
              this.Tmax = double.Parse(vals[4], System.Globalization.CultureInfo.InvariantCulture);
              this.Tmin = double.Parse(vals[5], System.Globalization.CultureInfo.InvariantCulture);
              this.comboBox2.SelectedIndex = int.Parse(vals[0]);
              this.comboBox3.SelectedIndex = int.Parse(vals[1]);
              if (this.comboBox3.SelectedIndex == 0)
                C = double.Parse(vals[3], System.Globalization.CultureInfo.InvariantCulture);

              this.num_floors = int.Parse(vals[6], System.Globalization.CultureInfo.InvariantCulture);

              this.textBox2.Text = Tmax.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
              this.textBox3.Text = Tmin.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
              this.textBox13.Text = ((k - 1) * 100).ToString("F0", System.Globalization.CultureInfo.InvariantCulture);

              switch (this.comboBox2.SelectedItem) {
                case ("Отопление, сварное соединение"):
                  this.Comp_art_base = "АЛЬТЕЗА.А.X.1.6.";
                  this.Hard_art_base = "АЛЬТЕЗА.A.Н.О-";
                  this.Connect_type = "Сварка";
                  break;

                case ("Водоснабжение, резьбовое соединение"):
                  this.Comp_art_base = "АЛЬТЕЗА.B.X.1.6.";
                  this.Hard_art_base = "АЛЬТЕЗА.B.Н.О-";
                  this.Connect_type = "Резьба/Фланец";
                  break;

                case ("Водоснабжение, грувлок соединение"):
                  this.Comp_art_base = "АЛЬТЕЗА.B.X.1.6.";
                  this.Hard_art_base = "АЛЬТЕЗА.B.Н.О-";
                  this.Connect_type = "Грувлок";
                  break;
              }
            }
            catch
            { this.bad_params++; }
          }

          if ((i > 0) & (i < (count - 5))) {
            string[] vals = line[i].Split(",");

            try {
              this.idx[j] = int.Parse(vals[0], System.Globalization.CultureInfo.InvariantCulture);
              this.DN_index[j] = int.Parse(vals[1], System.Globalization.CultureInfo.InvariantCulture);
              this.Length[j] = double.Parse(vals[2], System.Globalization.CultureInfo.InvariantCulture);
              this.Start_floor[j] = double.Parse(vals[3], System.Globalization.CultureInfo.InvariantCulture);
              this.End_floor[j] = double.Parse(vals[4], System.Globalization.CultureInfo.InvariantCulture);
              this.Floor_height[j] = double.Parse(vals[5], System.Globalization.CultureInfo.InvariantCulture);
              this.Shift[j] = double.Parse(vals[6], System.Globalization.CultureInfo.InvariantCulture);
              this.j++;
              this.num_calcs = j;
            }
            catch
            { this.bad_params++; }
          }



          if (i == (count - 5)) {
            string[] vals = line[i].Split(",");

            try {
                                enable: number = int.Parse(vals[0], System.Globalization.CultureInfo.InvariantCulture);

              if (this.enable > 0) {
                this.enable_lower_comp = true;
                this.lower_length = double.Parse(vals[1], System.Globalization.CultureInfo.InvariantCulture);
                this.lower_floor = double.Parse(vals[2], System.Globalization.CultureInfo.InvariantCulture);
                this.lower_extension = double.Parse(vals[3], System.Globalization.CultureInfo.InvariantCulture);
              }
            }
            catch
            { this.bad_params++; }
          }

          if (i == (count - 4)) {
            string[] vals = line[i].Split(",");

            try {
                                enable: number = int.Parse(vals[0], System.Globalization.CultureInfo.InvariantCulture);

              if (this.enable > 0) {
                this.enable_higher_comp = true;
                this.higher_length = double.Parse(vals[1], System.Globalization.CultureInfo.InvariantCulture);
                this.higher_floor = double.Parse(vals[2], System.Globalization.CultureInfo.InvariantCulture);
                this.higher_extension = double.Parse(vals[3], System.Globalization.CultureInfo.InvariantCulture);
              }
            }
            catch
            { this.bad_params++; }
          }

          if (i == (count - 3)) {
            string[] vals = line[i].Split(",");

            try {
              this.comp_count = int.Parse(vals[0], System.Globalization.CultureInfo.InvariantCulture);

              for (j = 0; j < comp_count; j++) {
                this.Comp_floors[j] = int.Parse(vals[(j * 2) + 1], System.Globalization.CultureInfo.InvariantCulture);
                this.Comp_DN[j] = int.Parse(vals[(j * 2) + 2], System.Globalization.CultureInfo.InvariantCulture);
              }
            }
            catch
            { this.bad_params++; }
          }

          if (i == (count - 2)) {
            string[] vals = line[i].Split(",");

            try {
              this.hard_count = int.Parse(vals[0], System.Globalization.CultureInfo.InvariantCulture);

              for (j = 0; j < hard_count; j++) {
                this.Hard_floors[j] = int.Parse(vals[(j * 2) + 1], System.Globalization.CultureInfo.InvariantCulture);
                this.Hard_DN[j] = int.Parse(vals[(j * 2) + 2], System.Globalization.CultureInfo.InvariantCulture);
              }
            }
            catch
            { this.bad_params++; }
          }

          if (i == (count - 1)) {
            string[] vals = line[i].Split(",");

            try {
              this.acts_count = int.Parse(vals[0], System.Globalization.CultureInfo.InvariantCulture);

              for (j = 0; j < acts_count; j++) {
                this.FloorsIdx[j, 0] = int.Parse(vals[(j * 3) + 1], System.Globalization.CultureInfo.InvariantCulture);
                this.FloorsIdx[j, 1] = int.Parse(vals[(j * 3) + 2], System.Globalization.CultureInfo.InvariantCulture);
                this.ActualShift[j] = double.Parse(vals[(j * 3) + 3], System.Globalization.CultureInfo.InvariantCulture);
              }
            }
            catch
            { this.bad_params++; }
          }
        }

        Plot_Graphics();

                    Form4 f = new Form4();
        f.Owner = this;
        Results(f);
        //f.Show();

        if ((this.comp_count > 0) & (this.hard_count > 0))
          this.project_created = true;

        this.textBox7.Text = String.Concat("Проект загружен! ", bad_params.ToString(), " errors.");
      }
      catch (Exception err)
      {
        this.textBox7.Text = err.Message;
      }
    }
    else {
      this.textBox7.Text = String.Concat("Некорректный файл проекта!");
    }
  }

  лицензияToolStripMenuItem_Click(object sender, EventArgs e) {
    click();
  }

   оПрограммеToolStripMenuItem1_Click(object sender, EventArgs e) {
            Form6 f = new Form6();
    f.Owner = this;
    f.Show();

  }

   выходToolStripMenuItem_Click(object sender, EventArgs e) {
    this.Close();
  }

  button8_Click(object sender, EventArgs e) {
    // Проверить, что компенсаторы стоят не чаще, чем раз в 3 этажа.
    // Если есть такие участки, то сместить НО и пересчитать.

    if (this.!project_optimized) {
      if ((this.comp_count > 0) & (this.hard_count > 0)) {
        for (int j = 0; j < (hard_count - 1); j++)
        {
          if (this.Hard_floors[j + 1] - this.Hard_floors[j] == 1) {
            // Сдвинуть нижнюю опору выше

            if (this.lower_extension < 15) {
                                Form3 f = new Form3();
              f.Owner = this;

              if (this.num_calcs > 0) {
                for (int i = 0; i < num_calcs; i++)
                {
                                        dn: string = "";

                  switch (DN_index[i]) {
                    case (0):
                      this.dn = "DN15";
                      break;

                    case (1):
                      this.dn = "DN20";
                      break;

                    case (2):
                      this.dn = "DN25";
                      break;

                    case (3):
                      this.dn = "DN32";
                      break;

                    case (4):
                      this.dn = "DN40";
                      break;

                    case (5):
                      this.dn = "DN50";
                      break;

                    case (6):
                      this.dn = "DN65";
                      break;

                    case (7):
                      this.dn = "DN80";
                      break;

                    case (8):
                      this.dn = "DN100";
                      break;

                    case (9):
                      this.dn = "DN125";
                      break;

                    case (10):
                      this.dn = "DN150";
                      break;

                    case (11):
                     this.dn = "DN200";
                      break;
                  }

                  f.dataGridView1.Rows.Add();
                  f.dataGridView1[0, i].Value = idx[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
                  f.dataGridView1[1, i].Value = dn;
                  f.dataGridView1[2, i].Value = Length[i].ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
                  f.dataGridView1[3, i].Value = Start_floor[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
                  f.dataGridView1[4, i].Value = End_floor[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
                  f.dataGridView1[5, i].Value = Floor_height[i].ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
                  f.dataGridView1[6, i].Value = Shift[i].ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
                }

                if (this.enable_lower_comp) {
                  if (this.lower_automatic < 1)
                    f.checkBox1.Checked = true;

                  f.textBox1.Text = lower_length.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
                  f.textBox5.Text = lower_floor.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
                  f.textBox3.Text = lower_extension.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
                }

                if (this.enable_higher_comp) {
                  if (this.higher_automatic < 1)
                    f.checkBox2.Checked = true;

                  f.textBox2.Text = higher_length.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
                  f.textBox6.Text = higher_floor.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
                  f.textBox4.Text = higher_extension.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
                }

                f.textBox8.Text = num_floors.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
              }

                                current: number = int.Parse(f.textBox5.Text, System.Globalization.CultureInfo.InvariantCulture);

              this.current++;

              f.textBox5.Text = current.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);

              this.Start_floor[0] = current;
              this.lower_floor = current;
              this.lower_extension += C * Floor_height[0] * (Tmax - Tmin) * k;
              this.lower_length += Floor_height[0];

              f.textBox1.Text = lower_length.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
              f.textBox3.Text = lower_extension.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);

              if (this.Start_floor[0] == End_floor[0]) {
                // удалить участок, включив в нижнюю самокомпенсацию
                this.Start_floor[1] = lower_floor;
                dataGridView1.Rows.RemoveAt(0);
                                    jmax, row: number;
                                    bad_params: number = 0;
                                    double data: double;

                this.row = 0;
                this.j = 0;
                while (this.row == 0) {
                  if ((string)dataGridView1[0, j].Value == null)
                  {
                    this.row = 1;
                  }
                                        else {
                try { this.data = double.Parse((string)dataGridView1[0, j].Value, System.Globalization.CultureInfo.InvariantCulture); }
                catch { this.bad_params++; }
                j++;
              }
            }

            this.jmax = j;

            if (this.jmax > 0) {

              for (j = 0; j < jmax; j++) {
                                            dn: string = "";
                                            errdn: number = 0;
                try { this.idx[j] = int.Parse((string)f.dataGridView1[0, j].Value, System.Globalization.CultureInfo.InvariantCulture); }
                catch { this.bad_params++; }
                try { this.dn = (string)f.dataGridView1[1, j].Value; }
                catch { this.bad_params++; errdn = 1; }
                try { this.Start_floor[j] = double.Parse((string)f.dataGridView1[3, j].Value, System.Globalization.CultureInfo.InvariantCulture); }
                catch { this.bad_params++; }
                try { this.End_floor[j] = double.Parse((string)f.dataGridView1[4, j].Value, System.Globalization.CultureInfo.InvariantCulture); }
                catch { this.bad_params++; }
                try { this.Floor_height[j] = double.Parse((string)f.dataGridView1[5, j].Value, System.Globalization.CultureInfo.InvariantCulture); }
                catch { this.bad_params++; }
                try { this.Shift[j] = double.Parse((string)f.dataGridView1[6, j].Value, System.Globalization.CultureInfo.InvariantCulture); }
                catch { this.bad_params++; }

                if (this.bad_params == 0) {
                  if (this.Shift[j] < 15) {
                    this.Shift[j] = 15;
                    f.dataGridView1[6, j].Value = "15";
                  }
                }

                if (this.bad_params == 0) {
                  this.Length[j] = (1 + End_floor[j] - Start_floor[j]) * Floor_height[j];

                  f.dataGridView1[2, j].Value = Length[j].ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
                }

                if (this.errdn == 0) {
                  switch (dn) {
                    case ("DN15"):
                      this.DN_index[j] = 0;
                      break;

                    case ("DN20"):
                      this.DN_index[j] = 1;
                      break;

                    case ("DN25"):
                      this.DN_index[j] = 2;
                      break;

                    case ("DN32"):
                      this.DN_index[j] = 3;
                      break;

                    case ("DN40"):
                      this.DN_index[j] = 4;
                      break;

                    case ("DN50"):
                      this.DN_index[j] = 5;
                      break;

                    case ("DN65"):
                      this.DN_index[j] = 6;
                      break;

                    case ("DN80"):
                      this.DN_index[j] = 7;
                      break;

                    case ("DN100"):
                      this.DN_index[j] = 8;
                      break;

                    case ("DN125"):
                      this.DN_index[j] = 9;
                      break;

                    case ("DN150"):
                      this.DN_index[j] = 10;
                      break;

                    case ("DN200"):
                      this.DN_index[j] = 11;
                      break;
                  }
                }

              }

            }
            else {
              this.bad_params++;
            }

            this.num_calcs = jmax;
          }

          // Recalc project
          button3_Click(sender, e);

          this.project_optimized = true;
          this.textBox7.Text = "успешно!";
        }
                            else {
        this.project_optimized = true;
        this.textBox7.Text = "Предельное удлинение достигнуто!";
      }

      break;
    }
    else // if (Hard_floors[j + 1] - Hard_floors[j] == 1)
    {
      if (this.Hard_floors[j + 1] - this.Hard_floors[j] == 2) {
        if ((this.lower_extension < 15) & (this.higher_extension < 15)) {
                                    // Сдвинуть нижнюю опору выше и верхнюю ниже
                                    Form3 f = new Form3();
          f.Owner = this;

          if (this.num_calcs > 0) {
            for (int i = 0; i < num_calcs; i++)
            {
                                            string dn = "";

              switch (DN_index[i]) {
                case (0):
                  this.dn = "DN15";
                  break;

                case (1):
                  this.dn = "DN20";
                  break;

                case (2):
                  this.dn = "DN25";
                  break;

                case (3):
                  this.dn = "DN32";
                  break;

                case (4):
                  this.dn = "DN40";
                  break;

                case (5):
                  this.dn = "DN50";
                  break;

                case (6):
                  this.dn = "DN65";
                  break;

                case (7):
                  this.dn = "DN80";
                  break;

                case (8):
                  this.dn = "DN100";
                  break;

                case (9):
                  this.dn = "DN125";
                  break;

                case (10):
                  this.dn = "DN150";
                  break;

                case (11):
                  this.dn = "DN200";
                  break;
              }

              f.dataGridView1.Rows.Add();
              f.dataGridView1[0, i].Value = idx[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
              f.dataGridView1[1, i].Value = dn;
              f.dataGridView1[2, i].Value = Length[i].ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
              f.dataGridView1[3, i].Value = Start_floor[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
              f.dataGridView1[4, i].Value = End_floor[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
              f.dataGridView1[5, i].Value = Floor_height[i].ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
              f.dataGridView1[6, i].Value = Shift[i].ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
            }

            if (this.enable_lower_comp) {
              if (this.lower_automatic < 1)
                f.checkBox1.Checked = true;

              f.textBox1.Text = lower_length.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
              f.textBox5.Text = lower_floor.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
              f.textBox3.Text = lower_extension.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
            }

            if (this.enable_higher_comp) {
              if (this.higher_automatic < 1)
                f.checkBox2.Checked = true;

              f.textBox2.Text = higher_length.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
              f.textBox6.Text = higher_floor.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
              f.textBox4.Text = higher_extension.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
            }

            f.textBox8.Text = num_floors.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
          }

          l_current: number = int.Parse(f.textBox5.Text, System.Globalization.CultureInfo.InvariantCulture);
          this.l_current++;
          f.textBox5.Text = l_current.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);

          this.lower_floor = l_current;
          this.lower_extension += C * Floor_height[0] * (Tmax - Tmin) * k;
          this.lower_length += Floor_height[0];

          f.textBox1.Text = lower_length.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
          f.textBox3.Text = lower_extension.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);


          h_current: number = int.Parse(f.textBox6.Text, System.Globalization.CultureInfo.InvariantCulture);
          this.h_current--;
          f.textBox6.Text = h_current.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);

                                    int last_cut = num_calcs - 1;

          this.higher_floor = h_current;
          this.higher_extension += C * Floor_height[last_cut] * (Tmax - Tmin) * k;
          this.higher_length += Floor_height[last_cut];

          f.textBox2.Text = higher_length.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
          f.textBox4.Text = higher_extension.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);


          if (this.Start_floor[last_cut] == End_floor[last_cut]) {
            this.End_floor[last_cut - 1] = higher_floor - 1;
            f.dataGridView1[4, last_cut - 1].Value = (higher_floor - 1).ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
            f.dataGridView1.Rows.RemoveAt(last_cut);
          }
          else {
            this.End_floor[last_cut] = higher_floor - 1;
            f.dataGridView1[4, last_cut].Value = (higher_floor - 1).ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
          }

          if (this.Start_floor[0] == End_floor[0]) {
            this.Start_floor[1] = lower_floor;
            f.dataGridView1[3, 1].Value = lower_floor.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
            f.dataGridView1.Rows.RemoveAt(0);
          }
          else {
            this.Start_floor[0] = lower_floor;
            f.dataGridView1[3, 0].Value = lower_floor.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
          }

                                    jmax, row: number;
                                    bad_params: number = 0;
                                    data: double;

          this.row = 0;
          this.j = 0;
          while (this.row == 0) {
            if ((string)f.dataGridView1[0, j].Value == null)
            {
              this.row = 1;
            }
                                        else {
          try { this.data = double.Parse((string)f.dataGridView1[0, j].Value, System.Globalization.CultureInfo.InvariantCulture); }
          catch { this.bad_params++; }
          j++;
        }
      }

      this.jmax = j;

      if (this.jmax > 0) {

        for (j = 0; j < jmax; j++) {
                                            dn: string = "";
                                            errdn: number = 0;
          try { this.idx[j] = int.Parse((string)f.dataGridView1[0, j].Value, System.Globalization.CultureInfo.InvariantCulture); }
          catch { this.bad_params++; }
          try { this.dn = (string)f.dataGridView1[1, j].Value; }
          catch { this.bad_params++; errdn = 1; }
          try { this.Start_floor[j] = double.Parse((string)f.dataGridView1[3, j].Value, System.Globalization.CultureInfo.InvariantCulture); }
          catch { this.bad_params++; }
          try { this.End_floor[j] = double.Parse((string)f.dataGridView1[4, j].Value, System.Globalization.CultureInfo.InvariantCulture); }
          catch { this.bad_params++; }
          try {this.Floor_height[j] = double.Parse((string)f.dataGridView1[5, j].Value, System.Globalization.CultureInfo.InvariantCulture); }
          catch { this.bad_params++; }
          try { this.Shift[j] = double.Parse((string)f.dataGridView1[6, j].Value, System.Globalization.CultureInfo.InvariantCulture); }
          catch { this.bad_params++; }

          if (this.bad_params == 0) {
            if (this.Shift[j] < 15) {
              this.Shift[j] = 15;
              f.dataGridView1[6, j].Value = "15";
            }
          }

          if (this.bad_params == 0) {
            this.Length[j] = (1 + End_floor[j] - Start_floor[j]) * Floor_height[j];

            f.dataGridView1[2, j].Value = Length[j].ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
          }

          if (this.errdn == 0) {
            switch (dn) {
              case ("DN15"):
                this.DN_index[j] = 0;
                break;

              case ("DN20"):
                this.DN_index[j] = 1;
                break;

              case ("DN25"):
                this.DN_index[j] = 2;
                break;

              case ("DN32"):
                this.DN_index[j] = 3;
                break;

              case ("DN40"):
                this.DN_index[j] = 4;
                break;

              case ("DN50"):
                this.DN_index[j] = 5;
                break;

              case ("DN65"):
                this.DN_index[j] = 6;
                break;

              case ("DN80"):
                this.DN_index[j] = 7;
                break;

              case ("DN100"):
                this.DN_index[j] = 8;
                break;

              case ("DN125"):
                this.DN_index[j] = 9;
                break;

              case ("DN150"):
                this.DN_index[j] = 10;
                break;

              case ("DN200"):
                this.DN_index[j] = 11;
                break;
            }
          }

        }

      }
      else {
        this.bad_params++;
      }

      this.num_calcs = jmax;

      // Recalc project
      button3_Click(sender, e);

      this.project_optimized = true;
      this.textBox7.Text = "успешно!";
    }
                                else
                                {
  this.project_optimized = true;
  this.textBox7.Text = "Предельное удлинение достигнуто!";
}

break;
                            }
                            else // if (Hard_floors[j + 1] - Hard_floors[j] == 2)
{
  /*
  if (Hard_floors[j + 1] - Hard_floors[j] == 3)
  {
      // сдвинуть нижнюю опору выше, верхнюю ниже и искать недоиспользованные компенсаторы
      Form3 f = new Form3();
      f.Owner = this;

      if (num_calcs > 0)
      {
          for (int i = 0; i < num_calcs; i++)
          {
              string dn = "";

              switch (DN_index[i])
              {
                  case (0):
                      dn = "DN15";
                      break;

                  case (1):
                      dn = "DN20";
                      break;

                  case (2):
                      dn = "DN25";
                      break;

                  case (3):
                      dn = "DN32";
                      break;

                  case (4):
                      dn = "DN40";
                      break;

                  case (5):
                      dn = "DN50";
                      break;

                  case (6):
                      dn = "DN65";
                      break;

                  case (7):
                      dn = "DN80";
                      break;

                  case (8):
                      dn = "DN100";
                      break;

                  case (9):
                      dn = "DN125";
                      break;

                  case (10):
                      dn = "DN150";
                      break;

                  case (11):
                      dn = "DN200";
                      break;
              }

              f.dataGridView1.Rows.Add();
              f.dataGridView1[0, i].Value = idx[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
              f.dataGridView1[1, i].Value = dn;
              f.dataGridView1[2, i].Value = Length[i].ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
              f.dataGridView1[3, i].Value = Start_floor[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
              f.dataGridView1[4, i].Value = End_floor[i].ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
              f.dataGridView1[5, i].Value = Floor_height[i].ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
              f.dataGridView1[6, i].Value = Shift[i].ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
          }

          if (enable_lower_comp)
          {
              if (lower_automatic < 1)
                  f.checkBox1.Checked = true;

              f.textBox1.Text = lower_length.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
              f.textBox5.Text = lower_floor.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
              f.textBox3.Text = lower_extension.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
          }

          if (enable_higher_comp)
          {
              if (higher_automatic < 1)
                  f.checkBox2.Checked = true;

              f.textBox2.Text = higher_length.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
              f.textBox6.Text = higher_floor.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
              f.textBox4.Text = higher_extension.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
          }

          f.textBox8.Text = num_floors.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
      }

      int l_current = int.Parse(f.textBox5.Text, System.Globalization.CultureInfo.InvariantCulture);
      l_current++;
      f.textBox5.Text = l_current.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);

      lower_floor = l_current;
      lower_extension += C * Floor_height[0] * (Tmax - Tmin) * k;
      lower_length += Floor_height[0];

      f.textBox1.Text = lower_length.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
      f.textBox3.Text = lower_extension.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);


      int h_current = int.Parse(f.textBox6.Text, System.Globalization.CultureInfo.InvariantCulture);
      h_current--;
      f.textBox6.Text = h_current.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);

      int last_cut = num_calcs - 1;

      higher_floor = h_current;
      higher_extension += C * Floor_height[last_cut] * (Tmax - Tmin) * k;
      higher_length += Floor_height[last_cut];

      f.textBox2.Text = higher_length.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
      f.textBox4.Text = higher_extension.ToString("F2", System.Globalization.CultureInfo.InvariantCulture);


      if (Start_floor[last_cut] == End_floor[last_cut])
      {
          End_floor[last_cut - 1] = higher_floor - 1;
          f.dataGridView1[4, last_cut - 1].Value = (higher_floor - 1).ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
          f.dataGridView1.Rows.RemoveAt(last_cut);
      }
      else
      {
          End_floor[last_cut] = higher_floor - 1;
          f.dataGridView1[4, last_cut].Value = (higher_floor - 1).ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
      }

      if (Start_floor[0] == End_floor[0])
      {
          Start_floor[1] = lower_floor;
          f.dataGridView1[3, 1].Value = lower_floor.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
          f.dataGridView1.Rows.RemoveAt(0);
      }
      else
      {
          Start_floor[0] = lower_floor;
          f.dataGridView1[3, 0].Value = lower_floor.ToString("F0", System.Globalization.CultureInfo.InvariantCulture);
      }

      int jmax, row;
      int bad_params = 0;
      double data;

      row = 0;
      j = 0;
      while (row == 0)
      {
          if ((string)f.dataGridView1[0, j].Value == null)
          {
              row = 1;
          }
          else
          {
              try { data = double.Parse((string)f.dataGridView1[0, j].Value, System.Globalization.CultureInfo.InvariantCulture); }
              catch { bad_params++; }
              j++;
          }
      }

      jmax = j;

      if (jmax > 0)
      {

          for (j = 0; j < jmax; j++)
          {
              string dn = "";
              int errdn = 0;
              try { idx[j] = int.Parse((string)f.dataGridView1[0, j].Value, System.Globalization.CultureInfo.InvariantCulture); }
              catch { bad_params++; }
              try { dn = (string)f.dataGridView1[1, j].Value; }
              catch { bad_params++; errdn = 1; }
              try { Start_floor[j] = double.Parse((string)f.dataGridView1[3, j].Value, System.Globalization.CultureInfo.InvariantCulture); }
              catch { bad_params++; }
              try { End_floor[j] = double.Parse((string)f.dataGridView1[4, j].Value, System.Globalization.CultureInfo.InvariantCulture); }
              catch { bad_params++; }
              try { Floor_height[j] = double.Parse((string)f.dataGridView1[5, j].Value, System.Globalization.CultureInfo.InvariantCulture); }
              catch { bad_params++; }
              try { Shift[j] = double.Parse((string)f.dataGridView1[6, j].Value, System.Globalization.CultureInfo.InvariantCulture); }
              catch { bad_params++; }

              if (bad_params == 0)
              {
                  if (Shift[j] < 15)
                  {
                      Shift[j] = 15;
                      f.dataGridView1[6, j].Value = "15";
                  }
              }

              if (bad_params == 0)
              {
                  Length[j] = (1 + End_floor[j] - Start_floor[j]) * Floor_height[j];

                  f.dataGridView1[2, j].Value = Length[j].ToString("F2", System.Globalization.CultureInfo.InvariantCulture);
              }

              if (errdn == 0)
              {
                  switch (dn)
                  {
                      case ("DN15"):
                          DN_index[j] = 0;
                          break;

                      case ("DN20"):
                          DN_index[j] = 1;
                          break;

                      case ("DN25"):
                          DN_index[j] = 2;
                          break;

                      case ("DN32"):
                          DN_index[j] = 3;
                          break;

                      case ("DN40"):
                          DN_index[j] = 4;
                          break;

                      case ("DN50"):
                          DN_index[j] = 5;
                          break;

                      case ("DN65"):
                          DN_index[j] = 6;
                          break;

                      case ("DN80"):
                          DN_index[j] = 7;
                          break;

                      case ("DN100"):
                          DN_index[j] = 8;
                          break;

                      case ("DN125"):
                          DN_index[j] = 9;
                          break;

                      case ("DN150"):
                          DN_index[j] = 10;
                          break;

                      case ("DN200"):
                          DN_index[j] = 11;
                          break;
                  }
              }

          }

      }
      else
      {
          bad_params++;
      }

      num_calcs = jmax;

      // Recalc project
      button3_Click(sender, e);


      // Попробовать найти недоиспользованные компенсаторы
      for (int c=0; c < acts_count; c++)
      {
          if (ActualShift[c] < 15)
          {
              double tmp;

              tmp = 0;


          }
      }


      project_optimized = true;
      textBox7.Text = "успешно!";

      break;
  }
  else
  {
      textBox7.Text = "Оптимизация невозможна, проверьте допустимое смещение точек врезки!";
  }
  */
  this.textBox7.Text = "Оптимизация невозможна, проверьте допустимое смещение точек врезки!";
}
                        }
                    }
                }
            }
            else
{
  this.textBox7.Text = "Проект уже оптимизирован!";
}
        }


  //myForm: FormGroup;

  //constructor(@Self() private destroy: NgOnDestroy, private formBuilder: FormBuilder, private router: Router) {
  //  this.myForm = formBuilder.group({
  //    "id": [""],
  //    "titleNewsRu": ["", Validators.required],
  //    "titleNewsBy": ["", Validators.required],
  //    "newsRu": ["", Validators.required],
  //    "newsBy": ["", Validators.required],
  //    "NewTitleNewsRu": ["", Validators.required],
  //    "NewTitleNewsBy": ["", Validators.required],
  //    "NewNewsRu": ["", Validators.required],
  //    "NewNewsBy": ["", Validators.required],
  //    "filterTitleNewsRu": ["", Validators.required],
  //    "filterTitleNewsBy": ["", Validators.required],
  //    "filterNewsRu": ["", Validators.required],
  //    "filterNewsBy": ["", Validators.required],
  //    "editorTitleNewsRu": ["", Validators.required],
  //    "editorTitleNewsBy": ["", Validators.required],
  //    "editorNewsRu": ["", Validators.required],
  //    "editorNewsBy": ["", Validators.required],
  //    "TextEditorTitleNewsRu": ["", Validators.required],
  //    "TextEditorTitleNewsBy": ["", Validators.required]
  //  }
  //  );
  //}
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}
