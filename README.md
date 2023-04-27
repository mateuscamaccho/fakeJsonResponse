
# Fake Json Response API

Trata-se de uma API que recebe dados e os retorna em forma de JSON, podendo receber via Query String e pelo corpo da requisição.

## Funcionalidades

- Recebimento de dados via Query String;
- Recebimento de dados via Body da requisição;
- Resposta com os dados recebidos;
- Resposta com dados estáticos;

## Rodando localmente
Instale o NodeJs  
```bash
https://nodejs.org/en/download?utm_source=blog
```

Clone o projeto

```bash
  git clone git@github.com:mateuscamaccho/fakeJsonResponse.git
  https://github.com/mateuscamaccho/fakeJsonResponse.git
```

Entre no diretório do projeto

```bash
  cd fakejsonresponse
```

Instale as dependências

```bash
  npm install cors  
  npm install express 
  npm install nodemon
  npm install express-rate-limit
```

Inicie o servidor

```bash
  npm run dev
```

## Stacks e versões utilizadas

- **cors**: 2.8.5  
- **express**: 4.18.2  
- **nodemon**: 2.0.22 
- **express-rate-limit:** 6.7.0  

**Versionamento:** GIT e Gitlab



## Documentação da API

API em produção: https://fake-json-response.vercel.app

#### Recebe os dados via Query String

```http
  GET /fakeResponseByQueryString
```
##### Exemplo requisição:
```http
  https://fake-json-response.vercel.app/fakeResponseByQueryString?param1=loremipsum&param2=loremipsum
```

##### Retorno:
```bash
    {
        param1:loremipsum,
        param2:loremipsum
    }
```

#### Recebe os dados via Body

```http
  POST /fakeResponseByBody
```

##### Exemplo requisição:
```Bash
Body:
    {
        param1:loremipsum,
        param2:loremipsum
    }

```

##### Retorno:
```bash
    {
        param1:loremipsum,
        param2:loremipsum
    }
```

#### Resposta estática

```http
  GET /fakeResponseStatic
```
##### Exemplo requisição:
```Bash
  https://fake-json-response.vercel.app/fakeResponseStatic
```

##### Retorno:
```bash
   {
	"cod": "Ok",
	"param1": "Tempor proident laboris aliqua commodo voluptate culpa culpa adipisicing culpa labore.",
	"param2": 123,
	"param3": [
		"In ullamco ea dolore nulla velit eu aliqua aute cillum.",
		"Ipsum irure nulla et pariatur aliqua excepteur.",
		"Excepteur sunt amet proident dolor do elit duis cillum aute excepteur proident magna exercitation reprehenderit."
	],
	"param4": {
		"text1": "Minim adipisicing ex consectetur est eiusmod non laborum nulla id nulla laborum eiusmod deserunt.",
		"text2": "Aliqua consequat do sunt ullamco Lorem.",
		"largeText1": "Laboris ipsum culpa nostrud ex non aute ex fugiat eu elit deserunt ipsum labore. Fugiat laborum esse eiusmod do fugiat eu labore est irure incididunt magna. Tempor fugiat nulla exercitation ex ullamco quis id consectetur commodo est in non. Culpa voluptate tempor aute nisi et amet ex eiusmod et occaecat aute fugiat consequat. Deserunt eu nostrud magna eiusmod consequat et. Occaecat adipisicing reprehenderit voluptate labore. In anim amet tempor ea non occaecat veniam voluptate.",
		"largeText2": "Laboris quis eiusmod irure et. Elit magna officia ipsum mollit laboris excepteur minim velit. Dolor do irure culpa aliquip ut Lorem sit excepteur magna laboris magna. Eiusmod pariatur nulla tempor culpa eu amet esse occaecat. Velit tempor id officia laborum deserunt laboris amet."
	},
	"param5": {
		"base64encodeText1": "V2VsY29tZSB0byBmYWtlIGpzb24gcmVzcG9uc2Uh",
		"base64encodeText2": "VGhpcyBpcyBhIHN0cmluZyBjb2RlZCBpbiBiYXNlNjQgdG8gdXNlIG9uIHBlcnNvbmFsIHByb2plY3RzIQ=="
	}
} 
```