const getJokes = async () => {
    try {
      const res = await fetch(" https://official-joke-api.appspot.com/random_joke");
      const data = await res.json();
      const myJoke = document.getElementById("myJoke");
      if (myJoke) {
        myJoke.innerText = `${data.setup} - ${data.punchline}`;

      } else {
        console.error("Element with id 'myJoke' not found.");
      }
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };
  
  window.addEventListener("load", () => {
    getJokes();
  });
  