# Read from the file words.txt and output the word frequency list to stdout.
cat words.txt |
sed 's/  */\n/g' |
grep -E '\w' |
sort |
uniq -c |
sort -nr |
sed 's/ *\([1-9][0-9]*\) \([a-z][a-z]*\)/\2 \1/g'