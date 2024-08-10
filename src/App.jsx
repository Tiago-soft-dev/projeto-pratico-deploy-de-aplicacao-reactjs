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
  
  
  
  const dogs =[akita, beagle, boxer]

  return (
    <>
      {dogs.map((dog)=>{
        return <Card key={dog.nome} item={dog}/>
      })}
    </>
  )
}

export default App
