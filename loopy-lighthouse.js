for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    console.log('Loopy' + i);
  }
  if (i % 4 === 0) {
    console.log('Lighthouse' + i);
  }
  if (i % 3 === 0 && i % 4 === 0) {
    console.log('LoopyLighthouse' + i);
  }
  console.log(i);
}