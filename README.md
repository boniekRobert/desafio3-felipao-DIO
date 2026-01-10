# 3️⃣ Desafio: Escrevendo as Classes de um Jogo

**Desafio do curso de Lógica de Programação com JavaScript da [DIO](https://www.dio.me/).**

## 🛠️ Tecnologias e Conceitos Utilizados

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## 🎯 Objetivo

Crie uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades:

- **Nome**
- **Idade**
- **Tipo** (ex: guerreiro, mago, monge, ninja)

Além disso, deve ter um método chamado `atacar` que deve atender os seguintes requisitos:

1. Exibir a mensagem: `"o {tipo} atacou usando {ataque}"`
2. Onde o `{tipo}` deve ser concatenando o tipo que está na propriedade da classe
3. E no `{ataque}` deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

| Tipo do Herói | Ataque Utilizado |
| :--- | :--- |
| Mago | usou magia |
| Guerreiro | usou espada |
| Monge | usou artes marciais |
| Ninja | usou shuriken |

## 📤 Saída

Ao final deve se exibir uma mensagem:

`"o {tipo} atacou usando {ataque}"`

Exemplos de Saída:

```bash
o mago atacou usando magia
o guerreiro atacou usando espada