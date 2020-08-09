#language: pt
Funcionalidade: Listagem 

    Como usuário , desejo acessar a listagem 
    Para que possa visualizar  meus dados de cadasto 

    
    Cenário: Listagem sem registros
        Dado que o site não possua registros  
        Quando acessar a listagem 
        Então devo visualizar a listagem vazia 
        

    Cenário: Listagem com apenas um registro
        Dado que o site possua apenas um registro  
        Quando acessar a listagem 
        Entao devo visualizar com apenas um registro  