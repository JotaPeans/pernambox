> ## Esse é o projeto `Pernambox`. Feito para a cadeira de projetos 1 da CESAR SCHOOL.

## Começando

Esse repositório contém duas pastas:
- [`Arduino`](/Arduino/)
- [`pernambox-frontend`](/pernambox-frontend/)

---

A pasta `Arduino` está armazenada o código usado em um **`Arduino Leonardo`** para fazer o controle da aplicação.

A pasta `pernambox-frontend` está o código fonte do frontend do site usado par listar as musicas, bandas, artes e artistas.

### Para rodar o frontend, siga os passos:

---

> Passo 1; Entrando no diretório:
```bash
# No terminal digite:
cd pernambox-frontend
```

---

> Passo 2; Instalando dependências:
```bash
npm install
# or
yarn
```

---

> Passo 3; Executando o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
```

---

Abra [*http://localhost:3000*](http://localhost:3000) com o seu navegador para ver o resultado

Você pode adicionar mais dados de músicas, bandas, artes e artistas, apenas editando: [*dataset.ts*](/pernambox-frontend/src/lib/dataset.ts)
