///System
///
///
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;

///AspNetCore
///
///
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

///WinForms
///
///
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Text;
using System.IO;
using System.Net.NetworkInformation;

///Security
///
///
using System.Security.Cryptography;
using System.Security.Cryptography.Xml;
using System.Xml;

namespace Angular_winforms.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PipelineСonfigurationController : ControllerBase
    {

        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public PipelineСonfigurationController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }


        // int lis;



        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }



        /*
                [HttpGet]
                public void click()
                {
                    int nic_count = 0;
                    bool correct_nic = false;

                    string[] macAddr;

                    string writePath = @"nics_found.txt";

                    using (StreamWriter sw = new StreamWriter(writePath, false, System.Text.Encoding.Default))
                    {
                        NetworkInterface[] nics = NetworkInterface.GetAllNetworkInterfaces();

                        int k = nics.Length;
                        nic_count = 0;
                        macAddr = new string[k];
                        String sMacAddress = string.Empty;
                        foreach (NetworkInterface adapter in nics)
                        {
                            sMacAddress = adapter.GetPhysicalAddress().ToString();
                            sw.WriteLine(sMacAddress);

                            macAddr[nic_count] = sMacAddress;
                            nic_count++;

                        }
                    }

                    //lic = 0;

        */
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
        /*

                    XmlDocument document = new XmlDocument();
                    document.PreserveWhitespace = true;
                    document.Load("license.xml");

                    if (document == null) throw new ArgumentNullException(nameof(document), "XML document is null.");

                    SignedXml signed = new SignedXml(document);
                    XmlNodeList list = document.GetElementsByTagName("Signature");
                    if (list == null)
                        throw new CryptographicException($"The XML document has no signature.");
                    if (list.Count > 1)
                        throw new CryptographicException($"The XML document has more than one signature.");

                    signed.LoadXml((XmlElement)list[0]);

                    RSA rsa = null;
                    foreach (KeyInfoClause clause in signed.KeyInfo)
                    {
                        RSAKeyValue value = clause as RSAKeyValue;
                        if (value == null) continue;
                        RSAKeyValue key = value;
                        rsa = key.Key;
                    }

                    bool check = (rsa != null && signed.CheckSignature(rsa));

                    if (check)
                    {
                        XmlNodeList number = document.GetElementsByTagName("number");

                        StringBuilder lic_id_str = new StringBuilder();

                        //Iterates through your String appending the available Names
                        foreach (XmlNode node in number)
                        {
                            lic_id_str.Append(node.InnerText + ",");
                        }

                        //Variable for your final string (replaces the trailing comma with a period)
                        string lic_id = lic_id_str.Remove(lic_id_str.Length - 1, 1).ToString() + ".";

                        lic_id = lic_id.Replace("-", string.Empty);
                        lic_id = lic_id.Replace(".", string.Empty);


                        for (int i = 0; i < nic_count; i++)
                        {
                            if (lic_id == macAddr[i])
                            {
                                correct_nic = true;
                            }
                        }

                        if (correct_nic)
                        {

                            XmlNodeList expiry = document.GetElementsByTagName("expiry");

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
                                //lic = 1;
                            }
                            else
                            {
                                if (lic_year == now.Year)
                                {
                                    if (lic_month > now.Month)
                                    {
                                        //lic = 1;
                                    }
                                    else
                                    {
                                        if (lic_month == now.Month)
                                        {
                                            if (lic_day >= now.Day)
                                            {
                                              //  lic = 1;
                                            }
                                        }
                                    }
                                }
                            }
        */

        //  if (lic == 0)
        //{
        //textBox7.Text = "Ошибка лицензии!";
        //}
        //else
        //{
        //    textBox7.Text = String.Concat("Лицензия подтверждена до ",
        //        lic_day.ToString().PadLeft(2, '0'), ".",
        //        lic_month.ToString().PadLeft(2, '0'), ".",
        //        lic_year.ToString().PadLeft(4, '0'), "!");
        //}
        /*
                        }
                        else
                        {
                            //textBox7.Text = "Ошибка лицензии!";
                        }


                    }
                    else
                    {
                        //textBox7.Text = "Ошибка лицензии!";
                    }


        */
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
}


        /*old
        var rng = new Random();
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateTime.Now.AddDays(index),
            TemperatureC = rng.Next(-20, 55),
            Summary = Summaries[rng.Next(Summaries.Length)]
        })
        .ToArray();
        */
