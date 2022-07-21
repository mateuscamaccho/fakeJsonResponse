const cors = require('cors');// imporanto biblioteca cors 

const express = require('express'); // Importa o modulo express
const app = express(); // cria uma variavel que chama a a função express
const fs = require('fs')

port = 5000
app.listen(port); // faz com que o servidor node seja executado na porta 3000.... localhost:3000

// configurando CORS
corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}
app.use(cors(corsOptions))
// fim cors

//configurando express
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())
//express

// retorno de um json para o front end 
app.get('/', (req, res) => {
    return res.send('<h1 align="center">Olá, o servidor NODEJS da TM esta no ar!</h1>')
})

app.post('/contadorCell', (req, res) => {
    // console.log(req.body)
    // console.log(req.headers)

    if (req.body.amostra == 1) {
        return res.json({
            status: 1,
            mensagem: "Sucesso",
            retorno: [
                {
                    amostra: '1111111111111',
                    nome: 'Mateus Silva Camacho 11111111111111111111111111111111111',
                    sexo: 'M',
                    idade: '14 anos',
                    prontuario: '1234567891',
                    requisicao: '1111111111',
                    local: 'UTI 1° Andar',
                    protocolo: 'teste protocolo',
                    hemograma: {
                        hemaceas: '1',
                        hemoglobina: '2',
                        hematocrito: '2',
                        vcm: '2',
                        hcm: '2',
                        chcm: '2',
                        rdw: '2',
                        nrbc: '2',
                        plaquetas: '2',
                        leucocitos: '2',
                        blastos: '2',
                        mieloblastos: '2',
                        promicelocitos: '2',
                        mielocitos: '2',
                        metamielocitos: '2',
                        bastonetes: '2',
                        segmentados: '2',
                        linfocitos: '2',
                        eosinofilos: '2',
                        basofilos: '2',
                        linfocitosAtipicos: '2',
                        plasmocitos: '2',
                        outrasCelulas: '2',
                        celulasLinfonoides: '2',
                        celulasAnomalas: '2',
                        celulasMonocitoides: '2',
                        celulasMonocitoides: '2',
                    },
                    imagens: ['']
                }
            ]


        })
    } else {
        return res.json({
            status: 1,
            mensagem: "Sucesso",
            retorno: [
                {
                    amostra: '222222222222',
                    nome: 'Gabriel Ferrari111111111111111111111111111111111111111111111',
                    sexo: 'F',
                    idade: '24 anos',
                    prontuario: '1234567891',
                    requisicao: '1111111111',
                    local: 'UTI 2° Andar',
                    protocolo: 'teste protocolo',
                    hemograma: {
                        hemaceas: '1',
                        hemoglobina: '2',
                        hematocrito: '2',
                        vcm: '2',
                        hcm: '2',
                        chcm: '2',
                        rdw: '2',
                        nrbc: '2',
                        plaquetas: '2',
                        leucocitos: '2',
                        blastos: '2',
                        mieloblastos: '2',
                        promicelocitos: '2',
                        mielocitos: '2',
                        metamielocitos: '2',
                        bastonetes: '2',
                        segmentados: '2',
                        linfocitos: '2',
                        eosinofilos: '2',
                        basofilos: '2',
                        linfocitosAtipicos: '2',
                        plasmocitos: '2',
                        outrasCelulas: '2',
                        celulasLinfonoides: '2',
                        celulasAnomalas: '2',
                        celulasMonocitoides: '2',
                        celulasMonocitoides: '2',

                    }
                }
            ]

        })

    }


})