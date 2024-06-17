document.addEventListener("DOMContentLoaded", () => {
    // Definisi ikon-ikon SVG
    const icons = {
        "ki ki-back": `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3536 5.64645C14.5488 5.84171 14.5488 6.15829 14.3536 6.35355L8.70711 12L14.3536 17.6464C14.5488 17.8417 14.5488 18.1583 14.3536 18.3536C14.1583 18.5488 13.8417 18.5488 13.6464 18.3536L8 12.7071C7.60948 12.3166 7.60948 11.6834 8 11.2929L13.6464 5.64645C13.8417 5.45118 14.1583 5.45118 14.3536 5.64645Z" fill="black"/>
            </svg>
        `,
        "ki ki-forward": `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.64645 5.64645C9.45118 5.84171 9.45118 6.15829 9.64645 6.35355L15.2929 12L9.64645 17.6464C9.45118 17.8417 9.45118 18.1583 9.64645 18.3536C9.84171 18.5488 10.1583 18.5488 10.3536 18.3536L16 12.7071C16.3905 12.3166 16.3905 11.6834 16 11.2929L10.3536 5.64645C10.1583 5.45118 9.84171 5.45118 9.64645 5.64645Z" fill="black"/>
            </svg>
        `,
        // Tambahkan ikon-ikon lainnya di sini sesuai kebutuhan
    };

    // Tambahkan gaya CSS secara dinamis
    const style = document.createElement('style');
    style.textContent = `
        .icon-replacement {
            display: inline-block;
            width: 1em;
            height: 1em;
            vertical-align: middle;
        }
        .icon-replacement svg {
            width: 100%;
            height: 100%;
        }
    `;
    document.head.appendChild(style);

    // Temukan semua elemen <i> dengan atribut name yang sesuai dengan kunci dalam objek icons
    const iconElements = document.querySelectorAll('i[name]');

    // Gantikan setiap elemen <i> dengan SVG yang sesuai
    iconElements.forEach(icon => {
        const iconName = icon.getAttribute('name');
        if (icons[iconName]) {
            const span = document.createElement('span');
            span.classList.add('icon-replacement');
            span.innerHTML = icons[iconName].trim();
            icon.replaceWith(span);
        }
    });
});