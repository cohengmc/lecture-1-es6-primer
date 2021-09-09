var l = console.log;

// const old = 'hello ' + (1 + 2) + ' world';
// l(old);

// const t2 = `hello ${1 + 2} world`;

// const multiline = `
//  hi 1
//  hi 2
//  hi 3
//  `;

// //  const uselessFunction = () => {
// //    return 'something';
// //  }

// //  const res = uselessFunction`hello world`;
// //  l(res);

// //  const merger = (pieces, ...values) => {
// //   const merged = [];

// //   for (let i = 0; i < pieces.length; i++) {
// //     merged.push(pieces[i]);
// //     if (values[i]) {
// //       merged.push(values[i]);
// //     }
// //   }

// //   return merged.join('');
// //  }

// //  const name = 'Nico';
// //  const other = ['Vue', 'Angular'].sort(() => Math.random() - 0.5)[0];
// //  const res = merger`my name is ${name}, React is better than ${other}`;
// //  l(res);

// //  const italicize = (pieces, ...values) => {
// //   const merged = [];

// //   for (let i = 0; i < pieces.length; i++) {
// //     merged.push(pieces[i]);
// //     if (values[i]) {
// //       merged.push(`<i>${values[i]}</i>`);
// //     }
// //   }

// //   return merged.join('');
// // }

// const request = n => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`${n} - inside promise - completed`);
//       resolve('Im done');
//     }, 5000);
//   });
// };

// const work = n => {
//   console.log(`${n} - Before request...`, new Date());

//   console.log(`${n} - Making request...`, new Date());
//   request(n).then(r => {
//     console.log(`${n} - in work`, r);
//   });

//   console.log(`${n} - After request...`, new Date());

//   setTimeout(() => {
//     work(n + 1);
//   }, 1000);
// };

// work(0);
