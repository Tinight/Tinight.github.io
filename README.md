# Páginas e projetos — Breitner Maquito

Repositório que reúne a página pessoal e as páginas de projetos de Breitner Maquito. Cada projeto fica em uma subpasta, com endereço próprio no GitHub Pages.

**Site principal:** [tinight.github.io](https://tinight.github.io/)
**Repositório:** [Tinight/Tinight.github.io](https://github.com/Tinight/Tinight.github.io)

## Páginas publicadas

| Página | Endereço | Conteúdo |
| --- | --- | --- |
| Pessoal | [Página inicial](https://tinight.github.io/) | Central com Portfólio Profissional, WPP Money Machine e Pages; LinkedIn e TikTok pessoais no rodapé. |
| Pages | [/pages/](https://tinight.github.io/pages/) | Coleção de páginas: Bíblico em Cores, Por Trás do Óbvio e Cleaning Quote & Job Check. |
| Portfólio profissional | [/portfolio/](https://tinight.github.io/portfolio/) | Projeto Aura, tecnologias utilizadas e evolução futura em Power BI. |
| Por Trás do Óbvio | [/portrasdoobvio/](https://tinight.github.io/portrasdoobvio/) | Acesso aos canais do projeto no YouTube e TikTok. |
| Bíblico em Cores | [/biblicoemcores/](https://tinight.github.io/biblicoemcores/) | Apresentação do livro digital Minha Primeira Bíblia para Colorir, compra pela Kiwify, canais e criador. |
| Cleaning Quote & Job Check | [/cleaning/](https://tinight.github.io/cleaning/) | Página de links para compra, redes sociais e acesso ao aplicativo. |
| WPP Money Machine | [/wpp-money-machine/](https://tinight.github.io/wpp-money-machine/) | Dois acessos: apresentação comercial externa e Instagram pessoal do criador. |

Os endereços são verificados após cada publicação. A nova coleção Pages não altera os endereços das páginas existentes. Verificar carregamento não equivale a uma compra de teste ou auditoria completa dos serviços externos.

## Organização dos arquivos

```text
Tinight/
├── index.html              # Página pessoal
├── styles.css             # Estilos da página pessoal
├── assets/                # Artes da página pessoal
├── portfolio/             # Portfólio profissional
├── pages/                 # Coleção de páginas dos projetos
├── portrasdoobvio/         # Canais Por Trás do Óbvio
├── biblicoemcores/         # Livro Bíblico em Cores
├── cleaning/              # Cleaning Quote & Job Check
├── wpp-money-machine/     # Página de links do WPP
├── sw.js                  # Transição do cache do site antigo
└── README.md
```

**Pasta local oficial:** `G:\Meu Drive\Projetos Pessoais\Tinight`.

As subpastas pertencem a este mesmo repositório; não precisam de repositórios separados. A apresentação comercial do WPP continua hospedada externamente em [wpp-money-machine.pages.dev](https://wpp-money-machine.pages.dev/), preservada sem cópia ou alteração por esta página de links.

## Edição e prévia local

As páginas usam HTML e CSS simples, sem ferramentas de compilação ou dependências necessárias. Edite textos e links no `index.html` da página desejada, estilos no CSS correspondente e imagens em sua pasta de recursos. Consulte também os READMEs de cada projeto, quando disponíveis.

Abra o arquivo HTML no navegador ou, com Python disponível, execute na raiz do repositório:

```powershell
python -m http.server 8767 --bind 127.0.0.1
```

Acesse [a prévia local](http://127.0.0.1:8767/) e acrescente a subpasta desejada, por exemplo `/biblicoemcores/` ou `/wpp-money-machine/`.

Preserve caminhos relativos para que imagens e estilos funcionem nos subdiretórios. Teste celular, computador, teclado e destinos dos links antes de publicar. Mantenha as artes aprovadas e não inclua credenciais, rastreamento ou integrações não autorizadas.

## Decisões preservadas

- A página pessoal é independente da navegação e conteúdo de cada subpágina.
- O portfólio apresenta o Aura; Power BI está identificado como evolução futura, sem dashboards anunciados como concluídos.
- A página do Bíblico em Cores prioriza o livro principal. O brinde Meu Primeiro Momentinho com Deus não está disponível para download ou solicitação na página; não há integração ManyChat nela.
- A página WPP Money Machine possui somente os dois destinos aprovados. O perfil `@breitnermaquito` é pessoal e identifica o criador.
- Não há necessidade de comprar domínio para utilizar os endereços atuais do GitHub Pages.

## Publicação

O GitHub Pages está configurado para publicar a branch `main`, a partir da pasta raiz `/(root)`, com HTTPS. Enviar alterações para essa branch pode iniciar a publicação automática.

Antes de cada envio:

1. Confira o estado do Git e preserve alterações existentes.
2. Faça a prévia e os testes apropriados.
3. Obtenha autorização para publicar o escopo revisado.
4. Envie somente os arquivos pretendidos.
5. Confirme o resultado no endereço público após a implantação.

Código salvo no GitHub e site publicado são estados diferentes. Este repositório é público: seu conteúdo pode ser consultado e copiado, mas alterações diretas dependem de permissão de escrita.

## Organização da página pessoal — versão atual

A principal usa azul-marinho, cartões em azul secundário e detalhes em ciano. A navegação apresenta Portfólio Profissional, WPP Money Machine e Pages, nessa ordem. A demonstração Aura permanece no portfólio. LinkedIn e TikTok pessoais ficam no rodapé, com os endereços confirmados pelo usuário. Pages reúne os três projetos já existentes e pode receber novos cartões aprovados. Seu CSS é compartilhado com a raiz; os demais projetos usam estilos próprios.
