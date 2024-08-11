import './App.css'
import Card from './components/Card/Card'

function App() {
  
  const akita = {
    nome: 'Akita',
    imagem: '/img/akita.jpg',
    descricao: 'Função na família: Companhia e guarda \n História: Originou-se de cães chamados “Akitas Matagis” (cães de tamanho médio para caça ao urso). \n Tamanho: De 58 a 70 cm. \n Temperamento: Por um lado, sua personalidade é forte e im- petuosa, e, por outro, meiga, carinhosa e extremamente leal. \n Convívio: Sua teimosia exige pulso firme e liderança. \n Curiosidade: O vermelho é a cor mais conhecida na raça.'
  }

  const beagle = {
    nome: 'Beagle',
    imagem: '/img/beagle.jpg',
    descricao: ' Função na família: Companhia, caça e esportes. História: Acredita-se que foi desenvolvido a partir do grande Foxhound para caçar com os homens a pé, de preferência atrás de lebres. Tamanho: De 33 cm a 40 cm. Temperamento: É equilibrado, amável, alerta, vigilante, alegre, corajoso, com grande vigor e determinação. Convívio: Cheio de entusiasmo, está sempre pronto para qualquer atividade que o envolva. Banhos mensais e escovação semanal bastam, pois soltam pouco pelo. Não deve ser deixado sozinho por muitas horas. Importante ficar atento ao peso do cão, pois é guloso. Curiosidade: O Beagle original, dos Estados Unidos, tinha pernas mais curtas e cabeças menores, como os Dachshunds.'
  }

  const boxer = {
    nome: 'Boxer',
    imagem: '/img/boxer.jpg',
    descricao: ' Função na família: Companhia e prote- ção do lar. História: Foi desenvolvido a partir do Brabant Bullenbeisser. Tamanho: De 57 a 63 cm (machos); e de 53 a 59 cm (fêmeas). Peso: De 25 a 30 kg. Temperamento: Extremamente leal, equilibrado e afetuoso com os donos, ele cria elos com todos os membros da família. É um protetor corajoso e inteligente, espe- cialmente com crianças, por quem é apai- xonado. Está sempre pronto para brincar. Na guarda, se desafiado, mostra-se um cão determinado e incorruptível. Convívio: Embora possa viver fora de casa, ama uma poltrona confortável na companhia do dono. É fácil de ser treinado. Naturalmente limpo e asseado, precisa de banhos regulares e escovação quinzenal. Curiosidade: Cão bastante equilibrado, late pouco, somente quando necessário. Revisão técnica: José Antônio, do canil Rancho do Bola.'
  }
  
  const caneCorso = {
    nome: 'CaneCorso',
    imagem: '/img/caneCorso.jpg',
    descricao: `• Função na família: Guarda, defesa pes- soal e companhia.
• História: É um cão molosso com origem nos grandes cães de combate vistos em es- culturas assírias dos anos 600 a.C. Seus an- cestrais eram usados pelos romanos para a proteção de propriedades e treinados pelo exército para atacar inimigos durante as batalhas. Entrou oficialmente na cinofilia em 1994, quando foi reconhecido pelo Ente Nazionale della Cinofilia Italiana. Criado hoje em 33 países, vem mostrando ascen- são meteórica nas estatísticas de registros de nações tradicionais na criação de cães.
• Tamanho: De 58 a 70 cm.
• Peso: De 40 a 50 kg.
• Temperamento: Trata-se de cão sere- no, nada barulhento nem hiperativo. Mas permanentemente ligado, interessado em detectar pessoas que lhe pareçam ameaça- doramente próximas da propriedade. Para tanto, na parte externa da casa costuma descansar em local que lhe permita obser- var a rua. Já no interior da moradia, prefere não desgrudar do dono. Equilibrado, nun- ca late à toa e, na presença do tutor, aceita visitas permanecendo apenas em estado de atenção constante. Ele não rosna ou arrepia pelos para uma visita na presença do dono. Se o fizer, prenda-o, pois pode atacar a pes- soa por identificar que não é bem-vinda e/ ou que existe algo de errado com ela.
• Convívio: Ágil e atlético, exige treina- mento regular e passeios diários de pelo menos uma hora. Sua grande capacidade de aprendizado o torna muito útil em várias atividades, sendo um cão de trabalho multi- funcional. É dócil e afetuoso com as pesso- as da casa, comporta-se com sensibilidade com crianças e idosos. Com os animais da casa também é dócil, assim como pode ser com os cães que cruzam o seu caminho nos passeios, se for corretamente socializado.
• Curiosidade: Os pretos e os cinzas estão entre os mais cobiçados da raça pelo fato de alguns exemplares terem olhos azuis. Na Itália, é possível presenciar Cane Corsos atuando em tarefas que vão além da guar- da, como em fazendas, reunindo rebanhos de cavalos e ovelhas ou na caça de javalis. Na França, participam de provas de faro e, em nosso país, atuam como cães de polícia. • Revisão técnica: Robinson Romão, canil Romão D’Itália.`
  }

  const husckySibeirano = {
    nome: 'Husky Siberiano',
    imagem: '/img/husky.jpg',
    descricao: `• Função na família: Companhia.
• História: Muito antiga – mais de 4 mil anos –, a raça era usada pela tribo nômade Chukchi para puxar trenó na Sibéria.
• Tamanho: De 50,5 cm a 60 cm.
• Peso: De 15,5 a 28 kg.
• Temperamento: É amigável e gentil, mas também atento e ex- pansivo. Muito inteligente, abre portas, cava buracos, uiva todos os dias e não gosta de solidão. Está sempre disposto ao trabalho. • Convívio: É extremamente leal e dócil, mas também indepen- dente, e isso é facilmente confundido com teimosia. Não é des- confiado com estranhos ou agressivo com outros cães.
• Curiosidade: Sua morfologia, desenvolvida para puxar trenós com cargas leves por longas distâncias, faz dele um cão propício a atividades ao ar livre.`
  }

  const cocker = {
    nome: 'Cocker Spaniel',
    imagem: '/img/cockerSpaniel.jpg',
    descricao: `Cheio de vida, facilmente adestrável e com grande ligação com sua família, esse cão se adapta a diferentes estilos de vida
• Função na família: Companhia.
• História: Foi desenvolvido para levantar aves em caçadas e foi reconhecido como uma raça separada do Field e do Springer Spaniel logo após a formação do Kennel Club, em 1873.
Como em diversas raças de cães de caça, existe hoje uma diferença entre aqueles uti- lizados para o trabalho e aqueles para expo- sição: o Cocker de exposição é uma versão mais robusta, mais pesada que o Cocker de trabalho.
• Tamanho: De 39 a 41 cm (machos) e de 38 a 39 cm (fêmeas).
• Peso: De 13 a 14,5 kg.
• Temperamento: Sua natureza é alegre, meiga e afetuosa. Possui forte ligação com os moradores da casa e segue o dono aonde quer que ele vá. Destemido, enfrenta qualquer tipo de terreno, onde adora seguir rastros.
Como gosta de agradar e é um glutão compulsivo (faz qualquer coisa por um petisco), aprende fácil. É cheio de vida e o movimento incessante de sua cauda mostra bem o espírito desse cão.
• Convívio: É um companheiro de primeira, pois se adapta a diferentes estilos de vida. Não importa se gosta de nadar, correr ou apenas assistir televisão, esse Cocker vai querer estar com você.
Faz a maior festa para desconhecidos, não sendo uma raça indicada para a guarda. Exige passeios diários para gastar sua alta energia e manter sua mente saudável. Como seus instintos de caça são fortes, precisa passear sempre de guia e morar em casa cercada para não sair por aí perseguindo aves.
Para manter a pelagem em dia, uma escovação semanal e trimming a cada 2 meses nos pelos da cabeça, das orelhas, em torno dos pés e da cauda são suficientes.
• Curiosidade: A raça está entre as queridinhas dos britânicos, sendo a quinta mais registrada no TKC nos anos de 2018 e 2019.`
  }

  const pastorBrancoSuico = {
    nome: 'Pastor Branco suiço',
    imagem: '/img/pastorbranco.jpg',
    descricao: `• Função na família: Companhia, trabalho, esportes e guarda. • História: É descendente direto do Pastor Alemão. Os primei- ros cães foram importados para a Suíça no início dos anos 1970. • Tamanho: De 58 a 66 cm (machos) e de 53 a 61 cm (fêmeas). • Peso: De 30 a 40 kg (machos) e de 25 a 35 kg (fêmeas).
• Temperamento: Alegre e equilibrado, diverte-se em ação. Amigável e discreto, possui alta capacidade social e é devotado ao seu dono. Nunca medroso ou agressivo sem ser provocado.
• Convívio: Fácil de treinar, com capacidade para todo tipo de treinamento. Deve passear 30 minutos por dia e ser escovado a cada dois dias.
• Curiosidade: Apesar de serem raças distintas, a raça herdou de seu primo, o Pastor Alemão, a versatilidade de trabalho, sen- do hábil em várias funções.`
  }
  
  
  const dogs =[akita, beagle, boxer, caneCorso, cocker, husckySibeirano, pastorBrancoSuico]

  return (
    <>
      {dogs.map((dog)=>{
        return <Card key={dog.nome} item={dog}/>
      })}
    </>
  )
}

export default App
