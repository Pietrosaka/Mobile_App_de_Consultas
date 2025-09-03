# Sistema de Agendamento de Consultas Médicas

[![React Native](https://img.shields.io/badge/React%20Native-0.72.0-blue.svg)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.0-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Este é um aplicativo mobile completo para agendamento e gerenciamento de consultas médicas, desenvolvido com **React Native** e **TypeScript**.

## Visão Geral

O projeto é uma solução prática e intuitiva para pacientes que desejam agendar e controlar seus compromissos de saúde. Com uma interface **moderna e responsiva**, ele simplifica a busca por médicos, a marcação de horários e a gestão de consultas, tudo na palma da mão.

### Destaques do Projeto

* **Agendamento Simplificado:** Encontre médicos, selecione a especialidade e marque sua consulta em poucos toques.
* **Gerenciamento Total:** Visualize, edite ou cancele seus compromissos com facilidade.
* **Interface Otimizada:** Navegação intuitiva e design limpo para uma experiência de usuário fluida.
* **Armazenamento Local:** Usa **AsyncStorage** para persistir os dados no dispositivo, garantindo que suas informações estejam sempre disponíveis.

---

## Tecnologias e Ferramentas

Construído sobre uma base robusta de tecnologias modernas para desenvolvimento mobile:

* **React Native:** O framework principal para construir a aplicação.
* **TypeScript:** Garante um código mais seguro e escalável com tipagem estática.
* **Styled Components:** Permite estilização baseada em componentes, facilitando a manutenção do design.
* **React Navigation:** Gerencia a navegação entre as diferentes telas do app.
* **AsyncStorage:** Biblioteca para armazenamento de dados local.
* **React Native Elements:** Kit de componentes de UI prontos para uso, acelerando o desenvolvimento.

---

## Como Rodar o Projeto

Siga estes passos simples para configurar e executar o aplicativo em sua máquina.

### Pré-requisitos

Certifique-se de que você tem as seguintes ferramentas instaladas:

* **Node.js** (versão 14+)
* **npm** ou **yarn**
* **React Native CLI**
* **Android Studio** (para Android) ou **Xcode** (para iOS)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/marcacaoDeConsultasMedicas.git](https://github.com/seu-usuario/marcacaoDeConsultasMedicas.git)
    cd marcacaoDeConsultasMedicas
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```
3.  **Instale as dependências do iOS (apenas em macOS):**
    ```bash
    cd ios
    pod install
    cd ..
    ```
4.  **Inicie o aplicativo:**
    ```bash
    # Para Android
    npm run android
    # ou
    yarn android

    # Para iOS (apenas em macOS)
    npm run ios
    # ou
    yarn ios
    ```

---
src/
├── components/         # Componentes reutilizáveis (botões, formulários, etc.)
├── screens/            # As telas principais do aplicativo
├── styles/             # Estilos globais e temas
├── types/              # Definições de tipos do TypeScript
└── utils/              # Funções utilitárias
---

## Contribuição

Contribuições são sempre bem-vindas! Se você deseja ajudar a melhorar este projeto, siga o fluxo abaixo:

1.  Faça um **fork** do repositório.
2.  Crie uma nova branch para a sua funcionalidade (`git checkout -b minha-nova-feature`).
3.  Faça suas alterações e **commit**-as (`git commit -m 'Adiciona nova funcionalidade'`).
4.  Envie suas mudanças para o repositório (`git push origin minha-nova-feature`).
5.  Abra um **Pull Request**.

## Licença

Este projeto está licenciado sob a **Licença MIT**. Para mais detalhes, consulte o arquivo [LICENSE](LICENSE).

## Autores

* **Professor Hete Caetano** - [hete.caetano@fiap.com.br](mailto:hete.caetano@fiap.com.br)

## Agradecimentos Especiais

* À comunidade **React Native** e **React Navigation**.
* A todos os **contribuidores** que ajudam a tornar este projeto melhor.

---

Desenvolvido por Pietro Saccarrão Cougo -  **RM 555839**.
## Estrutura do Código

A organização do projeto foi pensada para ser clara e modular, facilitando a manutenção e a adição de novas funcionalidades.
