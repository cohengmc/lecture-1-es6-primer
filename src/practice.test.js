import { practice1, practice2, practice3, practice4, practice5, practice6 } from './practice';

const testTimeBetween = ({ target, t1, t2 }) => {
  expect(t2 - t1).toBeGreaterThan(target - 50);
  expect(t2 - t1).toBeLessThan(target + 50);
};

test('example function1', async () => {
  // return practice1().then(r => {
  //   expect(r).toBe('E-39');
  // });

  const r = await practice1();
  expect(r).toBe('E-39');
});

test('example function2', () => {
  const t1 = new Date().getTime();

  return practice2().then(r => {
    const t2 = new Date().getTime();
    expect(r).toBe('E-39');
    testTimeBetween({
      target: 3000,
      t1,
      t2,
    });
  });
});

test('example function3', () => {
  return Promise.all(practice3()).then(all => {
    all.forEach((r, i) => {
      expect(r).toBe(`E-39-${i + 1}`);
    });
  });
});

test('example function4 with 5', () => {
  return Promise.all(practice4(5)).then(all => {
    all.forEach((r, i) => {
      expect(r).toBe(`E-39-${i}`);
    });
  });
});

test('example function4 with 10', () => {
  return Promise.all(practice4(5)).then(all => {
    all.forEach((r, i) => {
      expect(r).toBe(`E-39-${i}`);
    });
  });
});

test('example function5 with number', () => {
  const t1 = new Date().getTime();

  return practice5(5).then(r => {
    const t2 = new Date().getTime();
    expect(r).toBe('number');
    testTimeBetween({
      target: 1000,
      t1,
      t2,
    });
  });
});

test('example function5 with vowel', () => {
  const t1 = new Date().getTime();

  return practice5('a').then(r => {
    const t2 = new Date().getTime();
    expect(r).toBe('vowel');
    testTimeBetween({
      target: 2000,
      t1,
      t2,
    });
  });
});

test('example function5 with consonant', () => {
  const t1 = new Date().getTime();

  return practice5('c').then(r => {
    const t2 = new Date().getTime();
    expect(r).toBe('consonant');
    testTimeBetween({
      target: 3000,
      t1,
      t2,
    });
  });
});

test('example function5 with invalid 1', () => {
  return practice5('casdf').catch(r => {
    expect(r).toBe('error');
  });
});

test('example function5 with invalid 2', () => {
  return practice5().catch(r => {
    expect(r).toBe('error');
  });
});

test('example function5 with invalid 3', () => {
  return practice5('').catch(r => {
    expect(r).toBe('error');
  });
});

test('example function6 with invalid', () => {
  return practice6().catch(r => {
    expect(r).toBe('no category');
  });
});

test('example function6 with explicit', () => {
  return practice6('explicit').catch(r => {
    expect(r).toBe('explicit joke');
  });
});

test('example function6 with celebrity', () => {
  return practice6('celebrity').then(r => {
    expect(r.header).toBe('safe for E-39');
    expect(r.categories).toContain('celebrity');
  });
});

// test('example function6 with animal', () => {
//   return practice6('animal').then(r => {
//     expect(r.header).toBe('safe for E-39');
//     expect(r.categories).toContain('animal');
//   });
// });
