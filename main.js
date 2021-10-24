var images = ["http://cps-static.rovicorp.com/2/Open/BET/Proud%20Family/Title%20Treatment/ProudFamilyLogo.jpg?partner=allrovi.com","https://www.clipartkey.com/mpngs/m/298-2980192_grandpa-clipart-animated-grandfather-clipart.png", "https://webstockreview.net/images/dad-clipart-animated.jpg" , "https://tse4.mm.bing.net/th?id=OIP.d9QVIKPweZWxhHl6NzS_RAHaJ2&pid=Api&P=0&w=300&h=", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
            var names = ["MaDDY","Nehru, My grandfather", "S. Manikandan, my father", "Lijoy, my cousin brother", "M D Yashini, my sister", "J Dhivya, ,my mother"];300
            var i = 0;
            function update()
            {
                i++;
                var numbers_of_family_member_in_array = 5
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            }
