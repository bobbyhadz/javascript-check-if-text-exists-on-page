console.log('bobbyhadz.com');

const text = 'bobby hadz tutorial';

if (document.body.textContent.includes(text)) {
  console.log('✅ text exists on page');
} else {
  console.log('⛔️ text does not exist on page');
}
