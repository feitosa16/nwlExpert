const perguntas = [
    {
      pergunta: "Qual mulher foi pioneira na programação de computadores e escreveu o primeiro algoritmo destinado a ser processado por uma máquina?",
      respostas: [
        "Ada Lovelace",
        "Grace Hopper",
        "Katherine Johnson",
        "Marie Curie"
      ],
      correta: 0
    },
    {
      pergunta: "Quem foi a primeira mulher a ganhar o Prêmio Nobel de Física?",
      respostas: [
        "Marie Curie",
        "Hedy Lamarr",
        "Margaret Hamilton",
        "Sheryl Sandberg"
      ],
      correta: 0
    },
    {
      pergunta: "Quem é conhecida como a 'Mãe da Internet'?",
      respostas: [
        "Radia Perlman",
        "Meg Whitman",
        "Sheryl Sandberg",
        "Hedy Lamarr"
      ],
      correta: 0
    },
    {
      pergunta: "Qual mulher é uma das principais figuras da computação distribuída e do desenvolvimento do sistema de arquivos Google File System (GFS)?",
      respostas: [
        "Sergey Brin",
        "Andrea Goldsmith",
        "Mary Lou Jepsen",
        "Cristina Amon"
      ],
      correta: 1
    },
    {
      pergunta: "Quem é a primeira mulher a dirigir a National Science Foundation (NSF) nos Estados Unidos?",
      respostas: [
        "Susan Wojcicki",
        "Susan Kare",
        "Marissa Mayer",
        "Rita Colwell"
      ],
      correta: 3
    },
    {
      pergunta: "Quem liderou a equipe de desenvolvimento do compilador que transformou C++ em código máquina e desempenhou um papel fundamental no desenvolvimento da linguagem de programação C++?",
      respostas: [
        "Barbara Liskov",
        "Marie Curie",
        "Radia Perlman",
        "Bjarne Stroustrup"
      ],
      correta: 0
    },
    {
      pergunta: "Qual mulher é uma renomada cientista da computação conhecida por suas contribuições para a inteligência artificial?",
      respostas: [
        "Radia Perlman",
        "Ada Lovelace",
        "Margaret Hamilton",
        "Barbara Liskov"
      ],
      correta: 3
    },
    {
      pergunta: "Quem é a primeira mulher a se tornar CEO de uma empresa Fortune 500?",
      respostas: [
        "Ursula Burns",
        "Meg Whitman",
        "Sheryl Sandberg",
        "Susan Wojcicki"
      ],
      correta: 0
    },
    {
      pergunta: "Quem liderou a equipe que desenvolveu o compilador para a linguagem de programação COBOL?",
      respostas: [
        "Katherine Johnson",
        "Margaret Hamilton",
        "Grace Hopper",
        "Ruth Lichterman"
      ],
      correta: 2
    },
    {
      pergunta: "Quem é a primeira mulher a ganhar o Prêmio Turing, muitas vezes considerado o Nobel da computação?",
      respostas: [
        "Karen Sparck Jones",
        "Frances Allen",
        "Barbara Liskov",
        "Anita Borg"
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalPerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    //modifica o h3 de pergunta genérica para a pergunta realizada 
    quizItem.querySelector('h3').textContent = item.pergunta
  for(let resposta of item.respostas){
    //dentro de dl procura o dt clonando tudo que a dentro desse espaço 
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta){
          corretas.add(item)
        }
       mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas
      }
    
    quizItem.querySelector('dl').appendChild(dt)
  }
  quizItem.querySelector('dl dt').remove()
    //coloca a pergunta na tela 
    quiz.appendChild(quizItem)
  }