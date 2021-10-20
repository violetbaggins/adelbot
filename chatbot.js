window.addEventListener("load", function(){

    let chatText = this.document.getElementById('chat-text')
    let btnSubmit = document.getElementById('btn-submit')
    let msg = document.getElementById('msg-text')

    chatText.innerHTML += `<p class="txt-adelbot">Buenass, para empezar podes decirle 'hola'...</p><p class="txt-adelbot">Si queres saber mas o menos de que podemos charlar escribi: help</p>`

    let help = ["help", "ayuda", "aiuda"]
    let saludoBienvenida = ['hola', 'hoal','holas','holaa','holaas', 'holis','holu','holi', 'ola','como', 'estas', 'ahi', 'onda', 'buenas','buenass', 'hello', 'hi','bonjour']
    let uwu = ["quiere", "decir", "uwu"]
    let insultos = ["puta", "puto", "chota", "pija", "boluda", "boludo", "forro", "imbecil", "forra", "tarada", "tarado"]
    let nombreUser = ["nico",  "nicolas","chen", "nicole", "juli","julieta", "lean", "leandro", "mario", "karina", "kari", "carli", "carla", "pao", "rene", "andy", "andres", "santi", "santiago","santia", "santis"]

    btnSubmit.addEventListener('click', function(){
    
        // creo esta variable para que sea la condicion del switch
        let inputTextArray 
      
        
        
        // postea el msg del user en la pantalla
        chatText.innerHTML += `<span class="txt-user"><p>User: ${msg.value}</p></span>`
        
        // convierto el msg del user a lowercase y despues lo divido en un array por palabras
        let inputTextLowercase = msg.value.toLowerCase()
        let inputText = inputTextLowercase.split(" ")
        
        console.log(inputText);
        
                
    //  busco las palabras clave en cada array
        let helpEncontrado = help.some(palabra => inputText.includes(palabra))
        let saludoEncontrado = saludoBienvenida.some(palabra => inputText.includes(palabra))
        let uwuEncontrado = uwu.some(palabra => inputText.includes(palabra))
        let insultoEncontrado = insultos.some(palabra => inputText.includes(palabra))
        let nombreEncontrado = nombreUser.some(palabra => inputText.includes(palabra))
 
        
    // Si encontro la palabra clave guardo el grupo al que pertenece en inputTextArray
        if(helpEncontrado){
            inputTextArray = "help"
        } 

        if(saludoEncontrado){
            inputTextArray = "saludoEncontrado"
        } 

        if(uwuEncontrado){
            inputTextArray = "uwuEncontrado"
        } 
        if(insultoEncontrado){
            inputTextArray = "insultoEncontrado"
        }
        if(nombreEncontrado){
            inputTextArray = inputTextLowercase            
        } 

        // para que no me tome el saludo como un nombre q no conoce
        if(!helpEncontrado && !saludoEncontrado && !uwuEncontrado && !insultoEncontrado && !nombreEncontrado) {
            chatText.innerHTML += `<p class="txt-adelbot">Ai no te conozco <b>${inputTextLowercase}</b> T.T</p><p class="txt-adelbot">Solo respondo a Nico, SantiS, SantiA, Juli, Lean, Carli, Kari, Rene, Mario, Andy o Pao</p><p class="txt-adelbot">a Nicole tambien, aunque me da miedo uwu</p>`
        }

        
    // con el switch veo que tiene adentro el inputTextArray y le asigno el caso que corresponde
        switch(inputTextArray) {
            case "saludoEncontrado":
                chatText.innerHTML += `<span class="txt-adelbot">Adelbot: Hola, soy un bot... soy el Adelbot uwu</span><br><span class="txt-adelbot">como te llamas?</p></span>`
                break;
            case "uwuEncontrado":
                chatText.innerHTML += `<p class="txt-adelbot">Adelbot: uwu</p>`
                break;
            case "insultoEncontrado":
                chatText.innerHTML += `<p class="txt-adelbot">Adelbot: Bue bue no hace falta usar esas palabras</p>`
                break;
            case "pao":
                chatText.innerHTML += `<p class="txt-adelbot">Adelbot: Hola Pao, tu bot esta genial</p>`
                break;
            case "nico":
            case "nicolas":
            case "chen":
                chatText.innerHTML += `<p class="txt-adelbot">Adelbot: Nico, hola gfesito uwu ahre ahgjdsgdhjsgdhja</p>`
                break;
            case "santi":
            case "santiago":
                chatText.innerHTML += `<p class="txt-adelbot">Adelbot: T.T no se que santi sos.</p><img src="https://i.ytimg.com/vi/TN8UlPVlHrA/hqdefault.jpg" width="200"><p class="txt-adelbot">santia o santis? si, la letra del apellido sin espacios xq no se leerlos uwu</p>`
                break;
            case "santia":
                chatText.innerHTML += `<p class="txt-adelbot">Adelbot: Alexa! pone Panic Show de La Renga</p>`
                break;
            case "santis":
                chatText.innerHTML += `<p class="txt-adelbot">Adelbot: Hola, me borras algo de csshare? porfiiss.</p><p class="txt-adelbot">No mentiiiraa :3</p>`
                break;
            case "nicole":
                chatText.innerHTML += `<p class="txt-adelbot">Adelbot: Por favor se buena uwu </p>`
                break;
            case "carla":
            case "carli":
                chatText.innerHTML += `<p class="txt-adelbot">Adelbot: Hola Rosa, uwu luv u</p>`
                break;
            case "lean":
            case "leandro":
                chatText.innerHTML += `<p class="txt-adelbot">Adelbot: Hoy a las 10 prendo twitch uwu </p>`
                break;
            case "juli":
            case "julieta":
                chatText.innerHTML += `<p class="txt-adelbot">Adelbot: Lo amo a Suga. Escuchaste daechwita? </p>`
                break;
            case "kari":
            case "karina":
                chatText.innerHTML += `<p class="txt-adelbot">Adelbot: Me han dicho que eres la arepa reina</p>`
                break;
            case "andy":
            case "andres":
                chatText.innerHTML += `<p class="txt-adelbot">Adelbot: Dios me lo bendiga, me lo ampare y me lo favorezca</p>`
                break;
            case "mario":
                chatText.innerHTML += `<p class="txt-adelbot">Adelbot: Hola Vecino!</p>`
                break;
           /*  case "nombreDefault":
                chatText.innerHTML += `<p>Ai ese nombre no lo conozco T.T</p><p>Solo respondo a Nico, SantiS, SantiA, Juli, Lean, Carli, Kari, Rene, Mario, Andy o Pao</p><p>a Nicole tambien, aunque me da miedo uwu</p>`
                break; */
            case "help":
                chatText.innerHTML += `<p class="txt-adelbot">Adelbot: No tengo mucho pa decir. Toy chikita uwu</p><p class="txt-adelbot">Adelbot: Mentira si. Tengo respuestas para cada uno de uds, si escriben solo sus nombres de pila</p><p class="txt-adelbot">Adelbot: tambien podes escribir: uwu y ver que pasa</p>`
                break;
            default:
                chatText.innerHTML += `<p class="txt-adelbot">mensaje default</p>`
                break    
        } 

        // para que scrollee
        chatText.scrollTop = chatText.scrollHeight;
        // para que se borre el texto y vuelva el focus al input
        msg.value = ""
        msg.focus()

    })
});
