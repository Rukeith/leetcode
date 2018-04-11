/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */

public class Solution extends GuessGame {
  public int guessNumber(int n) {
    int hi = n;
    int lo = 0;
    int mid = 0;
    while(lo <= hi) {
      mid = lo + (hi - lo) / 2;
      int currGuess = guess(mid);
      if (currGuess == 0) return mid;
      if (currGuess == -1) hi = mid - 1;
      if (currGuess == 1) lo = mid + 1;
    }
    return 0;
  }
}