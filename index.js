const cors = require('cors');// imporanto biblioteca cors 

const express = require('express'); // Importa o modulo express
const app = express(); // cria uma variavel que chama a a função express
const fs = require('fs')
const axios = require('axios');

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

app.get('/options', (req, res) => {
    res.json(
        {
            "/fakereturn": {
                "tipoaceito": "POST",
                "descricao": "Nessa URL as configurações(header e body) da requisição realizada será retornado."
            },
            "/contadorCell": {
                "tipoceito": "POST",
                "descricao": "Nessa URL envie no body a chave 'amostra' com valor 1 ou 2 e o retorno será um json com dados ficticios de pacientes com exame hemograma."
            },
            "/consultarcep": {
                "tipoaceito": "POST",
                "descricao": "Nessa URL envie no body a chave cep com o cep sem caracteres especiais e tipo com o tipo que deverá retornorar na tag dados(json ou xml)"
            }
        }
    )
})
app.get('/fakereturn', (req, res) => {
    return res.json({
        item1: "Aqui é uma string qualquer!",
        item2: {
            subitem1: "Aqui é um json dentro do json de retorno",
            subitem2: "Outra frase qualquer!"
        },
        item3: ["aqui é um array!", "frase array 1", "frase array 2", "frase array 3", "frase array 4"]
    })
})

app.post('/fakereturn', (req, res) => {
    return res.json({
        headers: req.headers,
        body: req.body
    })
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

app.post('/consultarcep', (req, res) => {
    console.log(req.body.tipo)
    if (req.body.cep.trim() == "") {
        res.json({
            mensagem: "CEP em branco, verifique e refaça a requisição!"
        })
    } else if (req.body.tipo == 'xml' || req.body.tipo == 'json') {
        axios({
            method: "get",
            url: "https://viacep.com.br/ws/" + req.body.cep + "/" + req.body.tipo + "/"
            // responseType: "JSON",
        }).then(function (response) {
            console.log(response)
            return res.json({
                mensagem: "Sucesso na consulta!",
                data: response.data
            })
        });

    } else {
        res.json({
            mensagem: "Tipo não permitido, tente json ou xml"
        })

    }
})
