
            function AddGame(){
            var games = {
               name  :document.getElementById('GameName').value,
                platform :document.getElementById('plateform').value
            }

                

                fetch("https://lime-faithful-hippo.cyclic.app/api/games",
                {
                    method: "Post",
                    body: JSON.stringify(games),
                    headers: { "Content-type": "application/json; charset = UTF-8"}

                })
                .then(function(response)
                 {
                    return response.json();
                })
                .then(function(responseResult) 
                {
                    console.log(responseResult);
                })
                .catch(function(error) 
                {
                    alert('duplicate');
                });
               
                    //quoteTag.innerHTML = data[0].text;
            }
