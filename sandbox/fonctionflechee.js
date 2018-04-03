var reverse_str = str =>
{
  for (var i = str.length - 1, reversed = ''; i >= 0; reversed += str[i--])
  {}
  return(reversed);
};

console.log(reverse_str('123456789'));
console.log(reverse_str('Ce mec'));
