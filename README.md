<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

# Upload System API

## Visão Geral

Este projeto é uma API para upload de arquivos de áudio (MP3), construída com o framework [NestJS](https://nestjs.com/) e integrando o armazenamento de arquivos via [Supabase Storage](https://supabase.com/storage). O sistema valida o tipo, tamanho e extensão do arquivo, garantindo segurança e integridade no processo de upload.

---

## Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/):** Framework Node.js para aplicações escaláveis e testáveis.
- **TypeScript:** Tipagem estática para JavaScript.
- **Supabase Storage:** Armazenamento de arquivos na nuvem.
- **Jest:** Testes unitários e e2e.
- **Supertest:** Testes HTTP automatizados.
- **Multer:** Middleware para upload de arquivos.
- **dotenv:** Gerenciamento de variáveis de ambiente.

---

## Instalação e Execução

```bash
# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run start:dev

# Execute em produção
npm run start:prod

# Testes unitários
npm run test

# Testes end-to-end
npm run test:e2e
```

> **Nota:** Configure as variáveis de ambiente SUPABASE_URI e SUPABASE_KEY em um arquivo `.env` na raiz do projeto.

---

## Endpoints da API

### 1. Upload de Áudio

- **POST** `/upload/audio`
- **Descrição:** Realiza o upload de um arquivo de áudio MP3. Valida tipo, extensão e tamanho (máx. 5MB).

#### Parâmetros (multipart/form-data)
- `file`: Arquivo MP3 a ser enviado.

#### Exemplo de Requisição
```http
POST /upload/audio HTTP/1.1
Host: localhost:3000
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW

------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="file"; filename="audio.mp3"
Content-Type: audio/mpeg

<conteúdo binário do arquivo .mp3>
------WebKitFormBoundary7MA4YWxkTrZu0gW--
```

#### Exemplo de Resposta (Sucesso)
```json
{
  "data": {
    "id": "<uuid>",
    "path": "/upload/audio.mp3",
    "fullPath": "/upload/audio.mp3"
  },
  "error": null
}
```
- **Status:** 201 Created

#### Exemplo de Resposta (Erros)
- **Arquivo não enviado:**
  ```json
  { "message": "Arquivo não enviado", "statusCode": 400 }
  ```
- **Tipo inválido:**
  ```json
  { "message": "Arquivo de audio invalido.", "statusCode": 400 }
  ```
- **Tamanho excedido:**
  ```json
  { "message": "Arquivo maior que o suportado (5mb)", "statusCode": 400 }
  ```
- **Extensão inválida:**
  ```json
  { "message": "Arquivo .MP3 invalido", "statusCode": 400 }
  ```

---

## Fluxo de Validação

1. **Arquivo não enviado:** Retorna erro 400.
2. **Tipo MIME diferente de `audio/mpeg`:** Retorna erro 400.
3. **Tamanho diferente de 5MB:** Retorna erro 400.
4. **Extensão diferente de `.mp3`:** Retorna erro 400.
5. **Upload válido:** Salva no Supabase Storage e retorna dados do arquivo.

---

## Estrutura do Projeto

- `src/`
  - `app.module.ts` — Módulo principal
  - `module/` — Módulos de domínio
    - `uploads/` — Upload de arquivos
      - `upload-audio/` — Upload de áudio
        - `upload-audio.controller.ts` — Controller do endpoint
        - `upload-audio.service.ts` — Lógica de negócio
        - `upload-audio.interceptor.ts` — Validação de arquivo
  - `libs/supabase/` — Integração com Supabase

---

## Testes

- Testes unitários e e2e garantem a robustez da API.
- Para rodar os testes:
  ```bash
  npm run test         # unitários
  npm run test:e2e     # end-to-end
  ```

---

## Observações

- O projeto segue boas práticas de modularização, validação e testes.
- Para produção, configure corretamente as variáveis de ambiente e buckets do Supabase.
- Sinta-se à vontade para contribuir ou adaptar para outros tipos de arquivos.

---

## Contato

Dúvidas ou sugestões? Abra uma issue ou entre em contato pelo repositório.
