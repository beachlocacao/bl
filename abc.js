 const avaliacoes = [
      {
        nome: "Adelmo",
        imagem: "https://a0.muscache.com/im/pictures/user/2dc165db-1664-4f24-b13c-ebc18cf6ea26.jpg",
        estrelas: 5,
        comentario: "Nossa hospedagem com a Marli no Varandas do Mar foi excelente! Passamos 30 dias de muita tranquilidade, pé na areia literalmente. Conciliamos trabalho e lazer neste lindo lugar e valeu muito a pena! Agradecemos mais uma vez a receptividade e a prontidão em todos os momentos, aos porteiros sempre muito gentis e receptivos também! Com certeza voltaremos!"
      },
      {
        nome: "David",
        imagem: "https://a0.muscache.com/im/pictures/user/7335b92f-01cf-45f3-88b5-853a020174eb.jpg",
        estrelas: 4,
        comentario: "A casa da Marli realmente nos ajudou a nos apaixonar por Cumbuco, mas o que não há para amar em adormecer ao som do oceano, pular na piscina em um dia quente e ser capaz de caminhar até a cidade em aproximadamente 13 minutos. Estou feliz por ter feito minha pesquisa para encontrar uma joia de lugar e nossa estadia só foi facilitada por ter um anfitrião e uma equipe de apartamento tão bons que foram tão acolhedores e atenciosos."
      },
      {
        nome: "Patrícia",
        imagem: "https://a0.muscache.com/im/pictures/user/c28d3fe6-6117-4a71-bb93-d87ebb333580.jpg",
        estrelas: 3,
        comentario: "O apartamento corresponde as expectativas. Tudo muito limpo e tinha tudo que precisávamos. A comunicação com Marli também sempre muito rápida e ela e seu esposo foram bastante solicitos. Iremos voltar com toda certeza!!"
      },
      {
        nome: "Aline",
        imagem: "https://a0.muscache.com/im/pictures/user/77831804-011b-4594-ae59-3554afe1b70b.jpg",
        estrelas: 5,
        comentario: "Que lugar maravilhoso!!!! Vista linda, praia tranquila, apartamento super aconchegante, confortável, decorado com bom gosto, já sou fã e com certeza voltarei. Conheci uma outra Cumbuco, de bons e requintados restaurantes, praias tranquilas e gente simpática por todos os lados. Condomínio extremamente seguro e a anfitriã super atenciosa!!! Podem confiar em cada detalhe da descrição. Amamos nossos dias lá 🥰"
      },
      {
        nome: "Fernando",
        imagem: "https://a0.muscache.com/im/pictures/user/8f47263b-aa18-4615-90b8-7d2ccb41ce73.jpg",
        estrelas: 4,
        comentario: "A estadia no apartamento da Marli foi super tranquila. O apartamento é exatamente como descrito nas fotos, bem equipado e preparado para a nossa estadia. A localização no cumbuco também é privilegiada, com uma praia semi privativa mas não muito distante do centrinho. A comunicação com Marli também foi fácil. Espero no futuro voltar a esse apartamento."
      },
      {
        nome: "Diego",
        imagem: "https://a0.muscache.com/im/pictures/user/be913c06-def0-427f-8440-6caa7faeca73.jpg",
        estrelas: 5,
        comentario: "Lugar extremamente bem cuidado, todo organizado e limpo, anfitriões muito atenciosos e cordiais, desde o check-in explicando e mostrando os detalhes para que a hospedagem fosse super tranquila como de fato foi e também sempre se colocando a disposição para qualquer esclarecimento, recomendo muito a hospedagem."
      }
    ];

    const container = document.getElementById("avaliacoes");

    avaliacoes.forEach(cliente => {
      const card = document.createElement("div");
      card.classList.add("avaliacao-card");

      card.innerHTML = `
        <img src="${cliente.imagem}" alt="${cliente.nome}" class="avaliacao-foto">
        <div class="avaliacao-nome">${cliente.nome}</div>
        <div class="avaliacao-estrelas">${'★'.repeat(cliente.estrelas)}${'☆'.repeat(5 - cliente.estrelas)}</div>
        <div class="avaliacao-texto">${cliente.comentario}</div>
      `;

      container.appendChild(card);
    });