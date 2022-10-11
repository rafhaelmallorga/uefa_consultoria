import React from 'react'
import { barcelona_logo, bayern_logo, bola_de_ouro, chelsea_logo, liverpool_logo, manchester_logo,  medalha_de_ouro,  milan_logo,  nubia_celebrate,  paris_logo, real_logo } from '../assets'
import Header from '../components/Header'
import Welcome from '../components/Welcome'

const About = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col justify-start items-center'>
      <Header />
      <Welcome />
      <div className='z-10 w-full h-full bg-[#1a124981] flex flex-col items-center justify-start '>
        <div className='flex flex-col w-full max-w-[1000px] h-[800px] bg-[#262568a6] p-4 rounded box__shadow text-white my-[30px] overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-track-cyan-700 scrollbar-thumb-cyan-900'>
          <div className='w-full flex'>
            <div className='flex flex-col'>
              <h3 className='text-[30px] font-bold text-red-500 text__shadow'>Objetivo:</h3>
              <p className='font-bold'>
                É ser selecionado na maior quantidade de times possíveis. Mostrando todas suas competências, como: Foco, atenção, vontade no que faz, dicas, mensagem de venda, qualidade no seu trabalho, entre outras.
              </p>
            </div>
            <div className='md:w-80'/>
          </div>
          <div className='w-full flex justify-center items-center font-bold my-10'>
            <div className='w-[600px]'> 
              <img className='rounded-full' src={nubia_celebrate} alt="Nubia comemorando" />
            </div>
            <div className='flex flex-col'>
              <p>
              Ao ser selecionado em um time, além de ganhar os benefícios do time, você recebe o escudo digital do mesmo.
              </p>
              <br/>
              <p>
              Além de acumular $, vocês irão acumular pontos em cada etapa - Quem atingir a maior pontuação, se juntará com o melhor de cada grupo (Greens e Rockets) para a campanha de Novembro
              </p>
              <br/>
              <p>
              Obs: Vocês poderão acompanhar em um site - APP igual o Cartola.
              </p>
              <br/>
              <span>Prontos?</span>
              <span>E apita o árbitro!</span>
            </div>
          </div>
          <div className='w-full flex flex-col justify-center items-center font-bold'>
            <h3 className='text-[40px] text-red-500 text__shadow'>Liverpool</h3>
            <div className='flex justify-center w-full items-center'>
              <div>
                <p className='mb-4'><span className='text__shadow text-red-500'>Desafio 1:</span> Dicas para o processo seletivo: Realizar no mínimo 10 (ids) dicas diferentes por dia. (total 30) Duração: 10 - 11 - 13/10 = $12,00 +15 pontos.</p>
                <p className='mb-4'><span className='text__shadow text-red-500'>Desafio 2:</span> Realizar no mínimo 15 (ids) Mensagem de venda  por dia (total 45) Duração: 10 - 11 - 13/10 = $12,00 +15 pontos</p>
                <p className='mb-4'><span className='text__shadow text-red-500'>Obs:</span> Deverão colocar no arquivo do drive compartilhado - qual foi a dica / mensagem utilizada.</p>
              </div>
              <div className='flex justify-center items-center'>
                <img src={liverpool_logo} alt="Liverpool logo" className='w-[600px]'/>
              </div>
            </div>
          </div>

          <div className='w-full flex flex-col justify-center items-center font-bold'>
            <h3 className='text-[40px] text-red-500 text__shadow mb-8'>Bayern</h3>
            <div className='flex flex-row-reverse w-full justify-around items-center'>
              <div className='w-[500px]'>
                <p className='mb-4'><span className='text__shadow text-red-500'>Desafio 1:</span> Realizou mais encs do discador: Data: 13 e 14 - mín. 20 IDS = $12,00
Vale: 15 pontos.</p>
                <p className='mb-4'><span className='text__shadow text-red-500'>Desafio 2:</span> Realizar mais encs Receptivas - Mínimo 10 - no dia 14: $8,00
 Vale: 10 pontos</p>
               
              </div>
              <div className='flex justify-center items-center'>
                <img src={bayern_logo} alt="Liverpool logo" className='w-[200px]'/>
              </div>
            </div>
          </div>

          <div className='w-full flex flex-col justify-center items-center font-bold'>
            <h3 className='text-[40px] text-red-500 text__shadow mb-8'>Manchester</h3>
            <div className='flex w-full justify-around items-center'>
              <div className='w-[500px]'>
                <p className='mb-4'><span className='text__shadow text-red-500'>Desafio 1:</span> A equipe precisa atingir de 17 à 19/10 no mínimo 480 encs do discador (mín 10 para cada por dia) = Atingiu? Todos ganham + 60 pontos.</p>
                <p className='mb-4'><span className='text__shadow text-red-500'>Desafio 2:</span> Mas, o destaque do desafio ganha + $18,00 (desemp. maior média de encs nesses dias - mesmo a equipe não atingindo) + 25 pontos</p>
               
              </div>
              <div className='flex justify-center items-center'>
                <img src={manchester_logo} alt="Liverpool logo" className='w-[200px]'/>
              </div>
            </div>
          </div>

          <div className='w-full flex flex-col justify-center items-center font-bold'>
            <h3 className='text-[40px] text-red-500 text__shadow mb-8'>Paris</h3>
            <div className='flex flex-row-reverse w-full justify-around items-center'>
              <div className='w-[500px]'>
                <p className='mb-4'><span className='text__shadow text-red-500'>Desafio 1:</span> Os Reds precisam atingir entre 19, 20 e 21/10 no mínimo 192 IDS duplos (média de 4 por dia por Red) 
Todos ganham + 60 pontos.</p>
                <p className='mb-4'><span className='text__shadow text-red-500'>Desafio 2:</span> Mas, o destaque do desafio ganha + $18,00 (desemp. maior média de encs nesses dias - mesmo a equipe não atingindo) + 25 pontos</p>
               
              </div>
              <div className='flex justify-center items-center'>
                <img src={paris_logo} alt="Liverpool logo" className='w-[200px]'/>
              </div>
            </div>
          </div>

          <div className='w-full flex flex-col justify-center items-center font-bold'>
            <h3 className='text-[40px] text-red-500 text__shadow mb-8'>Barcelona</h3>
            <div className='flex w-full justify-around items-center'>
              <div className='w-[500px]'>
                <p className='mb-4'><span className='text__shadow text-red-500'>Desafio 1:</span> Aproveitando o desafio do Manchester United: O destaque em encs do dia 17 - ganhará um presente surpresa (só digo que não faz parte da "dieta" do atleta .. nham...) mín. 23 encs (desempate - total de contratos).</p>
                <p className='mb-4'><span className='text__shadow text-red-500'>Desafio 2:</span> Aproveitando...O jogador que conseguir na persuasão  reverter o NÃO em ENC (mín 4): 
Ganhará $8,00 + 15 pontos
Data: 20/10</p>
               
              </div>
              <div className='flex justify-center items-center'>
                <img src={barcelona_logo} alt="Liverpool logo" className='w-[200px]'/>
              </div>
            </div>
          </div>

          <div className='w-full flex flex-col justify-center items-center font-bold'>
            <h3 className='text-[40px] text-red-500 text__shadow mb-8'>Chelsea</h3>
            <div className='flex flex-row-reverse w-full justify-around items-center'>
              <div className='w-[500px]'>
                <p className='mb-4'><span className='text__shadow text-red-500'>Desafio 1:</span> Quem crescer mais contratos na semana de 17 a 21 com no mínimo 6 contratos: 
$25,00 + 40 pontos.</p>
               
               
              </div>
              <div className='flex justify-center items-center'>
                <img src={chelsea_logo} alt="Liverpool logo" className='w-[200px]'/>
              </div>
            </div>
          </div>

          <div className='w-full flex flex-col justify-center items-center font-bold'>
            <h3 className='text-[40px] text-red-500 text__shadow mb-8'>Milan</h3>
            <div className='flex w-full justify-around items-center'>
              <div className='w-[500px]'>
                <p className='mb-4'><span className='text__shadow text-red-500'>Desafio 1:</span> Entre 24 -25 - 26 quem mais realizar encs do discador - mínimo 30: $18,00 + 25 PONTOS.</p>
               
               
              </div>
              <div className='flex justify-center items-center'>
                <img src={milan_logo} alt="Liverpool logo" className='w-[200px]'/>
              </div>
            </div>
          </div>

          <div className='w-full flex flex-col justify-center items-center font-bold'>
            <h3 className='text-[40px] text-red-500 text__shadow mb-8'>Real Madrid</h3>
            <div className='flex w-full flex-row-reverse justify-around items-center'>
              <div className='w-[500px]'>
                <p className='mb-4'><span className='text__shadow text-red-500'>Desafio 1:</span> Dia 27e 28 quem mais realizar encs duplos Mín. 10 IDS = $12,00 + 15 pontos.</p>
                <p className='mb-4'><span className='text__shadow text-red-500'>Desafio 2:</span> Dia 31 Quem mais realizar encs do discador mín 10: $8,00 + 15 pontos.</p>        
               
              </div>
              <div className='flex justify-center items-center'>
                <img src={real_logo} alt="Liverpool logo" className='w-[200px]'/>
              </div>
            </div>
          </div>

          <div className='w-full flex flex-col justify-center items-center font-bold'>
            <h3 className='text-[40px] text-red-500 text__shadow mb-8'>Bola de Ouro</h3>
            <div className='flex w-full  justify-around items-center'>
              <div className='w-[500px]'>
                <p className='mb-4'><span className='text__shadow text-red-500'>Desafio 1:</span> Atingiu 100% na auditoria da semana 17 a 21: + 20 pontos.</p>
                <p className='mb-4'><span className='text__shadow text-red-500'>Desafio 2:</span> Atingiu 75% na auditoria do mês: +60 pontos.</p>        
                <p className='mb-4'><span className='text__shadow text-red-500'>Desafio 3:</span> Atingiu 100% auditoria do mês: + 80 pontos.</p>  
              </div>
              <div className='flex justify-center items-center'>
                <img src={bola_de_ouro} alt="Liverpool logo" className='w-[200px]'/>
              </div>
            </div>
          </div>

          <div className='w-full flex flex-col justify-center items-center font-bold'>
            <h3 className='text-[40px] text-red-500 text__shadow mb-8'>Medalha de Ouro</h3>
            <div className='flex w-full flex-row-reverse justify-around items-center'>
              <div className='w-[500px]'>
                <p className='mb-4'><span className='text__shadow text-red-500'>Desafio 1:</span> Cresceu até 2 contratos no dia: + 15 pontos.</p>
                <p className='mb-4'><span className='text__shadow text-red-500'>Desafio 2:</span> Cresceu 3 contratos no dia: + 20 pontos.</p>        
                <p className='mb-4'><span className='text__shadow text-red-500'>Desafio 3:</span> Cresceu 4 ou mais contratos: +30 pontos.</p>
                <p className='mb-4'><span className='text__shadow text-red-500'>Desafio 4:</span> A cada 10 notas 5 na pesquisa de satisfação: +10 pontos.</p>
                <p className='mb-4'><span className='text__shadow text-red-500'>Desafio 5:</span> Atingiu no mês mín 20% da pesquisa: +25 pontos.</p>        
                <p className='mb-4'><span className='text__shadow text-red-500'>Desafio 6:</span> Atingiu no mês mín 25% da pesquisa: +50 pontos.</p>
              </div>
              <div className='flex justify-center items-center'>
                <img src={medalha_de_ouro} alt="Liverpool logo" className='w-[200px]'/>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default About