// Объявим переменные
let tabLink = document.querySelectorAll('.tab_link');
let tabContent = document.querySelectorAll('.tab_content')

// При клике запускается функция ниже с 3-я параметрами
function openPage(pageName, element, color) {

    // Скроем все элементы с классом .tab_content
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Удалим backgroundColor у всех элементов с классом .tab_link
    for (let i = 0; i < tabLink.length; i++) {
        tabLink[i].style.backgroundColor = "";
    }

    // pageName берёт из .tab_link значение, а потом берёт id у .tab_content
    document.getElementById(pageName).style.display = "block";

    // Изменяет backgroundColor у элемента (.tab_link) по которому click, тк стоит this
    element.style.backgroundColor = color;
}

// По дефолту кликается вкладка
document.querySelector('#defaultOpen').click();

