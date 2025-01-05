//N AVBAR SECTION
// Selecting Navbar
const navbar = document.querySelector('.nav-scroll');

// When scroll, change background color
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    navbar.classList.remove('transparent'); // Scroll 
  } else {
    navbar.classList.add('transparent'); // Transparent
  }
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


  /* OUR CLASSES  */
  /* With this function, we choose 'onclick' item */
  function showContent(contendId) {

    event.preventDefault();
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
    const activeSection = document.getElementById(contendId);
      if (activeSection) {
        activeSection.style.display = 'flex';
      }
    
  }

  /* BMI SECTION */
function calculateBMI() {
  // Kullanıcıdan boy ve kilo bilgilerini al
  const height = document.getElementById('height').value / 100; // cm to m
  const weight = document.getElementById('weight').value;
  
  if (height > 0 && weight > 0) { // Geçerli boy ve kilo kontrolü
  const bmi = weight / (height * height); // BMI hesaplama
  const indicator = document.getElementById('bmi-indicator');
  const bmiImage = document.getElementById('bmi-image');
  const bmiResult = document.getElementById('bmi-result'); // Sonuç göstergesi

// BMI sonucunu HTML'e yazdır
bmiResult.innerText = `Your BMI is: ${bmi.toFixed(2)}`;

// BMI sonucuna göre oku yerleştir
if (bmi < 18.5) {
  indicator.style.left = '15%'; // Sol alt
} else if (bmi >= 18.5 && bmi <= 24.9) {
  indicator.style.left = '30%'; // Sol orta
} else if (bmi >= 25 && bmi <= 29.9) {
  indicator.style.left = '50%'; // Orta
} else if (bmi >= 30 && bmi <= 34.9) {
  indicator.style.left = '65%'; // Sağ orta
} else if (bmi > 35) {
  indicator.style.left = '80%'; // Sağ alt
}
} else {
  
}
}

