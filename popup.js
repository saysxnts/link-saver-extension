// popup.js

document.addEventListener('DOMContentLoaded', () => {
    const saveBtn = document.getElementById('save-link-btn');
    const clearBtn = document.getElementById('clear-links-btn');
    const linksList = document.getElementById('links-list');

    // Função para exibir os links salvos na tela
    function displayLinks() {
        // Pede ao chrome.storage para pegar a lista de 'links'
        chrome.storage.sync.get(['links'], (result) => {
            linksList.innerHTML = ''; // Limpa a lista atual
            if (result.links && result.links.length > 0) {
                result.links.forEach((link, index) => {
                    const listItem = document.createElement('li');
                    const linkAnchor = document.createElement('a');
                    linkAnchor.href = link.url;
                    linkAnchor.textContent = link.title || link.url;
                    linkAnchor.target = '_blank'; // Abre o link em uma nova aba
                    listItem.appendChild(linkAnchor);
                    linksList.appendChild(listItem);
                });
            } else {
                linksList.innerHTML = '<li>Nenhum link salvo ainda.</li>';
            }
        });
    }

    // Salvar o link da aba atual
    saveBtn.addEventListener('click', () => {
        // Pede à API de abas do Chrome pela aba que está ativa e na janela atual
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const currentTab = tabs[0];
            if (currentTab) {
                const newLink = { url: currentTab.url, title: currentTab.title };
                // Pega a lista existente, adiciona o novo link e salva de volta
                chrome.storage.sync.get(['links'], (result) => {
                    const links = result.links || [];
                    links.push(newLink);
                    chrome.storage.sync.set({ links: links }, () => {
                        console.log('Link salvo!');
                        displayLinks(); // Atualiza a exibição
                    });
                });
            }
        });
    });

    // Limpar todos os links
    clearBtn.addEventListener('click', () => {
        // Salva um array vazio no armazenamento, efetivamente limpando-o
        chrome.storage.sync.set({ links: [] }, () => {
            console.log('Todos os links foram limpos!');
            displayLinks(); // Atualiza a exibição
        });
    });

    // Exibe os links salvos assim que o popup for aberto
    displayLinks();
});