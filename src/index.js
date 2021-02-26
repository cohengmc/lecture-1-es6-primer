this.name = 'Outer';

const obj = {
  name: 'Inner',
  arrow: () => {
    console.log('Arrow:\t\t' + this.name);
    console.log(this);
  },
  traditional() {
    console.log('Traditional:\t' + this.name);
    console.log(this);
  },
};

obj.arrow();
obj.traditional();
