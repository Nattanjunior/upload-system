

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
- **Swagger:** Documentação interativa da API.

---

## Documentação da API

A API possui documentação interativa gerada pelo Swagger, disponível em:

**http://localhost:3000/docs**

> **Nota:** A documentação estará disponível quando a aplicação estiver rodando localmente.

A documentação inclui:
- Todos os endpoints disponíveis
- Parâmetros de entrada e saída
- Exemplos de requisição e resposta
- Testes interativos dos endpoints

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




