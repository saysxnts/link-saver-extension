# Extensão "Link Saver" para Chrome

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Chrome](https://img.shields.io/badge/Google_Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)

## 📖 Sobre o Projeto

Esta é uma extensão para o navegador Google Chrome, desenvolvida com HTML, CSS e JavaScript puro. Ela oferece uma maneira simples e rápida de salvar links de páginas da web para visualização posterior. O popup da extensão permite salvar o link da aba atual com um clique e exibe uma lista de todos os links já salvos.

O projeto é um excelente exercício prático sobre como funcionam as extensões de navegador, utilizando APIs específicas do Chrome para interagir com o ambiente do usuário.

---

## ✨ Funcionalidades

- **Salvar Link com Um Clique:** Captura automaticamente a URL e o título da aba ativa e os salva.
- **Listagem de Links:** Exibe uma lista de todos os links salvos diretamente no popup da extensão.
- **Acesso Rápido:** Os links na lista são clicáveis e abrem em uma nova aba.
- **Persistência de Dados:** Utiliza a API `chrome.storage` para garantir que os links salvos permaneçam mesmo após fechar o navegador.
- **Limpeza de Dados:** Um botão permite limpar todos os links salvos de uma só vez.
- **Interface Moderna:** O popup possui um design limpo e estilizado com um tema escuro.

---

## 🛠️ Tecnologias e Conceitos Praticados

- **Desenvolvimento de Extensões para Chrome (Manifest V3)**
- **`manifest.json`**: Arquivo de configuração que define as permissões, o popup e o ícone da extensão.
- **APIs de Extensão do Chrome**:
  - **`chrome.tabs API`**: Para obter informações sobre a aba atualmente ativa.
  - **`chrome.storage API`**: Para salvar e ler dados de forma persistente e sincronizada.
- **JavaScript (ES6+)**: Lógica para manipulação de eventos, interação com as APIs do Chrome e manipulação do DOM.
- **HTML5 e CSS3**: Para a estrutura e o design da interface do popup.
- **DOM (Document Object Model)**: Criação e atualização dinâmica da lista de links no popup.

---

## 🚀 Como Instalar e Rodar o Projeto

A instalação de uma extensão em modo de desenvolvimento é diferente de rodar um site ou um servidor.

### **Pré-requisitos**

- Navegador Google Chrome.

### **Instalação e Execução**

1.  **Clone o repositório**:
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```

2.  **Navegue até a pasta do projeto**:
    ```bash
    cd link-saver-extension
    ```

3.  **Abra o Chrome e vá para a página de Extensões**:
    - Digite `chrome://extensions` na barra de endereço e aperte Enter.

4.  **Ative o Modo do Desenvolvedor**:
    - No canto superior direito da página, ative o interruptor **"Modo do desenvolvedor"**.

5.  **Carregue a Extensão**:
    - Novos botões aparecerão. Clique em **"Carregar sem compactação"**.
    - Uma janela do explorador de arquivos será aberta. Selecione a **pasta inteira** `link-saver-extension` e confirme.

6.  **Pronto!** A extensão será instalada e seu ícone aparecerá na barra de ferramentas do Chrome (talvez dentro do ícone de quebra-cabeça).

---

## ✒️ Autor

**Guilherme**
