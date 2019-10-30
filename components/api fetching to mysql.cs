using System;
using System.IO;
using Newtonsoft.Json;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Collections.Generic;
using MySql.Data.MySqlClient;
using System.Net.Http.Formatting;
using System.Data;

namespace notamfetch
{
    class Program
    {

        public class NOTAMSSS
        {
            public string Nidnotam { get; set; }
            public string Ncode { get; set; }
            public string Nemplacement { get; set; }
            public DateTime Ndateheuredebut { get; set; }
            public DateTime Ndateheurefin { get; set; }
            public string Nhoraire { get; set; }
            public string Ncontenu { get; set; }
            public string Nlimiteinf { get; set; }
            public string Nlimitesup { get; set; }


            //Constructeur
            public NOTAMSSS()
            {
            }
        }

//Ajout
        public class Comments
        {
            public string postId { get; set; }
            public string id { get; set; }
            public string name { get; set; }
            public string email { get; set; }
            public string body { get; set; }


            //Constructeur 2
            public Comments()
            {
            }
        }
//Fin ajout


        //Menu
        static public int DisplayMenu()
        {
            Console.WriteLine("\n\n  Fetch API Data to MySQL database ( Par : Alexandre Ratthé )");
            Console.WriteLine();
            Console.WriteLine("1. Ajouter des notams.");
            Console.WriteLine("2. Test");
            Console.WriteLine("3. Exit");
            Console.WriteLine("\nVeillez choisir votre option : ");
            var result = Console.ReadLine();
            return Convert.ToInt32(result);
        }

        //1 - Fonction pour ajouter d'un notam
        public static void AddNotam(List<Comments> noteam, string connexion, int x)
        {
            //Requête SQL
            string query = $"INSERT IGNORE INTO commentaire.comments (postId, id, name, email, body) Values(@postId,@id,@name,@email,@body) ON DUPLICATE KEY UPDATE id = @id";

            try
            {
                //Création de la connexion
                using (MySqlConnection connection = new MySqlConnection(connexion))
                {
                    //Ouverture de la connexion avec le serveur SQL local
                    connection.Open();

                    // Création d'une commande SQL en fonction de l'objet connexion
                    using (MySqlCommand cmd = connection.CreateCommand())
                    {
                        //Requête SQL
                        cmd.CommandText = $"{query}";

                        //Utilisation de l'objet NOTAMSSS passé en paramètre
                        cmd.Parameters.AddWithValue("@postId", noteam[x].postId);
                        cmd.Parameters.AddWithValue("@id", noteam[x].id);
                        cmd.Parameters.AddWithValue("@name", noteam[x].name);
                        cmd.Parameters.AddWithValue("@email", noteam[x].email);
                        cmd.Parameters.AddWithValue("@body", noteam[x].body);

                        //Exécution de la commande SQL
                        cmd.ExecuteNonQuery();

                        //Console.Write("\n C'est fait. \n*Si le commentaire existe déjà, il ne deviendra pas un doublon dans la base de donnée.");
                    }
                    //Fermeture de la connexion avec le serveur SQL local
                    connection.Close();
                }
            }
            catch (Exception e)
            {
                //Erreurs
                Console.Write("\nCaught the following error : " + e.Data);
            }
        }

//Ajout
        static void APICALL()
        {
            var url = "http://jsonplaceholder.typicode.com/comments";
            var webrequest = (HttpWebRequest)System.Net.WebRequest.Create(url);
            using (var response = webrequest.GetResponse())
            using (var reader = new StreamReader(response.GetResponseStream()))
            {
                var resultat = reader.ReadToEnd();
                Console.Write(resultat);
            }
        }
//Fin ajout

        static void Main(string[] args)
        {
                       
            //Information de connexion au serveur local
            string connexionstring = "SERVER=127.0.0.1;DATABASE=commentaire;UID=root;PASSWORD=;SSlMode=none";

            //Choix dans le menu
            int userInput = 0;
            do
            {
                userInput = DisplayMenu();
                switch (userInput)
                {
                    case 1:
                        // Fonction pour ajouter un livre à la base de donnée

                        //Initialisation de la classe livre
                        Comments notamma = new Comments();


                        var url = "http://jsonplaceholder.typicode.com/comments";
                        var webrequest = (HttpWebRequest)System.Net.WebRequest.Create(url);
                        using (var response = webrequest.GetResponse())
                        using (var reader = new StreamReader(response.GetResponseStream()))
                        {
                            var resultat = reader.ReadToEnd();
                            List<Comments> test12 = JsonConvert.DeserializeObject<List<Comments>>(resultat);

                            int nombredenotam = test12.Count;
                            nombredenotam = nombredenotam - 1;

                            for (int i = 0; i < nombredenotam; i++)
                            {
                                AddNotam(test12, connexionstring, i);
                                //Console.WriteLine($"{test12[i].postId} - {test12[i].name}");
                            }

                        }

                        //Pause pour permettre la lecture des informations à l'écran
                        System.Threading.Thread.Sleep(3000);
                        break;


                    case 2:

                        APICALL();
                        break;

                    case 3:
                        userInput = 3;
                        return;

                    default:
                        Console.WriteLine("");
                        Console.WriteLine("Choix non disponible \n");
                        System.Threading.Thread.Sleep(2000);
                        break;
                }
            } while (userInput != 3);
        }
    }
}

