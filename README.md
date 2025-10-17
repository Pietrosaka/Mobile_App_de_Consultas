
# 🏥 Aplicativo Mobile de Marcação de Consultas Médicas

Este projeto é um **aplicativo mobile** desenvolvido em **React Native** com **Expo**, que oferece uma plataforma completa para pacientes, médicos e administradores gerenciarem consultas médicas de forma intuitiva, segura e eficiente.

---

## 🎯 Objetivo do Projeto

O principal objetivo do aplicativo é centralizar o agendamento e gerenciamento de consultas médicas, permitindo que:

- Pacientes possam marcar, cancelar e acompanhar suas consultas de forma prática.
- Médicos consigam visualizar suas agendas, gerenciar pacientes e acompanhar histórico de consultas.
- Administradores monitorem o fluxo de consultas, pacientes e profissionais de forma organizada.

---

## 📊 Funcionalidades Detalhadas

### Para Pacientes
- Cadastro e login seguro.
- Agendamento de consultas médicas por especialidade e disponibilidade do médico.
- Cancelamento e reagendamento de consultas.
- Visualização de histórico de consultas e médicos atendidos.
- Recebimento de notificações e lembretes de consultas.
- Feedback e avaliação do atendimento médico.

### Para Médicos
- Login seguro e gerenciamento de perfil profissional.
- Visualização de agenda diária, semanal ou mensal.
- Notificações sobre novos agendamentos ou cancelamentos.
- Acesso ao histórico de pacientes e consultas realizadas.
- Registro de observações e prontuários médicos (dependendo da implementação).

### Para Administradores
- Controle e monitoramento de consultas e usuários cadastrados.
- Relatórios de desempenho de médicos e satisfação de pacientes.
- Gerenciamento de especialidades médicas e disponibilidade de médicos.
- Exportação de dados para análise em planilhas ou BI.

---

## 📱 Fluxo de Usuário (UX)

1. **Tela Inicial / Boas-vindas**: Apresenta logo do app e opções de login ou cadastro.
2. **Cadastro / Login**: Usuário se autentica ou cria conta.
3. **Dashboard**:  
   - Paciente: lista de consultas agendadas, botão para nova consulta.  
   - Médico: agenda do dia, notificações de pacientes.  
   - Administrador: resumo de usuários e consultas.
4. **Agendamento de Consulta**: Seleção de especialidade, médico e horário disponível.
5. **Confirmação de Consulta**: Resumo da consulta e envio de notificação.
6. **Histórico e Feedback**: Visualização de consultas passadas e possibilidade de avaliar o atendimento.

---

## 🚀 Tecnologias e Ferramentas Utilizadas

- **React Native** → Desenvolvimento multiplataforma (Android e iOS).
- **Expo** → Facilita testes, deploy e uso de APIs nativas.
- **Firebase / SQLite** → Armazenamento de dados, autenticação e notificações.
- **React Navigation** → Navegação entre telas e stacks.
- **Axios / Fetch** → Comunicação com APIs externas (se necessário).
- **Lottie / React Native Animations** → Animações e elementos interativos.

---

## 🗂 Estrutura do Projeto

```
📂 App-Consultas
 ┣ 📱 App                  # Código-fonte React Native
 ┃ ┣ 📂 Components         # Componentes reutilizáveis
 ┃ ┣ 📂 Screens            # Telas do aplicativo
 ┃ ┣ 📂 Services           # Conexão com APIs ou banco
 ┃ ┣ 📂 Styles             # Arquivos de estilo separados
 ┣ 📂 Assets               # Imagens, ícones e fontes
 ┣ 📂 Dados                # Base de dados ou mocks para testes
 ┣ 📑 README.md            # Documentação do projeto
 ┣ 📂 Tests                # Testes unitários e integrados
```

---

## 📊 KPIs e Métricas Possíveis

1. Total de consultas agendadas por dia/semana/mês.
2. Taxa de comparecimento de pacientes.
3. Número de consultas canceladas ou reagendadas.
4. Avaliação média do atendimento pelos pacientes.
5. Médicos mais solicitados por especialidade.
6. Tempo médio de resposta ou confirmação de consultas.

## ✅ Boas Práticas e Considerações

- Uso de autenticação segura para todos os usuários.
- Estrutura modular de código para fácil manutenção.
- Componentes reutilizáveis para consistência visual.
- Validação de dados para evitar erros de agendamento.
- Compatibilidade com diferentes tamanhos de tela e dispositivos.

---

## 📬 Contato

👤 Desenvolvido por **Pietro Saka**  
🔗 [LinkedIn](https://www.linkedin.com/in/pietro-saccarr%C3%A3o-cougo/)  
✉ Email: pietrocougo@gmail.com
