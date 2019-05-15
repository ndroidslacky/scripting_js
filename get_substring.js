var str_to_check_for_substrings = 'main'
str_length = str_to_check_for_substrings.length;
substrings=''
console.log('str_length '+str_length)
for(i=0;i<str_length;i++){
  for(j=i;j<str_length;j++){
    substrings += str_to_check_for_substrings[j]+', '
  }
  substrings += ' \/\/ '
}
console.log(substrings)
