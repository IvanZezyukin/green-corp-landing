let animationInited = false;
//�������� �������� ���������� ��������
const INCREASE_NUMBER_ANIMATION_SPEED = 50;
function increaseNumberAnimationStep(i, element, endNumber) {
    if (i <= endNumber) {
        if (i === endNumber) {
            element.innerText = i + '+';
        } else {
            element.innerText = i;
        }
        i += 100;
        setTimeout(function () {
            increaseNumberAnimationStep(i, element, endNumber)
        }, INCREASE_NUMBER_ANIMATION_SPEED);
    }
}
function initIncreaseNumberAnimation() {
    let element = document.querySelector(".features__clients-count");
    console.log(element);
    increaseNumberAnimationStep(0, element, 5000);
}
//initIncreaseNumberAnimation();

//���� ������ ������������ ���� � ����� ��� ������ "������" � �������
document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
if (event.target.value === 'other') {
    // ������ �������� ��� ���� ��������� ����
    let formContainer = document.createElement("div");
    formContainer.classList.add("form__group");
    formContainer.classList.add("form__other-input");

    let input = document.createElement("input");
    input.placeholder = "�������, ������� ������ ������� �����";
    input.type = "number";

    formContainer.appendChild(input);

    document.querySelector('#form form').insertBefore(formContainer, document.querySelector('.form__submit'));
}

    let otherInput = document.querySelector(".form__other-input");

if (event.target.value !== 'other' && Boolean(otherInput)) {
    // ������� ����� ����������� ��������� ����, ���� ��� ���� � DOM
    document.querySelector("#form form").removeChild(otherInput);
}
});

//������ �������� ����� ��� �������
function updateScroll() {
    if (window.scrollY > 0) {
        let header = document.querySelector("header");
        header.classList.add("header__scrolled");
    } else {
        let header = document.querySelector("header");
        header.classList.remove("header__scrolled");
    };
    //������ ���� ��������� � �������� ���������� ��������, ������� ����� ��������� ��� ������� � ����� �����
    let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
    let windowBottomPosition = window.scrollY + window.innerHeight;
    if (windowBottomPosition >= countElementPosition && !animationInited) {
        animationInited = true;
        initIncreaseNumberAnimation();
    };
};
window.addEventListener("scroll", updateScroll);

//������ ������� ������ ��� ����� �� ������� �������

function addSmoothScroll(anchor) {
    anchor.addEventListener('click', onLinkClick);
};
function onLinkClick(event) {
    event.preventDefault();
    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
};
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    addSmoothScroll(anchor);
});
//addSmoothScroll(document.querySelector('.more-button'));
document.querySelectorAll('.more-button').forEach(anchor => {
    addSmoothScroll(anchor);
});